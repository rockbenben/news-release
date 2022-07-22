import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  //主题选项
  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html

  hostname: "https://www.seoipo.com",

  author: {
    name: "诺一网络",
    url: "https://www.seoipo.com/",
  },

  iconAssets: "iconfont",
  logo: "/logo.svg",
  
  //是否全局启用路径导航
  breadcrumb: false,
  contributors: false,
  lastUpdated: false,

  //深色模式配置
  darkmode: "disable",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  //repo: "vuepress-theme-hope/vuepress-theme-hope",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  //repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  //repoDisplay: true,

  // docsDir: "demo/src",

  // navbar
  navbar: navbar,
  //导航栏布局
  navbarLayout: {
	left: ["Brand"],
	center: ["Links"],
	right: ["Outlook", "Search"],
  },
  //是否在向下滚动时自动隐藏导航栏
  navbarAutoHide: "always",

  // sidebar
  sidebar: sidebar,

  // footer: "默认页脚",

  // displayFooter: true,
  pageInfo: [""],
  //https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/layout.html#pageinfo
  // pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],


  plugins: {

    mdEnhance: {
      enableAll: false,
      footnote: true,
      lazyLoad: true,
      imageMark: true,
      tasklist: true,
      stylize: true,
    },
  },
});
