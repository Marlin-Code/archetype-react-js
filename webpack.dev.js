
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    target: "web",
    devServer: {
        port: "1800",
        static: ["./dist"],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ]
}