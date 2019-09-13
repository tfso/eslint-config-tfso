var { rules } = require('./default')

module.exports = {
    extends: [
        "eslint-config-react-app"
    ],
    rules: {
        ...rules,

        "@typescript-eslint/no-use-before-define": [ "warn", { "functions": false, "classes": false } ],
        "@typescript-eslint/type-annotation-spacing": ["warn", { "before": false, "after": true, "overrides": { "arrow": { "before": true, "after": true }} }],

        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        
        "jsx-quotes": ["warn", "prefer-single"],
        "react/jsx-curly-spacing": ["warn", { "when": "never", "spacing": { "objectLiterals": "never" }, "children": { "when": "never" }, "allowMultiline": true }]
    }
}