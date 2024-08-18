import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'notebook',
  },
  publicPath: '/blog/',
  history: { type: 'hash' },
});
