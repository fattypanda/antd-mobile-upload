const Koa = require('koa');
const Body = require('koa-body');
const Cors = require('koa-cors');
const router = require('./router');

const app = new Koa();

app
  .use(Cors())
  .use(Body({
    multipart: true,
    formidable: {
      maxFileSize: 2000 * 1024 * 1024,
    },
  }))
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(9090, () => {
  console.log('文件服务器已开启（端口号：9090），可以进行上传下载！');
});
