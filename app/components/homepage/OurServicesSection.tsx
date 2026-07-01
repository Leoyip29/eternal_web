import Image from "next/image";

const services = [
  {
    title: "Design a Gravestone",
    description:
      "Begin with a shape and silhouette that honours their memory.",
    icon: "pen",
  },
  {
    title: "Choose Your Material",
    description:
      "Granite, marble, or bluestone each with its own quiet beauty.",
    icon: "layers",
  },
  {
    title: "Add Engraving",
    description:
      "Names, dates and inscriptions in Chinese or English calligraphy.",
    icon: "type",
  },
  {
    title: "Order Online",
    description:
      "Confirm your stone with our team and we handle the rest with care.",
    icon: "box",
  },
] as const;

const processSteps = [
  {
    step: "Step 01",
    title: "Browse Stones",
    description:
      "Explore our curated catalogue of memorial designs and materials.",
    icon: "search",
    tone: "sand",
  },
  {
    step: "Step 02",
    title: "Customise Details",
    description:
      "Refine engraving, dimensions, finish and floral details.",
    icon: "sliders",
    tone: "sage",
  },
  {
    step: "Step 03",
    title: "Submit Order",
    description:
      "Confirm via WhatsApp, secure online portal or in-person visit.",
    icon: "send",
    tone: "sand",
  },
  {
    step: "Step 04",
    title: "Confirm & Deliver",
    description:
      "White-glove installation at the cemetery or columbarium of choice.",
    icon: "check",
    tone: "sage",
  },
] as const;

function PenIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="m14 6 4 4M4 20l3.5-1 9-9a2.8 2.8 0 0 0-4-4l-9 9L4 20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9 18c0-2.2-1.8-4-4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="m12 5 8 4.2-8 4.2-8-4.2L12 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m4 12.5 8 4.2 8-4.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m4 15.8 8 4.2 8-4.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TypeIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 6h14M12 6v12M9 18h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m12 12 8-4.5M12 12 4 7.5M12 12v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 4v16M12 7v10M18 4v16M4 9h4M10 15h4M16 8h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="m21 3-8.5 18-2.5-7-7-2.5L21 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8.5 12.5 2.2 2.2 4.8-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ServiceIcon({ type }: { type: (typeof services)[number]["icon"] }) {
  if (type === "layers") {
    return <LayersIcon />;
  }

  if (type === "type") {
    return <TypeIcon />;
  }

  if (type === "box") {
    return <BoxIcon />;
  }

  return <PenIcon />;
}

function ProcessIcon({
  type,
}: {
  type: (typeof processSteps)[number]["icon"];
}) {
  if (type === "sliders") {
    return <SlidersIcon />;
  }

  if (type === "send") {
    return <SendIcon />;
  }

  if (type === "check") {
    return <CheckIcon />;
  }

  return <SearchIcon />;
}

export default function OurServicesSection() {
  return (
    <>
      <section className="relative overflow-hidden text-white">
        <Image
          src="/homepage/ourServices.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#000000C2]" />

        <div className="site-shell relative px-[var(--site-gutter)] py-16 sm:py-20 lg:py-24">
          <div className="max-w-[620px]">
            <h2 className="text-[36px] font-medium uppercase tracking-[-0.03em] sm:text-[46px] lg:text-[52px]">
              Our Services
            </h2>
            <p className="mt-3 text-[18px] text-white/65 sm:text-[20px]">
              A Considered Path, From First Thought to Final Stone
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-white/16 sm:mt-12 lg:mt-14" />

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {services.map((service) => (
              <article key={service.title} className="max-w-[280px]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#222222] shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.03em] text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-white/66">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f3] text-[#2d312c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(214,190,146,0.1),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(168,180,155,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,243,236,0.94))]" />
        <div className="site-shell relative px-[var(--site-gutter)] py-18 sm:py-22 lg:py-26">
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="text-[34px] font-semibold uppercase tracking-[-0.04em] text-black sm:text-[44px] lg:text-[50px]">
              How It Works
            </h2>
            <p className="mt-3 text-[18px] text-[#6b6d6a] sm:text-[20px]">
              Four Gentle Steps, Guided With Care
            </p>
          </div>

          <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-[#e7dbc9] xl:block" />
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#faf8f3] text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] ${
                    step.tone === "sage" ? "bg-[#9baa88]" : "bg-[#cfad69]"
                  }`}
                >
                  <ProcessIcon type={step.icon} />
                </div>
                <span className="mt-8 text-[12px] uppercase tracking-[0.38em] text-[#5f625d]">
                  {step.step}
                </span>
                <h3 className="mt-4 text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#343933]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[250px] text-[16px] leading-7 text-[#666a65]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
