require('./config');
const { resolve } = require('path');
const server = require('.').default;
const { getServerPropsFromPackage } = require('./functions');
const serverProps = getServerPropsFromPackage(
  require('../build-ssr/ssr'),
  resolve(__dirname, '../build-ssr')
);
const { setServerProperties } = require('./middlewares');

const port = process.env.REACT_APP_SSR_PORT ?? 3002;

const devServer = server((newServer) =>
  newServer.use((req, _res, next) =>
    setServerProperties(req, next, serverProps)
  )
);

devServer.listen(port, () => {
  console.log(`SSR running on port ${port}`);
});
