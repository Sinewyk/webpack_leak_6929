const wp = require("webpack");
const path = require("path");
const hp = require("heapdump");

if (process.env.GENERATE_HEAP_DUMP) {
  setInterval(() => {
    hp.writeSnapshot(function(err, filename) {
      console.log("dump written to", filename);
    });
  }, parseInt(process.env.HEAPDUMP_INTERVAL, 10));
}

module.exports = {
  mode: "development",

  entry: {
    app1: "./lib/index.js"
  }
};
