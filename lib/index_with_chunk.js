import "./index.scss";
console.log(__DEFINED__);
import aliased from "lib/file_aliased";
console.log(aliased);
import Debug from "debug";
const debug = Debug("bug");

const ar = [1, 2, 3];

const ar2 = [...ar];

debug("foo");

require.ensure([], require => {
  require("./chunk_with_scss");
});
