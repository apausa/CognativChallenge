module.exports = {
  collectCoverageFrom: [
    '!**/coverage/**',
    '!**/*.config.js/**',
    "!**/.*.js/**",
    '!**/__snapshots__/**',
    '!**/index.ts/**',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)',
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

