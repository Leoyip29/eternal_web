import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale, locales } from "../../../lib/i18n";
import { getTranslation } from "../../../lib/translations";
import { getPageBySlug, getAllSlugs } from "./data";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = await getPageBySlug(slug, locale as Locale);

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
    },
  };
}

export const revalidate = 60;

export default async function SlugPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = getTranslation(locale as Locale);
  const page = await getPageBySlug(slug, locale as Locale);

  if (!page) {
    notFound();
  }

  return (
    <article className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] py-12 px-4">
      <div className="max-w-2xl w-full">
        <header className="mb-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            {page.createdAt}
          </p>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            {page.title}
          </h1>
        </header>
        <div className="prose dark:prose-invert">
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {page.content}
          </p>
        </div>
        <footer className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t.lastUpdated} {page.updatedAt}
          </p>
        </footer>
      </div>
    </article>
  );
}
