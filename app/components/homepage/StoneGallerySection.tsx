import Link from "next/link";
import Image from "next/image";
import type { StoneGallery } from "../../../lib/api/types";

interface StoneGallerySectionProps {
  stoneGallery: StoneGallery;
}

const FALLBACK_IMAGES = [
  "/homepage/gallery-1.jpg",
  "/homepage/gallery-2.jpg",
  "/homepage/gallery-3.jpg",
  "/homepage/gallery-4.jpg",
];

export default function StoneGallerySection({
  stoneGallery,
}: StoneGallerySectionProps) {
  const sortedImages = [...stoneGallery.images].sort(
    (a, b) => a.order - b.order
  );
  const images = [0, 1, 2, 3].map(
    (index) => sortedImages[index]?.image ?? FALLBACK_IMAGES[index]
  );

  return (
    <section className="bg-white py-18 sm:py-22 lg:py-28">
      <div className="site-shell px-[var(--site-gutter)]">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.82fr_0.82fr] lg:items-stretch">
          <div className="flex flex-col gap-5 lg:gap-6 lg:pr-2">
            <div className="flex flex-col justify-start rounded-[28px] bg-white py-2">
              <h2 className="text-[40px] font-semibold uppercase leading-[0.98] tracking-[-0.05em] text-black sm:text-[52px] lg:text-[64px]">
                Our <span className="text-[#738460]">Stone Gallery</span>
              </h2>
              <p className="mt-4 max-w-[460px] text-[18px] leading-8 text-[#6f6d69] sm:text-[20px]">
                {stoneGallery.subtext}
              </p>
            </div>

            <div className="relative min-h-[616px] rounded-[24px]">
              <Image src={images[0]} alt="Stone Gallery" fill className="rounded-[24px] object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="relative min-h-[298px] flex-1 rounded-[24px]">
              <Image src={images[1]} alt="Stone Gallery" fill className="rounded-[24px] object-cover" />
            </div>
            <div className="relative min-h-[298px] flex-1 rounded-[24px]">
              <Image src={images[2]} alt="Stone Gallery" fill className="rounded-[24px] object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="relative min-h-[616px] flex-1 rounded-[24px]">
              <Image src={images[3]} alt="Stone Gallery" fill className="rounded-[24px] object-cover" />
            </div>

            <Link
              href={stoneGallery.explore_more_url}
              className="inline-flex min-h-[68px] items-center justify-center rounded-full border border-[#3a3a38] px-8 text-[20px] font-semibold text-[#191919] transition-colors hover:bg-[#191919] hover:text-white lg:min-h-[74px]"
            >
              {stoneGallery.explore_more_label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}