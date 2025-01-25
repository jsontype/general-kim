module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
}
