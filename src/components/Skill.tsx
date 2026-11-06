import Image from "next/image";
import { crops, extraWorks, skills } from "@/lib/content";
import { ArrowUpRightIcon } from "./Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const banglaNumbers = ["১", "২", "৩", "৪", "৫", "৬", "৭"];

const cardLayout = [
  { span: "lg:col-span-7", aspect: "aspect-[16/11]" },
  { span: "lg:col-span-5", aspect: "aspect-[16/11]" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3]" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3]" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3]" },
  { span: "lg:col-span-6", aspect: "aspect-[3/2]" },
  { span: "lg:col-span-6", aspect: "aspect-[3/2]" },
] as const;

export default function Skill() {
  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="flex items-end justify-between gap-8">
          <Reveal>
            <SectionHeading
              kicker="দক্ষতা"
              title="যেসব কাজ নিজের হাতে করতে পারি"
              description="খামারের প্রতি মৌসুমে কাজ বদলায়। এসব আমি মাঠে বাস্তবে কাজ করেই শিখেছি—বই থেকে নয়।"
            />
          </Reveal>

          <Reveal delay={100} className="hidden shrink-0 pb-2 lg:block">
            <p className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-ink/35">
              ০৭ ফসল
              <br />
              ০৫ বছর
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
          {skills.map((skill, index) => {
            const layout = cardLayout[index];
            return (
              <Reveal
                key={skill.name}
                delay={(index % 3) * 70}
                className={`${layout.span} ${
                  index === 2 ? "sm:col-span-2 lg:col-span-4" : ""
                }`}
              >
                <article
                  data-cursor="view"
                  className={`group relative isolate overflow-hidden rounded-[1.75rem] bg-forest ring-1 ring-inset ring-ink/10 ${layout.aspect}`}
                >
                  <Image
                    src={skill.image}
                    alt={skill.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 40vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,36,26,0.92),rgba(18,36,26,0.28)_48%,transparent_75%)]" />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/85 backdrop-blur-md">
                      {skill.tag}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-cream backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-amber group-hover:text-ink">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-display text-[0.7rem] italic text-cream/50">
                      {banglaNumbers[index] ?? index + 1}
                    </p>
                    <h3 className="mt-1 font-display text-3xl font-medium tracking-tight text-cream sm:text-[2.1rem]">
                      {skill.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-cream/65">
                      {skill.note}
                    </p>
                    <span className="mt-4 block h-px w-12 bg-amber transition-all duration-500 group-hover:w-24" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.75rem] border border-ink/10 bg-cream-soft p-6 sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest">
                  ফসল ও ফল
                </p>
                <p className="text-xs text-ink/40">
                  বপন, পরিচর্যা, ফসল তোলা—সবই পারি
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {crops.map((crop) => (
                  <span
                    key={crop}
                    className="rounded-full border border-forest/15 bg-white/60 px-3 py-1.5 text-xs font-medium text-ink/65"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-forest p-6 text-cream sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-soft">
                  কাজের ধরন
                </p>
                <p className="text-xs text-cream/45">
                  মৌসুমি কাজের জন্য প্রস্তুত
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {extraWorks.map((work) => (
                  <span
                    key={work}
                    className="rounded-full border border-cream/15 bg-cream/[0.06] px-3 py-1.5 text-xs font-medium text-cream/70"
                  >
                    {work}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-4 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] border border-forest/15 bg-sage/45 p-6 sm:flex-row sm:items-center sm:p-7">
            <p className="max-w-xl text-sm leading-7 text-ink/65">
              <span className="font-semibold text-ink">আরও কাজ আছে?</span>{" "}
              ফসল তোলা, বপন, গুদাম, মাল ওঠানো-নামানো—যেকোনো কাজে আলোচনা করা
              যায়। দিনের মজুরি ও সময় আগেই ঠিক করে নিই।
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-forest/20 bg-cream-soft px-5 py-3 text-sm font-semibold text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-cream"
            >
              যোগাযোগ করুন
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
