'use strict';

const path = require('path');
const webpackConfigFactory = require('./webpack.config.js');

const ssrFolderRegex = /build-ssr/;

module.exports = function (webpackEnv) {
  const template = webpackConfigFactory(webpackEnv);
  return {
    mode: webpackEnv,
    entry: path.join(__dirname, '../server/entry'),
    target: 'node',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'bundle.js',
      chunkFilename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    optimization: template.optimization,
    module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: [ssrFolderRegex],
          use: {
            loader: 'babel-loader',
            options: {
              ignore: [ssrFolderRegex],
              sourceType: 'unambiguous',
              presets: [
                [
                  '@babel/env',
                  {
                    targets: { node: '14' },
                    modules: false,
                  },
                ],
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                ['@babel/plugin-proposal-private-methods', { loose: true }],
                [
                  '@babel/plugin-proposal-private-property-in-object',
                  { loose: true },
                ],
              ],
            },
          },
        },
      ],
    },
    resolve: {
      modules: template.resolve.modules,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: [ssrFolderRegex],
  };
};
