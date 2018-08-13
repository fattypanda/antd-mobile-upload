import PT from 'prop-types';

const RcUpload = {
  component: PT.string,
  style: PT.object,
  prefixCls: PT.string,
  action: PT.oneOfType([PT.string, PT.func]),
  name: PT.string,
  multipart: PT.bool,
  directory: PT.bool,
  onError: PT.func,
  onSuccess: PT.func,
  onProgress: PT.func,
  onStart: PT.func,
  data: PT.oneOfType([PT.object, PT.func]),
  headers: PT.object,
  accept: PT.string,
  multiple: PT.bool,
  disabled: PT.bool,
  beforeUpload: PT.func,
  customRequest: PT.func,
  onReady: PT.func,
  withCredentials: PT.bool,
  supportServerRender: PT.bool,
  files: PT.arrayOf(PT.object).isRequired,
  size: PT.number,
  limit: PT.number,
  onRemove: PT.func,
  onClickFile: PT.func,
  onComplete: PT.func,
  getSuccessFileUrl: PT.func,
};

const Upload = {
  ...RcUpload,

  files: PT.arrayOf(PT.object).isRequired,
  size: PT.number,
  limit: PT.number,
  onRemove: PT.func,
  onClickFile: PT.func,
  onComplete: PT.func,
  getSuccessFileUrl: PT.func,
};

export default Upload;
