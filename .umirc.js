import { resolve } from 'path';

export default {
  plugins: [
    ['umi-plugin-dva', { immer: true }],
    'umi-plugin-es5-imcompatible-versions'
  ],
  alias: {
    src: resolve(__dirname, 'src'),
  }
}
