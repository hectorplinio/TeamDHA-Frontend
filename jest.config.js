module.exports = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^@/components/(.*)$": "<rootDir>/components/$1",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
            "identity-obj-proxy",
    },
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
};
