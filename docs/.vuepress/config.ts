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

  head: [
    [
      "meta",
      {
        name: "keywords",
        content: "新闻发稿,品牌宣传,网络媒体,新媒体发稿",
      },
    ],
    [
      "img",
      {
        name: "referrerpolicy",
        content: "no-referrer-when-downgrade",
      },
      {
        name: "src",
        content: "https://piwik.seoipo.com/matomo.php?idsite=4&amp;rec=1",
      },
      {
        name: "style",
        content: "border:0",
      },
    ],
  ],

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
