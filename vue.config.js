const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // base: "/situationRoom1/",
  publicPath: process.env.NODE_ENV === "production" ? "/situationRoom1/" : "/",
});
