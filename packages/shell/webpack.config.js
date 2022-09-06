const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const deps = require('./package.json').dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  devtool: "eval-cheap-source-map",
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
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        HeaderMFE: "HeaderMFE@http://localhost:3001/remoteEntry.js",
        SidepanelMFE: "SidepanelMFE@http://localhost:3002/remoteEntry.js",
        ProductMFE: "ProductMFE@http://localhost:4001/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true
        },
        "react-router-dom": {
          singleton: true
        },
        "@apollo/client": {
          singleton: true
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};


