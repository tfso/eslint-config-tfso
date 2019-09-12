module.exports = {
    rules: {
        //"dot-notation": "off",
        //"eol-last": "off",
        "prefer-const": "warn",
        "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
        "semi": ["warn", "never"],
        "no-duplicate-imports": "error",   
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
        "brace-style": ["error"],
        "object-curly-spacing": ["warn", "always", { "arraysInObjects": false }],
        "keyword-spacing": [
            "warn",
            {
                "after": true
            }
        ]
    }
}