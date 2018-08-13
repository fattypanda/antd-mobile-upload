import React, { PureComponent, Fragment } from 'react';
import ListItem from 'antd-mobile/lib/list/ListItem';
import Icon from 'antd-mobile/lib/icon';

import PT from 'prop-types';
import _isFunction from 'lodash/isFunction';
import cs from 'classnames';

import './style';

export default class ListItemFile extends PureComponent {

  onRemove = (file = {}, e = {}) => {
    e.stopPropagation();
    if (_isFunction(this.props.onRemove)) {
      this.props.onRemove(file, e);
    }
  };

  onClickFile = (file = {}, e = {}) => {
    const { url } = file;
    e.stopPropagation();
    const open = _isFunction(this.props.onClickFile)? this.props.onClickFile: window.open;
    if (url) {
      open(file.url);
    } else {
      console.warn('url is null!');
    }
  };

  render () {
    const file = this.props;
    const { uid, name, status, percent } = file;

    return (
      <ListItem
        key={uid}
        thumb={<div className={cs('am-upload-annex', { [status]: !!status })}/>}
        extra={
          <Fragment>
            {percent < 100 && `${parseInt(percent.toString(), 10)}% `}
            <Icon onClick={e => this.onRemove(file, e)} type={'cross'} size={'xs'} />
          </Fragment>
        }
        onClick={e => this.onClickFile(file, e)}
      >
        {name}
      </ListItem>
    );
  }
}

ListItemFile.propTypes = {
  file: PT.object.isRequired,
  onRemove: PT.func,
  onClickFile: PT.func,
};
