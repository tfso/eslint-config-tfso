module.exports = {
    rules: {
        "no-unused-vars": "warn",
        "prefer-const": "warn",
        "prefer-spread": "warn",
        "no-duplicate-imports": "error",
        "space-before-function-paren": ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
        "semi": ["warn", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "indent": ["error", 4],
        "computed-property-spacing": "error",
        "array-bracket-spacing": "error",
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "minimum"}],
        "space-unary-ops": ["error", { "words": true, "nonwords": false }],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "space-in-parens": ["error", "never"],
        "space-before-blocks": ["warn", "always"],
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "object-curly-spacing": ["warn", "always", { "arraysInObjects": false }],
        "keyword-spacing": ["error", {
            "after": true,
            "overrides": {
                "if": { "after": false },
                "else": { "before": false, "after": false },
                "for": { "after": false },
                "while": { "after": false },
                "catch": { "before": false, "after": false },
                "finally": { "before": false, "after": false },
            }
        }]
    }
}
