require('dotenv').config();

const serverless = require('serverless-http');
const { resolve } = require('path');
const server = require('.').default;
const { getServerPropsFromPackage } = require('./functions');
const serverProps = getServerPropsFromPackage(
  require('../build-ssr/ssr.js'),
  resolve(__dirname, '../build-ssr')
);
const { setServerProperties } = require('./middlewares');

const prodServer = server((newServer) =>
  newServer.use((req, _res, next) =>
    setServerProperties(req, next, serverProps)
  )
);

module.exports.handler = serverless(prodServer);
