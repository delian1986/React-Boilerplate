const path = require("path");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, "..", "./.env.development"),
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "..", "./dist"),
        port: 3000,
        hot: true
    },
    devtool: "eval-source-map",
};