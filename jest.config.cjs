module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.[t|j]sx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts',
    },
  };