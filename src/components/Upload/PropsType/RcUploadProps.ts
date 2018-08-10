export interface RcFile extends File {
  uid?: string;
}

interface noop {
  (): void;
}

interface onReady extends noop {}

interface onAction {
  (file: File): string;
}

interface onData {
  (file: File): object;
}

interface onError {
  (event: Error, response: Response, file: File): void;
}

interface onSuccess {
  (body: Response, file: File, xhr: XMLHttpRequestUpload): void;
}

interface onProgress {
  (event: ProgressEvent, file: RcFile): void;
}

export default interface RcUploadProps {
  name?: string;
  style?: object;
  className?: string;
  disabled?: boolean;
  component?: string;
  supportServerRender?: boolean;
  onReady?: onReady;
  action?: string|onAction|Promise;
  directory?: boolean;
  data?: object|onData;
  headers?: object;
  accept?: string;
  multiple?: boolean;
  onStart?: noop;
  onError?: onError;
  onSuccess?: onSuccess;
  onProgress?: onProgress;
  // beforeUpload?: noop|null;
  customRequest?: noop|null;
  withCredentials?: boolean;
}
