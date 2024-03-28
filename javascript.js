var { rules } = require('./default')

module.exports = {
    extends: [
        "eslint:recommended",
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
            jsx: false
        }
    },
    rules,
    env: {
        "node": true,
        "es6": true,
        "mocha": true
    }
}