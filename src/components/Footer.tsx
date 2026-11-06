import { navLinks, site, socials } from "@/lib/content";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  LeafIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="noise absolute inset-0 opacity-[0.05]" />
        <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(82,122,94,0.24),transparent_66%)] blur-2xl" />
        <div className="absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,165,60,0.12),transparent_66%)] blur-2xl" />
      </div>

      <div className="shell relative pt-16 sm:pt-20">
        <div className="grid gap-12 border-b border-cream/10 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <a href="#home" className="group inline-flex w-fit items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-cream text-forest transition-transform duration-500 group-hover:-rotate-12">
                <LeafIcon className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl font-semibold tracking-tight">
                  {site.name}
                  <span className="text-amber">.</span>
                </span>
                <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-cream/40">
                  খামার ও দিনমজুরি
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-md font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] tracking-[-0.03em] text-cream">
              মাটি, শ্রম,{" "}
              <span className="italic text-amber-soft">বিশ্বাস।</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-cream/50">
              দিনমজুরি, মৌসুমি কাজ, নতুন সুযোগ—সবের জন্যই খোলা। ফোন বা
              ইমেইলে যোগাযোগ করুন।
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
              >
                ইমেইল পাঠান
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={site.resume}
                download="বাধন-সিভি.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-cream/15 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream/30 hover:bg-cream/5"
              >
                সিভি ডাউনলোড
                <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/35">
                মেনু
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/35">
                যোগাযোগ
              </p>
              <ul className="mt-4 space-y-3.5">
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="group flex items-center gap-2.5 text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    <PhoneIcon className="h-4 w-4 text-cream/30" />
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-center gap-2.5 text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    <MailIcon className="h-4 w-4 text-cream/30" />
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-cream/60">
                  <MapPinIcon className="h-4 w-4 text-cream/30" />
                  {site.location}
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-[0.68rem] font-medium text-cream/35 transition-colors hover:text-amber-soft"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="select-none overflow-hidden py-7 sm:py-9">
          <p className="whitespace-nowrap font-display text-[clamp(4.5rem,15vw,12rem)] leading-[0.78] tracking-[-0.06em] text-cream/[0.055]">
            বাধন বেপারী<span className="text-amber/20">.</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.66rem] leading-5 text-cream/35">
            © ২০২৬ {site.fullName}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[0.66rem] leading-5 text-cream/35">
              খামার থেকে রেখে যাওয়া ছোট একটি পদচিহ্ন।
            </p>
            <a
              href="#home"
              aria-label="পেজের শুরুতে যান"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/50 transition-all duration-300 hover:border-amber hover:bg-amber hover:text-ink"
            >
              <ArrowUpRightIcon className="h-4 w-4 -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
