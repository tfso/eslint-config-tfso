var { rules } = require('./typescript')

module.exports = {
    extends: [
        "eslint-config-react-app"
    ],
    rules: {
        ...rules,
        
        "jsx-quotes": ["warn", "prefer-single"],
        "react/jsx-curly-spacing": ["warn", { "when": "never", "spacing": { "objectLiterals": "never" }, "children": { "when": "never" }, "allowMultiline": true }]
    }
}