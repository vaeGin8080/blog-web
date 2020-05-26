"use strict";
const path = require("path");
const defaultSettings = require("./src/settings.js");
const TerserPlugin = require("terser-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title || "晓风残月"; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  // lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASIC_API]: {
    //     // target: `https://web-api.juejin.im/query`,
    //     target: `http://localhost:3333`,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^" + process.env.VUE_APP_BASIC_API]: "",
    //     },
    //   },
    // },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
        "@i": resolve("src/assets/img"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/mixin.scss";`,
      },
    },
  },
};
