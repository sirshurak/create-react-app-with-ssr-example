// eslint-disable-next-line import/no-extraneous-dependencies
const Environment = require('jest-environment-jsdom');
const { TextEncoder, TextDecoder } = require('util');
const regeneratorRuntime = require('regenerator-runtime');

/**
 * A custom environment to set the TextEncoder that is required by TensorFlow.js.
 */
module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup();
    if (typeof this.global.TextEncoder === 'undefined') {
      this.global.TextEncoder = TextEncoder;
      this.global.TextDecoder = TextDecoder;
    }
  }
};
