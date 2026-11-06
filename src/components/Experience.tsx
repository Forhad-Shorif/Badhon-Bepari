import { experience, experienceStats } from "@/lib/content";
import { ArrowUpRightIcon } from "./Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-ink py-24 text-cream sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="noise absolute inset-0 opacity-[0.05]" />
        <div className="absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,165,60,0.14),transparent_65%)] blur-2xl" />
        <div className="absolute -left-48 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(82,122,94,0.28),transparent_66%)] blur-2xl" />
      </div>

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                tone="light"
                kicker="অভিজ্ঞতা"
                title="৫ বছর। একটি দিনও নষ্ট হয়নি।"
                description="প্রথম দিনের কোদাল থেকে আজকের দল—আমার অভিজ্ঞতা খেতেই, ঘামের শ্রমে লেখা।"
              />
            </Reveal>

            <Reveal delay={100}>
              <blockquote className="mt-8 rounded-[1.75rem] border border-cream/10 bg-cream/[0.04] p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-amber"
                >
                  “
                </span>
                <p className="mt-1 font-display text-xl leading-relaxed text-cream/85 sm:text-2xl">
                  কাজ শুধু টাকা আয়ের উপায় নয়—মানুষের বিশ্বাস আর নিজের প্রতি
                  সম্মান পাওয়ার জায়গা।
                </p>
                <footer className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/40">
                  — বাধন, কাজের ডায়েরি থেকে
                </footer>
              </blockquote>

              <dl className="mt-4 grid grid-cols-2 gap-3">
                {experienceStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-4"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl font-semibold leading-none text-amber-soft">
                      {stat.value}
                    </dd>
                    <dd className="mt-2 text-[0.68rem] leading-5 text-cream/45">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-soft transition-colors hover:text-amber"
              >
                কাজের প্রস্তাব পাঠান
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <ol className="mt-2">
            {experience.map((item, index) => {
              const isCurrent = item.year === "এখন";

              return (
                <li key={item.year} className="relative pb-6 pl-7 last:pb-0 sm:pl-9">
                  {index < experience.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2.5 h-full w-px bg-cream/15"
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 ring-ink ${
                      isCurrent ? "bg-amber" : "bg-cream/35"
                    }`}
                  />

                  <Reveal delay={index * 60}>
                    <article
                      className={`group rounded-[1.5rem] border p-5 transition-all duration-500 sm:p-6 ${
                        isCurrent
                          ? "border-amber/35 bg-amber/[0.08]"
                          : "border-cream/10 bg-cream/[0.035] hover:border-cream/20 hover:bg-cream/[0.06]"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] ${
                            isCurrent
                              ? "bg-amber text-ink"
                              : "bg-amber/12 text-amber-soft"
                          }`}
                        >
                          {item.year}
                        </span>
                        <span className="text-[0.68rem] font-medium tracking-wide text-cream/40">
                          {item.org}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-[1.65rem] font-medium tracking-tight text-cream sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-cream/60">
                        {item.text}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-cream/10 px-2.5 py-1 text-[0.63rem] font-medium text-cream/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
