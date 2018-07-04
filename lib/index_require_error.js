console.log(__DEFINED__);
console.log(require("lib/file_aliased"));
const debug = require("debug")("bug");
const foo = require("foo");

debug("foo");
