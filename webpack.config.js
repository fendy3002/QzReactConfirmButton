module.exports = {
    entry: {
        app: './src/tests/public/js/app.js'
    },
    output: {
        path: './src/tests/public/js/bin/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ["es2015", "react"]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
