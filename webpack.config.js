module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public/dist/',
        filename: "bundle.js",
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map'
};
