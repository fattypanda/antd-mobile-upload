import React, { PureComponent } from 'react';
import Upload from 'src/components/Upload';

export default class PageUpload extends PureComponent {

  render () {
    return (
      <Upload multiple action={'/api/upload'} />
    );
  }
}
