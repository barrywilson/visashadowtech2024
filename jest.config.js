console.log({jest_test_key:process})

export default {
  testEnvironment: 'node', // Specify the test environment
  verbose: true, // Increase verbosity of test output
  testMatch: ['**/__tests__/**/*.test.js'], // Specify test file patterns
  transform: {
    "^.+\\.js$": "babel-jest",
  }
}


