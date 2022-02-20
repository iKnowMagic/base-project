module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  setupFiles: ['<rootDir>/tests/unit/setup.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.[jt]s']
}
