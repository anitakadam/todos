module.exports = {
    context: __dirname + "/src",
    entry: "./app.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/src"
    },
    module: {

        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};