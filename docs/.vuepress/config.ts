//import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchPlugin } from "@vuepress/plugin-search";
import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "诺一发稿平台",
  description: "海量一手媒体资源的中文互联网宣发平台，为广告公司提供全网最直接的媒体发布价格",

  base: "/info/news-release/",

  theme,
  plugins: [
    //docsearchPlugin({
      // 你的选项
    //}),
    searchPlugin({
      // 你的选项
    }),
  ],
});
