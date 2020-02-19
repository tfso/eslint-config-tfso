var { rules } = require('./typescript')

module.exports = {
    extends: [
        "eslint-config-react-app"
    ],
    rules: {
        ...rules,
        
        "jsx-quotes": ["warn", "prefer-single"],
        "react/jsx-curly-spacing": ["warn", { "when": "never", "spacing": { "objectLiterals": "never" }, "children": { "when": "never" }, "allowMultiline": true }]
    },
    overrides: [
        {
            files: ['**/__test__/**/*.ts', '**/__test__/**/*.tsx', '**/*.test.ts', '**/*.test.tsx'],
            rules: {
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/consistent-type-assertions": ["error", {
                    "assertionStyle": "as",
                    "objectLiteralTypeAssertions": "allow"
                }]
            }
        }
    ]
}