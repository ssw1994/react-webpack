//webpack.config.js
var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "client/dist"),
    filename: "bundle.js",
  },
  watchOptions: {
    poll: true,
  },
  node: { fs: "empty" },
  mode: "development",
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/react"],
          plugins: ["@babel/proposal-class-properties"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
