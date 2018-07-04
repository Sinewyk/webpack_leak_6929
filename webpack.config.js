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

  entry: "./lib/index.js"
};
