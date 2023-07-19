const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  base: "/situationRoom/",
  publicPath: process.env.NODE_ENV === "production" ? "/situationRoom/" : "/",
});
