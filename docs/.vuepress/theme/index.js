// .vuepress/config.js
const { path } = require("@vuepress/utils");
module.exports = {
  layouts: path.resolve(__dirname, "./layouts"),
  clientAppEnhanceFiles:path.resolve(__dirname, './clientAppEnhance.js'),
  plugins: [


    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "../components"),
      },
    ],

  
  ],
};
