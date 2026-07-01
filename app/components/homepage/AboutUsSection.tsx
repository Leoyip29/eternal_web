import Image from "next/image";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#1d1d1b] text-white">
      <div className="site-shell relative min-h-[520px] px-[var(--site-gutter)] py-12 sm:min-h-[620px] sm:py-16 lg:min-h-[640px] lg:py-14">
        <Image
          src="/homepage/aboutus.jpg"
          alt="Stone memorial collection"
          fill
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-right"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,29,27,0.96)_0%,rgba(29,29,27,0.94)_34%,rgba(29,29,27,0.72)_56%,rgba(29,29,27,0.18)_78%,rgba(29,29,27,0)_100%)]" />

        <div className="relative z-10 grid h-full items-start lg:grid-cols-[0.62fr_1.38fr]">
          <div className="max-w-[468px] lg:self-start lg:pt-12 xl:pt-16">
            <h2 className="text-[44px] font-semibold uppercase tracking-[-0.05em] text-white sm:text-[56px] lg:text-[64px]">
              About Us
            </h2>
            <p className="mt-6 text-[16px] leading-[1.32] text-white/88 sm:text-[16px] lg:text-[15px]">
              At Stone Factory, we specialize in crafting premium-quality
              granite stone products with precision, durability, and timeless
              design. With years of experience in stone manufacturing, we
              create custom granite solutions for a wide range of purposes, from
              elegant memorial and gravestone designs to architectural,
              decorative, and construction applications. Our commitment to
              quality craftsmanship, modern production techniques, and customer
              satisfaction allows us to deliver stones that stand strong for
              generations. Every piece is carefully shaped, polished, and
              finished to reflect strength, beauty, and respect for the memories
              and structures they represent.
            </p>
            <Link
              href="/about-us"
              className="mt-8 inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-opacity hover:opacity-90 sm:min-h-[56px] sm:px-8 sm:text-[16px]"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
