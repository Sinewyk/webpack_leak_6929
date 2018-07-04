const path = require("path");

module.exports = {
  mode: "development",

  resolve: { alias: { lib: path.join(__dirname, "lib") } },

  entry: "./lib/index.js"
};
