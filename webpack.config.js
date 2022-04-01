const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const baseConfig = {
    mode: "development", // production / development

    output: {
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        open: true,
        hot: true
    }

}


if (process.env.NODE_ENV === "production") {
    baseConfig.mode = "production"
}

if (process.env.NODE_ENV === "development") {
    baseConfig.devtool = "source-map";
}

module.exports = baseConfig