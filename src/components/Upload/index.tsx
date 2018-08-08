import * as React from 'react';

import RcUpload from 'rc-upload';
import List from 'antd-mobile/lib/list';
import ListItem from 'antd-mobile/lib/list/ListItem';
import Button from 'antd-mobile/lib/button';

import ListItemFile from './ListItemFile';

import { RcUploadProps, UploadProps, RcFile, UFiles, UFile } from './PropsType';

import _omit from 'lodash/omit';
import _set from 'lodash/set';
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

const children: any = (<ListItem extra={extra}>{''}</ListItem>);

const exclude: Array<string> = [
  'files', 'onRemove', 'onClickFile', 'List', 'ListItemFile'
];

enum PercentStatus {
  Ready = 'ready',
  Uploading = 'uploading',
  Done = 'done',
  Error = 'error'
};

export default class Upload extends React.Component<RcUploadProps, UploadProps, any> {

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

    // List,
    // ListItemFile,
  };

  //  补全文件格式
  completionFiles = (files: UFiles) => {
    return (files as Array).map((file: UFile) => {
      const { uid } = file;
      !uid && _set(file, 'uid', _uniqueId(`upload-${new Date().getTime()}-`));
      return file;
    });
  };

  //  上传前的默认行为
  beforeUploadAction = (file: RcFile) => {
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
  beforeUpload = (file: RcFile, files: Array<RcFile>) => {
    const { beforeUpload = null } = this.props;
    if (_isFunction(beforeUpload)) {
      return (beforeUpload as Function)(file, files, this.beforeUploadAction);
    } else {
      return this.beforeUploadAction(file);
    }
  };

  //  是否超出文件大小
  isMatchSize = (file: RcFile) => {
    const { size = null } = this.props;
    if (size && file.size > size) {
      throw new Error('超出上传文件大小！');
    }
  };

  //  是否超出文件总数
  isMatchLimit = () => {
    const { files = [] } = this.state;
    const { limit = null } = this.props;
    if (limit && ((files as Array).length + 2) > limit) {
      throw new Error('超出上传文件总数！');
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
          />
        </List>
      </div>
    );
  }
}
