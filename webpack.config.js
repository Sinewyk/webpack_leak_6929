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
    app1: "./lib/index.js",
    app2: "./lib/index2.js"
  },

  resolve: { alias: { lib: path.join(__dirname, "lib") } },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["babel-preset-env"],
            plugins: ["babel-plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new wp.NoEmitOnErrorsPlugin(),
    new wp.DefinePlugin({
      __DEFINED__: true
    })
  ],

  node: {
    Buffer: false,
    process: false,
    global: true,
    __dirname: true,
    __filename: true
  },

  devServer: {
    noInfo: false,
    quiet: false,
    watchOptions: {
      aggregateTimeout: 20
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  }
};
