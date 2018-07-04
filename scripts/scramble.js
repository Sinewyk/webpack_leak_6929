const fs = require("fs");

const data = [
  "index_initial",
  "index_no_alias",
  "index_with_error",
  "index_require_error"
].map(x => fs.readFileSync(`./lib/${x}.js`));

let i = 0;

setInterval(function() {
  fs.writeFileSync("./lib/index.js", data[i % data.length]);
  ++i;
}, 1000);
