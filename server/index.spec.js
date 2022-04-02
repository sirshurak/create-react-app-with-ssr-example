import './index';
import request from 'supertest';
import cheerio from 'cheerio';
import path from 'path';
import { default as getServer } from './index';
import { setServerProperties } from './middlewares';
import * as ssr from '../src/index.ssr';

const { getServerPropsFromPackage } = require('./functions');
const serverProps = getServerPropsFromPackage(
  ssr,
  path.resolve(__dirname, '../public')
);

const server = getServer((newServer) =>
  newServer.use((req, _res, next) =>
    setServerProperties(req, next, serverProps)
  )
);

/// Warning: useLayoutEffect does nothing on the server
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

window = undefined;

const getRoot = (html) => {
  return cheerio.load(html).root();
};

describe('First page', () => {
  it(
    'should GET',
    async () => {
      const res = await request(server)
        .get('/')
      expect(res.statusCode).toEqual(200);
      const root = getRoot(res.text);
      expect(root.has('div#root')).toBeDefined();
      expect(root.find('b').text()).toEqual('First');
    },
    20 * 1000
  );
});

describe('Second page', () => {
  it(
    'should GET',
    async () => {
      const res = await request(server)
        .get('/second')
      expect(res.statusCode).toEqual(200);
      const root = getRoot(res.text);
      expect(root.has('div#root')).toBeDefined();
      expect(root.find('b').text()).toEqual('Second');
    },
    20 * 1000
  );
});
