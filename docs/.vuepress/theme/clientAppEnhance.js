import HelloWorld from "../../../src/components/HelloWorld.vue"
import { defineClientAppEnhance } from "@vuepress/client";
export default defineClientAppEnhance(({ app }) => {
    app.component("AnotherComponent", HelloWorld);
});
  