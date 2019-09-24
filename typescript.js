var { rules } = require('./default')

module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint"
    ],
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": false
        }
    },
    env: {
        "node": true,
        "es6": true
    },
    rules: {
        ...rules,

        "no-unused-vars": "off",

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/prefer-interface": "off",
        
        "@typescript-eslint/no-use-before-define": [ "warn", { "functions": false, "classes": false } ],

        "@typescript-eslint/member-delimiter-style": ["error", { "multiline": { "delimiter": "none" }, "singleline": { "delimiter": "comma" } }],
        "@typescript-eslint/type-annotation-spacing": ["error", { "before": false, "after": true, "overrides": { "arrow": { "before": true, "after": true }} }],

        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
    },
    overrides: [
        {
            files: ['test/**/*.ts'],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-object-literal-type-assertion': 'off',
            }
        }
    ]
}