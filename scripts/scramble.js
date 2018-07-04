const fs = require("fs");

const data = [
  "index_initial",
  "index_no_alias",
  "index_with_error",
  "index_require_error"
].map(x => fs.readFileSync(`./lib/${x}.js`));

let i = 0;

setInterval(function() {
  fs.writeFileSync(
    "./lib/index.js",
    Buffer.concat([data[i % data.length], Buffer.from(`\nconsole.log(${i})`)])
  );
  fs.writeFileSync(
    "./lib/index2.js",
    Buffer.concat([
      data[(i + 1) % data.length],
      Buffer.from(`\nconsole.log(${i})`)
    ])
  );
  ++i;
}, 1000);
