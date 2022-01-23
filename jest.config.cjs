module.exports = {
    "preset": "ts-jest",
    "moduleNameMapper": {
        "^\$lib$": "<rootDir>/src/lib",
        "^\$lib/(.*)$": "<rootDir>/src/lib/$1"
    },
    "transform": {
        "^.+\\.svelte$": ["svelte-jester", { "preprocess": true }],
        "^.+\\.js$": "babel-jest",
        "^.+\\.ts$": "ts-jest"
    },
    "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"],
    "testEnvironment": "jsdom",
    "moduleFileExtensions": ["ts", "js", "svelte"],
    "moduleDirectories": ["node_modules"]
}
