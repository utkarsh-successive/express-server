module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
  ],
  coveragePathIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  //testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testPathIgnorePatterns: ['./build/', './node_modules/'],
  verbose: true,
  testMatch: [
    '**/*.spec.ts',
  ],
};   