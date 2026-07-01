import { Locale } from "../../../lib/i18n";

export interface PageData {
  slug: string;
  title: string;
  content: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const basePages: PageData[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    content:
      "Welcome to our platform. Start your journey here and learn the essentials of browsing our memorial collections and services.",
    description: "Learn how to get started with our platform",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-15",
  },
  {
    slug: "about-us",
    title: "About Us",
    content:
      "We craft memorial stones, gravestones, and custom granite pieces with care, precision, and long-term durability. Our work blends traditional respect with contemporary stone craftsmanship to help families create lasting tributes that feel deeply personal.",
    description: "Learn more about our memorial stone craftsmanship and story",
    createdAt: "2024-02-01",
    updatedAt: "2026-07-01",
  },
  {
    slug: "features",
    title: "Features Overview",
    content:
      "Discover the services and memorial design options we offer, from stone selection to engraving, fabrication, and installation.",
    description: "Explore the key features of our platform",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-20",
  },
  {
    slug: "pricing",
    title: "Pricing Plans",
    content:
      "Choose the memorial solution that best fits your needs, with flexible options for families, cemeteries, and custom projects.",
    description: "Compare our pricing options",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-25",
  },
];

function getMockData(locale: Locale): PageData[] {
  void locale;
  return basePages;
}

export async function getPageBySlug(
  slug: string,
  locale: Locale,
): Promise<PageData | null> {
  const data = getMockData(locale);
  return data.find((page) => page.slug === slug) || null;
}

export async function getAllSlugs(): Promise<string[]> {
  return basePages.map((page) => page.slug);
}

export async function getAllPages(locale: Locale): Promise<PageData[]> {
  return getMockData(locale);
}
