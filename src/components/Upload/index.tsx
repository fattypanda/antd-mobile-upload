import * as React from 'react';

import RcUpload from 'rc-upload';
import List from 'antd-mobile/lib/list';
import ListItem from 'antd-mobile/lib/list/ListItem';
import Button from 'antd-mobile/lib/button';

import ListItemFile from './ListItemFile';

import { UploadProps, RcFile, UFiles, UFile } from './PropsType';
import { PercentStatus } from './enum';

import _omit from 'lodash/omit';
import _set from 'lodash/set';
import _map from 'lodash/map';
import _uniqueId from 'lodash/uniqueId';
import _isFunction from 'lodash/isFunction';

import './style';

const extra: any = (
  <Button
    size={'small'}
    type={'primary'}
    onClick={(e: Event) => e.target.click()}
  >
    上传
  </Button>
);

const error = (message: string): never => {
  throw new Error(message);
}

const children: any = (<ListItem extra={extra}>{''}</ListItem>);

const exclude: Array<string> = [
  'files', 'onRemove', 'onClickFile', 'List', 'ListItemFile'
];



export default class Upload extends React.Component<UploadProps> {

  constructor(props) {
    super(...arguments);

    this.state = {
      files: this.completionFiles(props.files) || [],
    }
  }

  static defaultProps = {
    children,

    size: null,
    limit: null,
    files: [],
    onRemove: null,
    onClickFile: null,

    getSuccessFileUrl: (res: Response): string => {
      const { ret: { url = '' } = {}} = res;
      return url;
    },

    // List,
    // ListItemFile,
  };

  //  补全文件格式
  completionFiles = (files: UFiles): UFiles => {
    return (files as Array).map((file: UFile) => {
      const { uid } = file;
      !uid && _set(file, 'uid', _uniqueId(`upload-${new Date().getTime()}-`));
      return file;
    });
  };

  //  上传前的默认行为
  beforeUploadAction = (file: RcFile): void => {
    this.isMatchLimit();
    this.isMatchSize(file);

    this.setState({
      files: [
        ...this.state.files || [],
        {
          file,
          name: file.name,
          uid: file.uid,
          percent: 0,
          status: PercentStatus.Ready,
        }
      ]
    });
  };

  //  上传前的处理
  beforeUpload = (file: RcFile, files: Array<RcFile>): void|boolean => {
    const { beforeUpload = null } = this.props;
    if (_isFunction(beforeUpload)) {
      return (beforeUpload as Function)(file, files, this.beforeUploadAction);
    } else {
      return (this.beforeUploadAction(file) as Boolean);
    }
  };

  //  上传错误的处理
  onError = (err: Error, response: Response, file: RcFile): void => {
    if (file.uid) {
      this.setState(state => ({
        ...state,
        files: _map(state.files, (file: UFile) => {
          const { uid = null } = file;
          if (uid === file.uid) {
            _set(file, 'status', PercentStatus.Error);
          }
          return file;
        })
      }));
    }
    if(_isFunction(this.props.onError)) {
      this.props.onError(err, response, file);
    }
  };

  //  上传成功的处理
  onSuccess = (res: Response, file: RcFile, xhr: XMLHttpRequest): void => {
    if (file.uid) {
      const url = this.getSuccessFileUrl(res);
      console.log(res, url);
      this.setState(state => ({
        ...state,
        files: _map(state.files, (file: UFile) => {
          const { uid = null } = file;
          if (uid === file.uid) {
            _set(file, 'status', PercentStatus.Done);
            if (url) {
              _set(file, 'url', url);
            }
          }
          return file;
        })
      }));
    }
    if(_isFunction(this.props.onSuccess)) {
      this.props.onSuccess(res, file, xhr);
    }
  };

  //  获取上传成功之后返回的 URL
  getSuccessFileUrl = (res: Response): string => {
    if(_isFunction(this.props.getSuccessFileUrl)) {
      return this.props.getSuccessFileUrl(res);
    }
  };

  //  是否超出文件大小
  isMatchSize = (file: RcFile): void => {
    const { size = null } = this.props;
    if (size && file.size > size) {
      error('超出上传文件大小！');
    }
  };

  //  是否超出文件总数
  isMatchLimit = (): void => {
    const { files = [] } = this.state;
    const { limit = null } = this.props;
    if (limit && ((files as Array).length + 2) > limit) {
      error('超出上传文件总数！');
    }
  };

  render () {
    const rcUploadProps = _omit(this.props, exclude);
    const { files = [] } = this.state;

    return (
      <div className={'antd-mobile-upload'}>
        <List>
          {Array.isArray(files) && (files as Array).map((file: UFile, index: number) => {
            return (<ListItemFile {...file} key={index}/>);
          })}
          <RcUpload
            {...rcUploadProps}
            beforeUpload={this.beforeUpload}
            onError={this.onError}
            onSuccess={this.onSuccess}
          />
        </List>
      </div>
    );
  }
}
