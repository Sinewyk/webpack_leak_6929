const wp = require("webpack");
const path = require("path");
const hp = require("heapdump");

module.exports = {
  mode: "development",

  entry: {
    app1: "./lib/index.js",
    app2: "./lib/index2.js"
  },

  resolve: { alias: { lib: path.join(__dirname, "lib") } },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["babel-preset-env"],
            plugins: ["babel-plugin-transform-runtime"]
          }
        }
      }
    ]
  },

  plugins: [
    new wp.NoEmitOnErrorsPlugin(),
    new wp.DefinePlugin({
      __DEFINED__: true
    })
  ],

  node: {
    Buffer: false,
    process: false,
    global: true,
    __dirname: true,
    __filename: true
  },

  devServer: {
    noInfo: false,
    quiet: false,
    watchOptions: {
      aggregateTimeout: 20
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  }
};
