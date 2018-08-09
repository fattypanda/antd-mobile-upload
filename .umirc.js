import { resolve } from 'path';

export default {
  plugins: [
    ['umi-plugin-dva', { immer: true }],
    'umi-plugin-es5-imcompatible-versions'
  ],
  alias: {
    src: resolve(__dirname, 'src'),
  },
  proxy: {
    '/api': {
      target: 'http://localhost:9090/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      }
    }
  }
}
