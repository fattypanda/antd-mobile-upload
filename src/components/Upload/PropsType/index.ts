import RcUploadProps from './RcUploadProps';

export {
  RcUploadProps
}

export interface RcFile extends File {
  uid?: string;
}

export interface UFile {
  name: string;
  uid: string;
  url?: string;
  file?: RcFile;
}

export interface UFiles {
  [index: number]: UFile;
}

export interface ListItemFileProps {
  onRemove?: (file: UFile, e: Event) => {};
  onClickFile?: (file: UFile, e: Event) => {};
  children?: any;
};

export interface UploadProps extends ListItemFileProps, RcUploadProps {
  files?: UFiles;

  beforeUpload?: (file: RcFile, files: Array<RcFile>, defaultAction: () => never) => void;

  getSuccessFileUrl?: (res: Response) => string;
}
