import Link from "next/link";
import { Locale, isLocale } from "../../../lib/i18n";
import { getTranslation } from "../../../lib/translations";

interface NotFoundProps {
  params?: Promise<{ locale: string }>;
}

export default async function NotFound({ params }: NotFoundProps = {}) {
  const { locale = "en" } = (await params) ?? {};
  const activeLocale: Locale = isLocale(locale) ? locale : "en";
  const t = getTranslation(activeLocale);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] py-12 px-4">
      <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t.notFound}
      </h1>
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6">
        {t.notFoundTitle}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        {t.notFoundDesc}
      </p>
      <Link
        href={`/${activeLocale}`}
        className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        {t.goHome}
      </Link>
    </div>
  );
}
