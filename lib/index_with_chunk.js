import Debug from "debug";
const debug = Debug("bug");

const ar = [1, 2, 3];

const ar2 = [...ar];

debug("foo");

require.ensure([], require => {
  require("./chunk");
});
