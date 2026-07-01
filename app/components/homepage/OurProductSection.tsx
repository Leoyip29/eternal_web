import Link from "next/link";

const products = [
  {
    title: "URN",
    description:
      "Unique natural jade urns with custom engraving options, available in sizes for public and private shrines",
    href: "/stone-catalogue",
    visual: "urn",
  },
  {
    title: "Niche stone tablet",
    description:
      "Browse elegant memorial niche tablets with personalized and custom-made designs crafted for every family.",
    href: "/stone-catalogue",
    visual: "tablet",
  },
  {
    title: "Special Colored Porcelain & Pictorial Tablets",
    description:
      "Unique natural jade urns with custom engraving options, available in sizes for public and private shrines",
    href: "/stone-catalogue",
    visual: "porcelain",
  },
  {
    title: "Cemetery Gravesites / Buried Gravestones",
    description:
      "Custom tombstones and memorial monuments crafted in timeless traditional and modern designs.",
    href: "/our-work",
    visual: "gravesite",
  },
  {
    title: "Huayong Family Columbarium",
    description:
      "Unique natural jade urns with custom engraving options, available in sizes for public and private shrines",
    href: "/our-work",
    visual: "columbarium",
  },
  {
    title: "Ash Scattering Memorial Monuments",
    description:
      "Explore elegant engraved and porcelain memorial monuments designed with timeless craftsmanship.",
    href: "/booking",
    visual: "plates",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 12h6M13 8l4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ProductVisual({ visual }: { visual: (typeof products)[number]["visual"] }) {
  if (visual === "urn") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.2),transparent_18%),radial-gradient(circle_at_50%_95%,rgba(0,0,0,0.55),transparent_23%),linear-gradient(180deg,#5c5e66_0%,#9b9ea3_45%,#5b5d63_100%)]">
        <div className="absolute left-1/2 top-[16%] h-[72%] w-[48%] -translate-x-1/2 rounded-[44%_44%_30%_30%/24%_24%_16%_16%] bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.92),rgba(255,255,255,0.04)_24%,transparent_25%),radial-gradient(circle_at_72%_48%,rgba(255,255,255,0.7),rgba(255,255,255,0.05)_20%,transparent_21%),linear-gradient(180deg,#191919_0%,#030303_52%,#1e1e1e_100%)] shadow-[0_26px_30px_rgba(0,0,0,0.45)]" />
        <div className="absolute left-1/2 top-[16%] h-[16%] w-[32%] -translate-x-1/2 rounded-[28%_28%_18%_18%/22%_22%_12%_12%] bg-[linear-gradient(180deg,#2d2d2d_0%,#040404_100%)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.2)]" />
      </div>
    );
  }

  if (visual === "tablet") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#ceb187_0%,#d8bd97_55%,#f3ece1_56%,#e8dfd3_100%)]">
        <div className="absolute bottom-[13%] left-1/2 h-[12%] w-[28%] -translate-x-1/2 rounded-[30%_30%_22%_22%] bg-[#8f6b36] shadow-[0_8px_14px_rgba(84,55,18,0.35)]" />
        <div className="absolute bottom-[17%] left-1/2 h-[56%] w-[34%] -translate-x-1/2 rounded-[8px] bg-[linear-gradient(180deg,#f0dfbf_0%,#ecd4a7_100%)] shadow-[0_14px_24px_rgba(125,89,34,0.2)]" />
        <div className="absolute bottom-[23%] left-1/2 grid h-[42%] w-[25%] -translate-x-1/2 grid-cols-3 gap-y-2 text-center text-[10px] font-semibold text-[#c69839] opacity-90">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index}>福</span>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "porcelain") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#f4ead5_0%,#f5ecd9_62%,#efe5d7_63%,#f2ede6_100%)]">
        <div className="absolute inset-x-0 top-0 h-[62%] bg-[radial-gradient(circle_at_20%_10%,rgba(205,183,144,0.26),transparent_22%),radial-gradient(circle_at_60%_22%,rgba(205,183,144,0.2),transparent_20%),radial-gradient(circle_at_80%_18%,rgba(205,183,144,0.16),transparent_18%)]" />
        <div className="absolute bottom-[18%] left-[7%] h-[38%] w-[58%] rounded-[6px] border border-[#dcc8c4] bg-[linear-gradient(180deg,#f5efef_0%,#fbf6f3_100%)] shadow-[0_8px_14px_rgba(120,96,88,0.15)]" />
        <div className="absolute bottom-[17%] right-[10%] h-[30%] w-[30%] rounded-[6px] bg-[linear-gradient(180deg,#d4eef9_0%,#90c9ec_100%)] shadow-[0_8px_14px_rgba(68,113,146,0.16)]" />
        <div className="absolute bottom-[28%] left-[16%] h-[16%] w-[18%] rounded-[4px] bg-white shadow-[inset_0_1px_8px_rgba(0,0,0,0.08)]" />
        <div className="absolute bottom-[19%] right-[13%] h-[28%] w-[21%] rounded-full border border-white/80 bg-[radial-gradient(circle_at_40%_35%,#ffffff_0%,#e8f0f4_80%)]" />
      </div>
    );
  }

  if (visual === "gravesite") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#d2c0a2_0%,#b59b7c_30%,#6f675e_30%,#bcb4aa_100%)]">
        <div className="absolute inset-x-[10%] bottom-[10%] h-[16%] rounded-[8px] bg-[#0f1116] shadow-[0_12px_20px_rgba(0,0,0,0.3)]" />
        <div className="absolute left-[18%] bottom-[24%] h-[50%] w-[64%] rounded-t-[20px] border-[6px] border-[#242730] bg-[linear-gradient(180deg,#131720_0%,#1f2330_100%)]" />
        <div className="absolute left-[25%] bottom-[54%] h-[26%] w-[50%] rounded-t-[30px] border-[6px] border-[#c3aa63] bg-[#232735]" />
        <div className="absolute left-[24%] bottom-[28%] h-[34%] w-[12%] rounded-[8px] bg-[linear-gradient(180deg,#b99874_0%,#8d6a4c_100%)]" />
        <div className="absolute right-[24%] bottom-[28%] h-[34%] w-[12%] rounded-[8px] bg-[linear-gradient(180deg,#b99874_0%,#8d6a4c_100%)]" />
      </div>
    );
  }

  if (visual === "columbarium") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#d7cdc1_0%,#8f8276_100%)]">
        <div className="absolute inset-x-0 top-0 h-[40%] bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_24%,rgba(255,255,255,0.18)_48%,transparent_68%,rgba(255,255,255,0.18)_86%,transparent)]" />
        <div className="absolute bottom-[13%] left-[10%] h-[42%] w-[18%] rounded-t-[14px] bg-[linear-gradient(180deg,#1a1b1f_0%,#060608_100%)]" />
        <div className="absolute bottom-[13%] left-[31%] h-[34%] w-[28%] rounded-t-[18px] bg-[linear-gradient(180deg,#904930_0%,#bc734a_50%,#783d2e_100%)]" />
        <div className="absolute bottom-[13%] right-[12%] h-[38%] w-[16%] rounded-[42%_42%_18%_18%/28%_28%_10%_10%] bg-[linear-gradient(180deg,#5e9b54_0%,#2d6431_100%)]" />
        <div className="absolute bottom-[13%] right-[31%] h-[46%] w-[18%] rounded-t-[14px] bg-[linear-gradient(180deg,#293035_0%,#0a1014_100%)]" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#f4ead4_0%,#f4ebda_60%,#f0ece5_100%)]">
      <div className="absolute inset-x-0 top-0 h-[58%] bg-[radial-gradient(circle_at_20%_22%,rgba(202,179,140,0.3),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(202,179,140,0.18),transparent_20%)]" />
      <div className="absolute bottom-[17%] left-[14%] h-[10%] w-[30%] rounded-[6px] border-2 border-[#c59d39] bg-[linear-gradient(180deg,#d9be75_0%,#aa7f1b_100%)]" />
      <div className="absolute bottom-[17%] right-[12%] h-[12%] w-[36%] rounded-[6px] border-2 border-[#c59d39] bg-[linear-gradient(180deg,#ead28f_0%,#bd8a1a_100%)]" />
    </div>
  );
}

export default function OurProductSection() {
  return (
    <section className="bg-white py-18 sm:py-22 lg:py-28">
      <div className="site-shell  px-[var(--site-gutter)]">
        <div className="mx-auto mb-12 flex max-w-[620px] flex-col items-center text-center sm:mb-16">
          <h2 className="text-[36px] font-semibold uppercase tracking-[-0.03em] text-black sm:text-[44px] lg:text-[52px]">
            Our Products
          </h2>
          <p className="mt-3 text-[16px] text-[#2b2b2b] sm:text-[18px]">
            A Selection of Recent Memorials
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="group">
              <Link href={product.href} className="block">
                <div className="aspect-[0.93] overflow-hidden rounded-[18px] bg-[#f3ede5] shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1">
                  <ProductVisual visual={product.visual} />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="max-w-[92%]">
                    <h3 className="text-[24px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#111111]">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-8 text-[#555555]">
                      {product.description}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-black transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
