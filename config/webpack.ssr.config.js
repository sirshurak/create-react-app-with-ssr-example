'use strict';

const webpack = require('webpack');
const webpackConfigFactory = require('./webpack.config.js');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const env = getClientEnvironment('');

// decorate original webpack config
module.exports = function (webpackEnv) {
  const template = webpackConfigFactory(webpackEnv);
  return (
    // ssr compiler config
    {
      ...template,
      name: 'ssr',
      target: 'node',
      entry: [
        // ssr entry point, usually s.th. like `./src/index.ssr.tsx` with `export default (req,res) => {}`
        paths.appIndexSsrJs,
      ],
      output: {
        ...template.output,
        path: paths.appBuildSsr,
        filename: 'ssr.js',
        libraryTarget: 'commonjs2',
      },
      // filter out some plugins
      plugins: template.plugins
        .filter((plugin) =>
          [
            // avoid overriding process.env on the server, we will provide a customized DefinePlugin
            webpack.DefinePlugin,
          ].every((pluginClass) => !(plugin instanceof pluginClass))
        )
        .concat([
          // modified version of the DefinePlugin that does not override but extend process.env
          // this will preserve embedded env vars but also allow reading real env vars on the server
          new webpack.DefinePlugin(
            Object.keys(env.raw).reduce(
              (newEnv, key) => ({
                ...newEnv,
                // this will result in s.th. like: process.env.FOO = process.env.FOO || "embedded default value"
                ['process.env.' + key]:
                  'process.env.' + key + '||' + JSON.stringify(env.raw[key]),
              }),
              {}
            )
          ),
        ]),
    }
  );
}