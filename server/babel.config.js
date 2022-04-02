const presetReactApp = require('babel-preset-react-app');

module.exports = function (api, opts) {
    api.cache(true);
    const env = process.env.BABEL_ENV || process.env.NODE_ENV;
    const isTest = env === 'test';
  
    const configPresetReactApp = presetReactApp(api, {
      ...(opts ?? {}),
      useESModules: isTest,
    });
    return {
      ...configPresetReactApp,
      presets: configPresetReactApp.presets,
      plugins: [...configPresetReactApp.plugins],
    };
  };
  