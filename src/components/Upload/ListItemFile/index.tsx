import * as React from 'react';
import ListItem from 'antd-mobile/lib/list/ListItem';
import Icon from 'antd-mobile/lib/icon';

import { ListItemFileProps, UFile } from '../PropsType';

import _isFunction from 'lodash/isFunction';

export default class ListItemFile extends React.PureComponent<UFile, ListItemFileProps, any> {

  onRemove = (file: UFile, e: Event) => {
    const { onRemove = null } = this.props;
    e.stopPropagation();
    if (_isFunction(onRemove)) {
      onRemove(file, e);
    }
  };

  onClickFile = (file: UFile, e: Event) => {
    const { onClickFile = null } = this.props;
    const { url } = file;
    e.stopPropagation();
    const open = _isFunction(onClickFile)? onClickFile: window.open;
    if (url) {
      open(file.url);
    } else {
      console.warn('url is null!');
    }
  };

  render () {
    const file = this.props;
    const { uid, name } = file;
    return (
      <ListItem
        key={uid}
        extra={<Icon onClick={(e: Event) => this.onRemove(file, e)} type={'cross'} size={'xs'} />}
        onClick={(e: Event) => this.onClickFile(file, e)}
      >
        {name}
      </ListItem>
    );
  }
}
