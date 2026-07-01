import { Locale } from "../../../lib/i18n";

export interface PageData {
  slug: string;
  title: string;
  content: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const mockData: PageData[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    content:
      "Welcome to our platform! This is the getting started guide. Start your journey here and learn the basics.",
    description: "Learn how to get started with our platform",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-15",
  },
  {
    slug: "features",
    title: "Features Overview",
    content:
      "Discover all the amazing features we offer. From advanced analytics to seamless integrations.",
    description: "Explore the key features of our platform",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-20",
  },
  {
    slug: "pricing",
    title: "Pricing Plans",
    content:
      "Choose the perfect plan for your needs. Flexible pricing for teams of all sizes.",
    description: "Compare our pricing options",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-25",
  },
];

const mockDataZhHans: PageData[] = [
  {
    slug: "getting-started",
    title: "快速开始",
    content: "欢迎使用我们的平台！这是入门指南。从这里开始您的旅程，了解基础知识。",
    description: "了解如何开始使用我们的平台",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-15",
  },
  {
    slug: "features",
    title: "功能概览",
    content: "探索我们提供的所有强大功能，从高级分析到无缝集成。",
    description: "了解我们平台的主要功能",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-20",
  },
  {
    slug: "pricing",
    title: "价格方案",
    content: "选择最适合您需求的方案。灵活定价，适合各种规模的团队。",
    description: "比较我们的定价选项",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-25",
  },
];

const mockDataZhHant: PageData[] = [
  {
    slug: "getting-started",
    title: "快速開始",
    content: "歡迎使用我們的平台！這是入門指南。從這裡開始您的旅程，了解基礎知識。",
    description: "了解如何開始使用我們的平台",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-15",
  },
  {
    slug: "features",
    title: "功能概覽",
    content: "探索我們提供的所有強大功能，從進階分析到無縫整合。",
    description: "了解我們平台的主要功能",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-20",
  },
  {
    slug: "pricing",
    title: "價格方案",
    content: "選擇最適合您需求的方案。彈性定價，適合各種規模的團隊。",
    description: "比較我們的定價選項",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-25",
  },
];

function getMockData(locale: Locale): PageData[] {
  switch (locale) {
    case "zhans":
      return mockDataZhHans;
    case "zhant":
      return mockDataZhHant;
    default:
      return mockData;
  }
}

export async function getPageBySlug(
  slug: string,
  locale: Locale,
): Promise<PageData | null> {
  const data = getMockData(locale);
  return data.find((page) => page.slug === slug) || null;
}

export async function getAllSlugs(): Promise<string[]> {
  return mockData.map((page) => page.slug);
}

export async function getAllPages(locale: Locale): Promise<PageData[]> {
  return getMockData(locale);
}
