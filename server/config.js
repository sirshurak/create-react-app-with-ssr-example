require('dotenv').config();

require('ignore-styles');

require('@babel/register')({
  configFile: './server/babel.config.js',
});

require('regenerator-runtime');
