module.exports = {
  collectCoverageFrom: [
    '!**/coverage/**',
    '!**/*.config.js/**',
    "!**/.*.js/**",
    '!**/__snapshots__/**',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)',
  ],
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

