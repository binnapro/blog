import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'notebook',
  },
  base: '/binnapro.github.io/blog/',
  publicPath: '/binnapro.github.io/blog/',
});
