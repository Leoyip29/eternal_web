 import { defaultLocale, isLocale, locales } from "../../lib/i18n";
import { getHomePage } from "../../lib/api/home";
import HeroBanner from "../components/homepage/HeroBanner";
import OurProductSection from "../components/homepage/OurProductSection";
import OurServicesSection from "../components/homepage/OurServicesSection";
import StoneGallerySection from "../components/homepage/StoneGallerySection";
import FaqSection from "../components/homepage/FaqSection";
import CustomerReviewSection from "../components/homepage/CustomerReviewSection";
import AboutUsSection from "../components/homepage/AboutUsSection";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;

  const homePage = await getHomePage(locale);

  return (
    <>
      <HeroBanner hero={homePage.hero} />
      <OurProductSection productsSection={homePage.products_section} />
      <OurServicesSection
        servicesSection={homePage.services_section}
        howItWorks={homePage.how_it_works}
      />
      <AboutUsSection aboutUs={homePage.about_us} />
      <StoneGallerySection stoneGallery={homePage.stone_gallery} />
      <FaqSection faqSection={homePage.faq} />
      <CustomerReviewSection testimonialsSection={homePage.testimonials} />
    </>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}