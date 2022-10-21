import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'cwmont-common',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@cwmont/pro-components': resolve(
      __dirname,
      './packages/pro-components/src/index.ts',
    ),
    '@ife/hooks': resolve(__dirname, './packages/hooks/src/index.ts'),
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src', 'packages/pro-components/src'],
  },
  locales: [['zh-CN', '中文']],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitLab',
        path: '',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitLab',
        path: '',
      },
    ],
  },
  exportStatic: {},
  dynamicImport: {},
  chainWebpack(config) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            lodash: {
              name: 'echarts',
              test: /[\\/]node_modules[\\/]echarts[\\/]/,
              chunks: 'all',
              priority: -2,
            },
          },
        },
      },
    });
    //过滤掉momnet的那些不使用的国际化文件
    config
      .plugin('replace')
      .use(require('webpack').ContextReplacementPlugin)
      .tap(() => {
        return [/moment[/\\]locale$/, /zh-cn/];
      });
  },
});
