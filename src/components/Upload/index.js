import React, { Component } from 'react';

import RcUpload from 'rc-upload';
import List from 'antd-mobile/lib/list';
import ListItemFile from './ListItemFile';

import { PercentStatus } from './enum';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

import _omit from 'lodash/omit';
import _set from 'lodash/set';
import _map from 'lodash/map';
import _uniqueId from 'lodash/uniqueId';
import _isFunction from 'lodash/isFunction';

import './style/index';

const error = message => { throw new Error(message) };
const exclude = ['files', 'onRemove', 'onClickFile', 'List', 'ListItemFile'];

export default class Upload extends Component {

  constructor(props) {
    super(...arguments);

    const files = this.completionFiles(props.files) || [];
    this.state = { files }
  }

  //  补全文件格式
  completionFiles = (files = []) => {
    return files.map((file = {}) => {
      const { uid, url, name, status } = file;
      !uid && _set(file, 'uid', _uniqueId(`upload-${new Date().getTime()}-`));
      if (url) {
        !status && _set(file, 'status', PercentStatus.Done);
        !name && _set(file, 'name', url.split('/').pop());
      }
      return file;
    });
  };

  //  上传前的默认行为
  beforeUploadAction = (file = {}) => {
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
  beforeUpload = (file = {}, files = []) => {
    const { beforeUpload = null } = this.props;
    if (_isFunction(beforeUpload)) {
      return beforeUpload(file, files, this.beforeUploadAction);
    } else {
      return this.beforeUploadAction(file);
    }
  };

  //  上传错误的处理
  onError = async (err = {}, response = {}, file = {}) => {
    if (file.uid) {
      await this.setState(state => ({
        ...state,
        files: _map(state.files, (file = {}) => {
          const { uid = null } = file;
          if (uid === file.uid) {
            _set(file, 'status', PercentStatus.Error);
          }
          return file;
        })
      }));
    }
    if(_isFunction(this.props.onError)) {
      await this.props.onError(err, response, file);
    }
    await this.onComplete();
  };

  //  上传成功的处理
  onSuccess = async (res = {}, file = {}, xhr = {}) => {
    if (file.uid) {
      const url = this.getSuccessFileUrl(res);
      await this.setState(state => ({
        ...state,
        files: _map(state.files, (file = {}) => {
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
      await this.props.onSuccess(res, file, xhr);
    }
    await this.onComplete();
  };

  //  获取上传成功之后返回的 URL
  getSuccessFileUrl = (res = {}) => {
    if(_isFunction(this.props.getSuccessFileUrl)) {
      return this.props.getSuccessFileUrl(res);
    }
  };

  //  上传进度的处理
  onProgress = (event = {}, file = {}) => {
    if (file.uid) {
      const { percent = 0 } = event;
      this.setState(state => ({
        ...state,
        files: _map(state.files, (file = {}) => {
          const { uid = null } = file;
          if (uid === file.uid && percent) {
            _set(file, 'percent', percent);
          }
          return file;
        })
      }));
    }
    if(_isFunction(this.props.onProgress)) {
      this.props.onProgress(event, file);
    }
  };

  //  上传完成后的回调
  onComplete = async () => {
    if(_isFunction(this.props.onComplete)) {
      await this.props.onComplete(this.state.files);
    }
  };

  //  是否超出文件大小
  isMatchSize = (file = {}) => {
    const { size = null } = this.props;
    if (size && file.size > size) {
      error('超出上传文件大小！');
    }
  };

  //  是否超出文件总数
  isMatchLimit = () => {
    const { files = [] } = this.state;
    const { limit = null } = this.props;
    if (limit && (files.length + 2) > limit) {
      error('超出上传文件总数！');
    }
  };

  render () {
    const rcUploadProps = _omit(this.props, exclude);
    const { files = [] } = this.state;

    return (
      <div className={'antd-mobile-upload'}>
        <List>
          {Array.isArray(files) && files.map((file = {}, index) => {
            return (<ListItemFile {...file} key={index}/>);
          })}
          <RcUpload
            {...rcUploadProps}
            beforeUpload={this.beforeUpload}
            onError={this.onError}
            onSuccess={this.onSuccess}
            onProgress={this.onProgress}
          />
        </List>
      </div>
    );
  }
}

Upload.propTypes = propTypes;
Upload.defaultProps = defaultProps;
