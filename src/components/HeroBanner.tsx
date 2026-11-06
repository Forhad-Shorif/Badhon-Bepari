import Image from "next/image";
import { heroStats, site } from "@/lib/content";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  SproutIcon,
} from "./Icons";
import Reveal from "./ui/Reveal";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-24 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,165,60,0.24),transparent_64%)] blur-2xl" />
        <div className="absolute -left-56 top-64 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(82,122,94,0.2),transparent_66%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,36,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,36,26,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_76%)]" />
      </div>

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-forest/15 bg-cream-soft/80 px-4 py-2 text-[0.7rem] font-semibold text-forest shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
            </span>
            হ্যালো, আমি বাধন বেপারী · কাজ খুঁজছি
          </div>

          <h1 className="mt-7 max-w-full break-words font-display text-[clamp(1.9rem,8.5vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-ink sm:text-[clamp(3rem,6.6vw,5.35rem)]">
            হাতে কাজ করি,
            <br />
            দিনের{" "}
            <span className="relative inline-block italic text-forest">
              শ্রমে
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-amber/80 sm:-bottom-2.5 sm:h-3"
              >
                <path
                  d="M2 8c54-5 107-6 158-3s102 4 138-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            বেঁচে থাকি।
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-ink/65 sm:text-lg">
            পাঁচ বছর ধরে খেত, গ্রিনহাউস আর গুদামে দিনমজুরি করছি। সবজি, ফল,
            দানাদার ফসল—বপন, সেচ, পরিচর্যা, ফসল তোলা—হাত লাগে এমন সব কাজেই
            প্রস্তুত।
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-ink hover:shadow-card"
            >
              কাজে নিন
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.resume}
              download="বাধন-সিভি.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-cream-soft/70 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-forest/30 hover:bg-white"
            >
              সিভি ডাউনলোড
              <DownloadIcon className="h-4 w-4 text-forest transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-5 border-t border-ink/10 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold leading-none text-ink sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-2 text-[0.72rem] font-medium leading-5 text-ink/50">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={140} className="relative mx-auto w-full max-w-[34rem]">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[3.2rem] border border-forest/10 sm:-inset-6"
            />
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-7 h-28 w-28 animate-spin-slow rounded-full border border-dashed border-forest/25 sm:-right-8 sm:-top-9 sm:h-36 sm:w-36"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] bg-sage shadow-soft sm:rounded-[2.8rem]">
              <Image
                src="/image/Banner.jpg"
                alt="খামার শ্রমিক বাধন — শ্রমের আনন্দ"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover object-[50%_28%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,36,26,0.45),transparent_45%)]" />

              <div className="absolute inset-x-4 bottom-4 hidden items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5 sm:flex">
                <p className="text-xs font-medium text-cream/75">
                 বাধন · {site.location}
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold text-cream backdrop-blur-md">
                  <SproutIcon className="h-3.5 w-3.5" />
                  মৌসুমি কাজ
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 left-3 flex animate-float items-center gap-3 rounded-2xl border border-white/50 bg-cream/90 p-3.5 shadow-soft backdrop-blur-md sm:-left-7 sm:p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-cream">
                <SproutIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/45">
                  আজকের কাজ
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  ফসল তোলা · ০৬:০০
                </p>
              </div>
            </div>

            <div className="absolute -right-2 top-8 grid h-24 w-24 animate-float-slow place-items-center rounded-full bg-amber text-ink shadow-card sm:-right-5 sm:h-28 sm:w-28">
              <div className="text-center">
                <span className="block font-display text-3xl font-semibold leading-none">
                  ৫+
                </span>
                <span className="mt-1.5 block text-[0.58rem] font-bold uppercase tracking-[0.2em]">
                  বছর
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="shell relative mt-16 flex justify-center lg:mt-6">
        <a
          href="#skills"
          className="group inline-flex flex-col items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink/40 transition-colors hover:text-forest"
        >
          নিচে স্ক্রল করুন
          <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-cream-soft/60 transition-colors group-hover:border-forest/30">
            <ArrowDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
