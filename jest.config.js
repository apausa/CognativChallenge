module.exports = {
  collectCoverageFrom: [
    '!**/coverage/**',
    '!**/*.config.js/**',
    "!**/.*.js/**",
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)',
  ],
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

