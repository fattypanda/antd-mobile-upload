import React from 'react';
import ListItem from 'antd-mobile/lib/list/ListItem';
import Button from 'antd-mobile/lib/button';

const noop = () => {};
const extra = (<Button size={'small'} type={'primary'} onClick={e => e.target.click()}>上传</Button>);
const children = (<ListItem extra={extra}>{''}</ListItem>);

const RcUpload = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onReady: noop,
  onStart: noop,
  onError: noop,
  onSuccess: noop,
  supportServerRender: false,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false
};

const Upload = {
  ...RcUpload,

  children,
  size: null,
  limit: null,
  files: [],
  onRemove: noop,
  onClickFile: noop,
  onComplete: noop,
  getSuccessFileUrl: res => {
    const { ret: { url = '' } = {}} = res || {};
    return url;
  },
};

export default Upload;
