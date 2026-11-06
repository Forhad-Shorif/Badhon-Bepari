import Image from "next/image";
import { dailyRhythm, imagination } from "@/lib/content";
import { ClockIcon, SproutIcon } from "./Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Imagination() {
  return (
    <section id="world" className="relative py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            kicker="আমার জগৎ"
            title="ক্যামেরায় থেকে যাওয়া কাজের দিন"
            description="এই ছবিগুলোতে বড় কোনো গল্প নেই। শুধু শিশির, গ্রিনহাউসের উষ্ণতা, হাতে ধরা ফসল—আমার প্রতিদিনের ছোট আনন্দ।"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {imagination.map((moment, index) => (
            <Reveal key={moment.title} delay={index * 80}>
              <figure
                data-cursor="view"
                className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink"
              >
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,36,26,0.94),rgba(18,36,26,0.12)_55%,transparent_80%)]" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] text-cream backdrop-blur-md">
                    {moment.time}
                  </span>
                  <SunMark />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-cream sm:text-[1.7rem]">
                    {moment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-cream/65">
                    {moment.text}
                  </p>
                  <span className="mt-4 block h-px w-12 bg-amber transition-all duration-500 group-hover:w-24" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-forest p-7 text-cream sm:p-9 lg:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="noise absolute inset-0 opacity-[0.06]" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(232,165,60,0.22),transparent_65%)]" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-soft">
                  <SproutIcon className="h-4 w-4" />
                  জীবনের ছন্দ
                </p>
                <blockquote className="mt-4 font-display text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.2] tracking-[-0.01em]">
                  “আমার নিজের জমি নেই, তবু মাটি নিয়ে কাজ করে পরিবার চালাই।”
                </blockquote>
                <p className="mt-4 max-w-md text-sm leading-7 text-cream/60">
                  ভোরে কাজ শুরু করি, সন্ধ্যায় ক্লান্ত হয়ে ফিরি। তবু পরদিন আবার
                  যেতে ভালো লাগে—কারণ এই কাজ আমাকে স্বাধীনতা, সম্মান আর একটা
                  স্পষ্ট লক্ষ্য দেয়।
                </p>
              </div>

              <div className="grid gap-3">
                {dailyRhythm.map((item) => (
                  <div
                    key={item.time}
                    className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10 text-amber-soft">
                      <ClockIcon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-1 items-baseline justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-0.5 text-[0.7rem] text-cream/45">
                          {item.text}
                        </p>
                      </div>
                      <span className="font-display text-lg text-amber-soft">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SunMark() {
  return (
    <span
      aria-hidden="true"
      className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-cream backdrop-blur-md"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-amber" />
    </span>
  );
}
