module.exports = {
    collectCoverageFrom: [
        'server/**/{!(entry|prod),}.{js,jsx}',
        '!<rootDir>/node_modules/',
    ],
    coverageThreshold: {
        global: {
        lines: 80,
        },
    },
    coverageReporters: ['clover', 'json', 'text', 'text-summary'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
        'babel-jest',
        { configFile: './server/babel.config.js' },
        ],
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(png|svg|pdf|jpg|jpeg)$': '<rootDir>/server/__mocks__/fileMock.js',
    },
    testEnvironment: '<rootDir>/server/jest.setup.js',
    coverageDirectory: '<rootDir>/server/coverage'
};
  