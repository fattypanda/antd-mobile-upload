# antd-mobile-upload

#### 项目介绍
基于 rc-upload 和 antd-mobile 的上传组件

#### 软件架构
适用于 dva 和 umi 项目

#### 安装教程

```
yarn add antd-mobile-upload
```
或者
```
npm i -S antd-mobile-upload
```

#### 使用说明

示例
```
import React, { PureComponent } from 'react';
import Upload from 'antd-mobile-upload';

export default class PageUpload extends PureComponent {

  render () {
    return (
      <Upload multiple action={'/api/upload'} />
    );
  }
}

```
