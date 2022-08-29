const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    hot: true,
    open: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      remotes: {
        login: "login@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};


