import express from 'express';

import {
  staticFiles,
  serverRenderer,
} from './handlers';

export default function server(apply) {
  const newServer = express();
  apply(newServer);

  newServer.get(
    '/*',
    staticFiles,
    serverRenderer
  );
  return newServer;
}
