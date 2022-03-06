/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  preset: 'ts-jest/presets/js-with-babel',
  globals: {
    'ts-jest': {
      babelConfig: true,
      useESM: true
    }
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/tests/unit/setup.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    // '^.+\\js$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/*.spec.[jt]s']
}
