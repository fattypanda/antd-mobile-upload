const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const router = new Router();

const uploadDir = path.join(__dirname, './upload/');

router
  .all('/check', async (ctx) => {
    ctx.response.type = 'json';
    ctx.response.body = {
      code: 200,
      message: '检查成功，可以访问到服务器!',
      ret: {},
    };
    return ctx;
  })
  .post('/upload', async (ctx) => {
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    const [name, ext] = file.name.split('.');
    const url = `${name}_${_.random(1000,9999)}.${ext}`;
    const upStream = fs.createWriteStream(`${uploadDir}${url}`);
    reader.pipe(upStream);

    ctx.response.type = 'json';
    ctx.response.body = {
      code: 200,
      message: '上传成功!',
      ret: { url },
    };
    return ctx;
  });

module.exports = router;
