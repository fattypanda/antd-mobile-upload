declare module "*.css" {
  const content: {
    [propName: string]: any
  };
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const content: object;
  export default content;
}

declare module 'rc-upload';

declare module 'lodash';
declare module 'lodash/*';

declare module 'classnames';
