var javascript = require('./javascript')
var { overrides, ...typescript } = require('./typescript')

module.exports = {
    ...javascript,
    overrides: [
        {
            files: ['**/*.ts'],
            ...typescript
        }
    ]
}