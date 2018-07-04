const wp = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",

  resolve: { alias: { lib: path.join(__dirname, "lib") } },

  module: {
    rules: [
      // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
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

  entry: "./lib/index.js"
};
