import { Locale } from "./i18n";

export type TranslationKeys = {
  welcome: string;
  description: string;
  loading: string;
  notFound: string;
  notFoundTitle: string;
  notFoundDesc: string;
  goHome: string;
  lastUpdated: string;
  pages: string;
};

const en: TranslationKeys = {
  welcome: "ISR Demo - Dynamic Routes",
  description:
    "This page demonstrates Next.js ISR (Incremental Static Regeneration). Each route is statically generated and revalidated every 60 seconds.",
  loading: "Loading...",
  notFound: "404",
  notFoundTitle: "Page Not Found",
  notFoundDesc: "The page you are looking for does not exist.",
  goHome: "Go Home",
  lastUpdated: "Last updated:",
  pages: "Pages",
};

const zhans: TranslationKeys = {
  welcome: "ISR 演示 - 动态路由",
  description:
    "此页面演示 Next.js ISR（增量静态再生成）。每个路由都会静态生成，并每 60 秒重新验证一次。",
  loading: "加载中...",
  notFound: "404",
  notFoundTitle: "页面未找到",
  notFoundDesc: "您访问的页面不存在。",
  goHome: "返回首页",
  lastUpdated: "最后更新：",
  pages: "页面列表",
};

const zhant: TranslationKeys = {
  welcome: "ISR 示範 - 動態路由",
  description:
    "此頁面示範 Next.js ISR（增量靜態再生成）。每個路由都會靜態生成，並每 60 秒重新驗證一次。",
  loading: "載入中...",
  notFound: "404",
  notFoundTitle: "找不到頁面",
  notFoundDesc: "您造訪的頁面不存在。",
  goHome: "返回首頁",
  lastUpdated: "最後更新：",
  pages: "頁面列表",
};

export const translations: Record<Locale, TranslationKeys> = {
  en,
  zhans,
  zhant,
};

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale];
}
