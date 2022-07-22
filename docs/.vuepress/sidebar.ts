import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "品宣渠道",
    icon: "light",
    prefix: "/",
    link: "/branding",
  },
  {
    text: "文章撰写",
    icon: "write",
    prefix: "/writing/",
    link: "",
    children: "structure",
  },
  {
    text: "发布方法",
    icon: "rss",
    prefix: "/posting/",
    link: "",
    children: "structure",
  },
  {
    text: "常见问题",
    icon: "question",
    prefix: "/faq/",
    link: "",
    children: "structure",
  },
  {
    text: "品宣价格",
    icon: "free",
    link: "http://ziyuan.seoipo.com/%E8%AF%BA%E4%B8%80%E5%93%81%E5%AE%A3%E8%B5%84%E6%BA%90%E8%A1%A8.xlsx",
  },
  {
    text: "联系客服",
    icon: "wechat",
    link: "http://tc.seoipo.com/20191022150417.jpg",
  },
]);
