const fs = require("fs");

const data = ["index_initial", "index_with_chunk"].map(x =>
  fs.readFileSync(`./lib/${x}.js`)
);

let i = 0;

setInterval(function() {
  fs.writeFileSync(
    "./lib/index.js",
    Buffer.concat([data[i % data.length], Buffer.from(`\nconsole.log(${i})`)])
  );
  ++i;
}, 1000);
