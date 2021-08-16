// .vuepress/config.js
const path = require("path");
module.exports = {
  title: "TEST",
  theme: path.resolve(__dirname, "./theme"),
  patterns: [
    "README.md"
  ],
  markdown: { code: { lineNumbers: false } },
  bundler: "@vuepress/vite",
  bundlerConfig:{
    viteOptions: {
      resolve: {
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
      },
    },
  }
};
