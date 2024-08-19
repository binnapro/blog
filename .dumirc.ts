import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: '/blog/',
  history: { type: 'hash' },
  themeConfig: {
    title: 'Binna Blog',
    name: 'Binna Blog',
    github: 'https://github.com/binnapro',
    rtl: false,
    footer: '',
    logo: '/blog/logo.png',
  },
  favicons: ['/blog/logo.png'],
});
