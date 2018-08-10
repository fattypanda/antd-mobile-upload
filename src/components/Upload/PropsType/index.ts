import RcUploadProps, { RcFile } from './RcUploadProps';
import { PercentStatus } from '../enum';

export {
  RcUploadProps,
  RcFile
}

export interface UFile {
  name: string;
  uid: string;
  url?: string;
  status?: PercentStatus;
  percent?: number;
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

  onChange: (files: Array<UFile>) => void;
}
