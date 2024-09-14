const path = require('path');
const HtmlHandler = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlHandler({template: "./src/template.html"}),
    ],
    module:{
        rules: [ 
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use:["html-loader"],
            },

        ],
    }
}