import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, locales } from "../../../lib/i18n";
import OurServicesSection from "@/app/components/homepage/OurServicesSection";

interface AboutUsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: AboutUsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    return { title: "Page Not Found" };
  }

  return {
    title: "About Us",
    description:
      "Learn about our memorial stone craftsmanship, values, and commitment to creating lasting tributes.",
  };
}

export default async function AboutUsPage({ params }: AboutUsPageProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <main className="bg-[#f7f3ec]">
      <section className="relative overflow-hidden bg-[#1d1d1b] text-white">
        <div className="site-shell relative min-h-[620px] px-[var(--site-gutter)] py-16 sm:min-h-[700px] sm:py-20 lg:min-h-[760px] lg:py-24">
          <Image
            src="/homepage/aboutus.jpg"
            alt="Memorial stone collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[74%_center] lg:object-right"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,22,0.98)_0%,rgba(24,24,22,0.95)_28%,rgba(24,24,22,0.82)_48%,rgba(24,24,22,0.36)_72%,rgba(24,24,22,0.08)_100%)]" />

          <div className="relative z-10 grid h-full items-end lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex max-w-[560px] flex-col gap-8 rounded-[30px] bg-white/6 px-6 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-[2px] sm:px-8 sm:py-10 lg:mb-8 lg:gap-10 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-0">
              <div className="flex flex-col gap-5">
                <p className="text-[12px] uppercase tracking-[0.32em] text-white/55">
                  About Us
                </p>
                <h1 className="text-[42px] font-semibold uppercase leading-[0.96] tracking-[-0.06em] text-white sm:text-[58px] lg:text-[76px]">
                  Crafting Memorials With Care And Permanence
                </h1>
                <p className="max-w-[520px] text-[16px] leading-7 text-white/82 sm:text-[18px] sm:leading-8">
                  Learn about our memorial stone craftsmanship, values, and
                  commitment to creating lasting tributes that balance dignity,
                  precision, and enduring material quality.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="site-shell px-[var(--site-gutter)]">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <h2 className="text-[34px] font-semibold tracking-[-0.04em] text-[#1f1e1b] sm:text-[42px]">
                A Tradition Of Material Knowledge, Detail, And Respect
              </h2>
            </div>

            <div className="space-y-6 text-[16px] leading-8 text-[#5a544d]">
              <p>
                At Stone Factory, we specialize in crafting premium-quality
                granite stone products with precision, durability, and timeless
                design. With years of experience in stone manufacturing, we
                create custom granite solutions for a wide range of purposes,
                from elegant memorial and gravestone designs to architectural,
                decorative, and construction applications.
              </p>
              <p>
                Our commitment to quality craftsmanship, modern production
                techniques, and customer satisfaction allows us to deliver
                stones that stand strong for generations. Every piece is
                carefully shaped, polished, and finished to reflect strength,
                beauty, and respect for the memories and structures they
                represent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurServicesSection />
    </main>
  );
}
