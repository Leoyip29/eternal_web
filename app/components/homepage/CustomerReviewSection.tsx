import Image from "next/image";

function StarIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="m12 3.8 2.5 5.07 5.6.82-4.05 3.95.96 5.58L12 16.6l-5.01 2.62.96-5.58L3.9 9.69l5.6-.82L12 3.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 12H5M11 6l-6 6 6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}


export default function CustomerReviewSection() {
  return (
    <section className="bg-[#f8f8f6] py-18 sm:py-22 lg:py-28">
      <div className="site-shell px-[var(--site-gutter)] overflow-hidden bg-[#f8f8f6] lg:grid lg:grid-cols-[0.94fr_1fr]">
        <div className="flex flex-col justify-center  ">
          <div className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#90958d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#181818]" />
            Customer Reviews
          </div>

          <h2 className="max-w-[420px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111111] sm:text-[54px]">
            What <span className="text-[#738460]">Our Customers</span> are saying?
          </h2>

          <p className="mt-8 max-w-[420px] text-[16px] leading-7 text-[#2f312d]">
            &quot;The craftsmanship and detailing on the granite memorial stone exceeded our expectations. The team was professional, respectful, and delivered everything on time.&quot;
          </p>

          <div className="mt-6 flex items-center gap-1 text-[#f2b01e]">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>

          <p className="mt-3 text-[15px] font-semibold text-[#212320]">
            Michael Thompson
          </p>

          <div className="mt-10 flex items-center gap-3 text-[#9bab91]">
            <button
              type="button"
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce1d7] transition-colors hover:bg-[#eef2ea]"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce1d7] transition-colors hover:bg-[#eef2ea]"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="relative h-auto w-auto">
          <Image src="/homepage/customer-review.jpg" alt="Customer Review" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
