import { locales } from "../../lib/i18n";
import HeroBanner from "../components/homepage/HeroBanner";
import OurProductSection from "../components/homepage/OurProductSection";
interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale } = await params;
  void locale;

  return (
    // <main className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] py-12 px-4">
    //   <div className="max-w-2xl w-full">
    //     <h1 className="text-4xl font-bold text-black dark:text-white mb-8 text-center">
    //       {t.welcome}
    //     </h1>
    //     <p className="text-zinc-600 dark:text-zinc-400 text-center mb-12">
    //       {t.description}
    //     </p>

    //     <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
    //       {t.pages}
    //     </h2>
    //     <div className="grid gap-4">
    //       {pages.map((page) => (
    //         <Link
    //           key={page.slug}
    //           href={`/${locale}/${page.slug}`}
    //           className="block p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
    //         >
    //           <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
    //             {page.title}
    //           </h3>
    //           <p className="text-zinc-600 dark:text-zinc-400">
    //             {page.description}
    //           </p>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </main>
    <>
      <HeroBanner />
      <OurProductSection />
    </>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
