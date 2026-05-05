const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^next/image$': '<rootDir>/__mocks__/next/image.tsx',
    '^next/script$': '<rootDir>/__mocks__/next/script.tsx',
    '^swiper/react$': '<rootDir>/__mocks__/swiper/react.tsx',
  },
};

module.exports = createJestConfig(config);
