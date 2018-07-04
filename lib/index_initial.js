console.log(__DEFINED__);
console.log(require("lib/file_aliased"));
const debug = require("debug")("bug");

const ar = [1, 2, 3];

const ar2 = [...ar];

debug("foo");
