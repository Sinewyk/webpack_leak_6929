const wp = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",

  resolve: { alias: { lib: path.join(__dirname, "lib") } },

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
