const fs = require("fs");

const initialFile = fs.readFileSync("./lib/index_initial.js");
const noAliasFile = fs.readFileSync("./lib/index_no_alias.js");
const withErrorFile = fs.readFileSync("./lib/index_with_error.js");

const data = [initialFile, noAliasFile, withErrorFile];

let i = 0;

setInterval(function() {
  fs.writeFileSync("./lib/index.js", data[i % 3]);
  ++i;
}, 1000);
