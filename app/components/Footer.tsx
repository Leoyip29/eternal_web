"use client";

import Link from "next/link";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/85291234567", icon: "whatsapp" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
] as const;

const accreditationItems = [
  "Licensed memorial masonry",
  "Verified heritage care",
  "Protected workmanship",
];

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-[20px] w-[22px]"
      viewBox="0 0 24 22"
      fill="none"
    >
      <path
        d="M2.5 20.5L7.65 3.25l4.72 8.78 3.35-5.4 5.78 13.87H2.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-4.8 7-11a7 7 0 1 0-14 0c0 6.2 7 11 7 11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.75 19.75 0 0 1-8.63-3.07 19.47 19.47 0 0 1-6-6A19.75 19.75 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.29-1.29a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5h16v14H4V5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.42 0-2.76-.35-3.94-.97L3 21l1.97-5.56A8.46 8.46 0 0 1 4 11.5 8.5 8.5 0 1 1 21 11.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function RibbonIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m9.5 13.2-1 5.3L12 17l3.5 1.5-1-5.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 6.5 5v5.2c0 4.3 2.3 8.3 5.5 10.3 3.2-2 5.5-6 5.5-10.3V5L12 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m9.5 11.5 1.7 1.7 3.3-3.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path
        d="m12 4 2.2 1.3 2.6-.2 1.3 2.2 2.2 1.3-.2 2.6L21 13l-1.3 2.2.2 2.6-2.2 1.3-1.3 2.2-2.6-.2L12 22l-2.2-1.3-2.6.2-1.3-2.2-2.2-1.3.2-2.6L3 13l1.3-2.2-.2-2.6 2.2-1.3 1.3-2.2 2.6.2L12 4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="m10.2 12 1.2 1.2 2.4-2.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SocialIcon({ type }: { type: (typeof socialLinks)[number]["icon"] }) {
  if (type === "instagram") {
    return (
      <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none">
        <path d="M13.2 20v-7h2.4l.4-3h-2.8V8.1c0-.87.24-1.47 1.5-1.47H16V4a17 17 0 0 0-2.07-.1c-2.06 0-3.47 1.26-3.47 3.58V10H8v3h2.46v7h2.74Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "tiktok") {
    return (
      <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 4c.5 2 1.7 3.6 3.5 4.2v2.8a6.9 6.9 0 0 1-3.5-1v5.5a4.5 4.5 0 1 1-4.5-4.5h.3v2.5H10a2 2 0 1 0 2 2V4h2.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "pinterest") {
    return (
      <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none">
        <path d="M12 3.8a8.2 8.2 0 0 0-3 15.84c0-.66 0-1.72.23-2.44l1.25-5.3s-.31-.62-.31-1.54c0-1.44.84-2.52 1.88-2.52.88 0 1.3.66 1.3 1.45 0 .88-.56 2.19-.85 3.4-.24 1.01.51 1.84 1.5 1.84 1.8 0 3.02-2.31 3.02-5.04 0-2.08-1.4-3.64-3.94-3.64-2.86 0-4.64 2.14-4.64 4.54 0 .83.25 1.42.65 1.88.19.22.22.31.15.57l-.2.83c-.07.27-.29.37-.54.27-1.5-.62-2.2-2.3-2.2-4.18 0-3.12 2.63-6.87 7.82-6.87 4.17 0 6.92 3.02 6.92 6.26 0 4.28-2.38 7.48-5.88 7.48-1.17 0-2.27-.63-2.65-1.35l-.72 2.75c-.26 1-.77 2.23-1.2 3.08.9.27 1.84.42 2.82.42A8.2 8.2 0 0 0 12 3.8Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 11.3A8 8 0 0 0 6.34 5.66 7.93 7.93 0 0 0 4 11.3c0 1.4.36 2.78 1.04 4L4 20l4.87-1.01A8 8 0 1 0 20 11.3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.1 8.8c.17-.38.35-.39.52-.39h.45c.15 0 .38.05.58.48.2.42.68 1.64.74 1.76.06.12.1.27.02.43-.08.16-.12.26-.24.4-.12.14-.25.3-.35.4-.12.12-.24.25-.1.5.14.25.62 1.03 1.33 1.66.91.81 1.67 1.06 1.91 1.18.24.12.38.1.52-.06.14-.17.58-.67.73-.9.15-.23.31-.19.52-.11.21.08 1.33.63 1.56.75.22.12.36.17.42.27.05.1.05.6-.14 1.18-.2.58-1.1 1.1-1.53 1.16-.43.06-.97.08-1.57-.12-.36-.12-.82-.27-1.42-.53-2.5-1.08-4.14-3.6-4.27-3.78-.12-.18-1-1.32-1-2.52 0-1.2.63-1.79.85-2.03Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-black/10 text-[#2f2c28]"
      style={{
        backgroundColor: "#f5ecdf",
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55), transparent 36%), radial-gradient(circle at 80% 25%, rgba(232,212,181,0.38), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.08))",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.1fr_1.1fr_1.15fr] lg:gap-8">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 text-[18px] font-medium">
              <LogoMark />
              <span>Everstone Memorials</span>
            </Link>

            <p className="max-w-[280px] text-[15px] leading-8 text-[#3f3a35]/90">
              Crafting dignified memorials for Hong Kong families since 1978.
              <span className="block">永恆紀念，誠心相伴。</span>
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-[10px] bg-[#2f302d] px-4 py-1.5 text-[13px] text-white shadow-sm">
                HKCA Certified
              </span>
              <span className="rounded-[10px] bg-[#2f302d] px-4 py-1.5 text-[13px] text-white shadow-sm">
                BR# 5847291
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] font-medium">Visit Us</h2>
            <div className="flex flex-col gap-3 text-[15px] text-[#3f3a35]/90">
              <div className="flex items-start gap-2.5">
                <PinIcon />
                <p>14 Memorial Way, Sha Tin, New Territories, Hong Kong</p>
              </div>
              <div className="flex items-start gap-2.5">
                <ClockIcon />
                <p>Mon-Sat: 9:00 - 18:00</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform hover:-translate-y-0.5"
                >
                  <SocialIcon type={item.icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] font-medium">Contact</h2>
            <div className="flex flex-col gap-3 text-[15px] text-[#3f3a35]/90">
              <Link href="tel:+85223456789" className="flex items-start gap-2.5 transition-opacity hover:opacity-75">
                <PhoneIcon />
                <span>+852 2345 6789</span>
              </Link>
              <Link href="mailto:care@everstone.hk" className="flex items-start gap-2.5 transition-opacity hover:opacity-75">
                <MailIcon />
                <span>care@everstone.hk</span>
              </Link>
              <Link href="https://wa.me/85291234567" className="flex items-start gap-2.5 transition-opacity hover:opacity-75">
                <MessageIcon />
                <span>WhatsApp: +852 9123 4567</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] font-medium">Accreditations</h2>
            <div className="grid grid-cols-3 gap-3">
              {accreditationItems.map((item, index) => (
                <div
                  key={item}
                  className="flex aspect-[1/1.08] items-center justify-center rounded-[8px] border border-black/6 bg-[rgba(255,255,255,0.28)] text-[#3b3834] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                  title={item}
                >
                  {index === 0 ? <RibbonIcon /> : null}
                  {index === 1 ? <ShieldIcon /> : null}
                  {index === 2 ? <BadgeIcon /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-5 text-[14px] text-[#4b4640] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Everstone Memorials Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition-opacity hover:opacity-70">
              Privacy
            </Link>
            <Link href="/terms" className="transition-opacity hover:opacity-70">
              Terms
            </Link>
            <Link href="/sitemap" className="transition-opacity hover:opacity-70">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
