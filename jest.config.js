module.exports = {
  jest: {
    collectCoverageFrom: [
      '!**/node_modules/**',
    ],
    preset: "react-native",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node",
    ],
  },
}