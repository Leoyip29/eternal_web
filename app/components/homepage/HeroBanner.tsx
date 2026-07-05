import Image from "next/image";
import Link from "next/link";
import type { HeroSection } from "../../../lib/api/types";

interface HeroBannerProps {
  hero: HeroSection;
}

export default function HeroBanner({ hero }: HeroBannerProps) {
  const backgroundImage = hero.images[0]?.image ?? "/homepage/image1.jpg";

  return (
    <section className="relative w-full overflow-hidden bg-[#f5ecdf]">
      <div className="relative min-h-[620px] px-[var(--site-gutter)] sm:min-h-[680px] lg:h-[clamp(700px,64vw,900px)] lg:min-h-0">
        <Image
          src={backgroundImage}
          alt="A collection of refined memorial stone textures and forms"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f5ecdf]/95 via-[#f5ecdf]/78 to-[#f5ecdf]/28 sm:from-[#f5ecdf]/88 sm:via-[#f5ecdf]/62 lg:from-[#f5ecdf]/82 lg:via-[#f5ecdf]/48 lg:to-transparent" />

        <div className="site-shell  relative z-10 grid h-full grid-cols-1 lg:grid-cols-[minmax(420px,0.9fr)_1.1fr]">
          <div className="flex items-end py-16 sm:py-20 lg:items-center lg:py-24">
            <div className="flex max-w-[640px] flex-col gap-8 rounded-[28px]  px-5 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)]  sm:px-8 sm:py-8 lg:gap-12 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-0">
              <div className="flex flex-col gap-5 sm:gap-7">
                <h1 className="max-w-[620px] text-[clamp(34px,8vw,64px)] font-medium leading-[1.12] text-[#2b2b2b] sm:leading-[1.18]">
                  {hero.headline}
                </h1>
                <p className="max-w-[600px] text-[15px] leading-6 text-[#2b2b2b] sm:text-[16px] sm:leading-[1.5]">
                  {hero.subtext}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 lg:gap-8">
                <Link
                  href={hero.cta1_url}
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#2b2b2b] px-6 text-[16px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:min-h-[56px] sm:w-auto sm:px-8 sm:text-[18px]"
                >
                  {hero.cta1_label}
                </Link>
                <Link
                  href={hero.cta2_url}
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-[#ffffff80] bg-[#f8f2e9cc] px-6 text-[15px] font-semibold text-[#2b2b2b] shadow-[0_2px_4px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-opacity hover:opacity-90 sm:min-h-[56px] sm:w-auto sm:px-8 sm:text-[16px]"
                >
                  {hero.cta2_label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-1.5 lg:flex">
          <span className="h-2.5 w-10 rounded-full bg-[#809771]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[#809771]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[#809771]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[#809771]" />
        </div>

      </div>
    </section>
  );
}