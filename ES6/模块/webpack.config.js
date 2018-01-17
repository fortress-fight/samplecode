const path = require('path');

module.exports = {
    entry: {
        entry: './learn01.js',
        entry2: './learn02.js',
        entry3: './learn03.js',
        entry4: './learn04.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    }
}

