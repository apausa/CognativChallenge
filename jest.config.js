module.exports = {
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/*.config.js/**',
    "!**/.*.js/**",
  ],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

