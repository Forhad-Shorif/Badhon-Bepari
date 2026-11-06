import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon, LeafIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "পেজ পাওয়া যায়নি",
};

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(82,122,94,0.2),transparent_66%)] blur-2xl" />
        <div className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,165,60,0.2),transparent_66%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,36,26,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,36,26,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest text-cream shadow-card">
          <LeafIcon className="h-7 w-7" />
        </div>

        <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-forest">
          ৪০৪ · ভুল পথ
        </p>

        <h1 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] leading-[1.08] tracking-[-0.02em] text-ink">
          মনে হচ্ছে এই পথটা
          <br />
          <span className="italic text-forest">খেতে</span> নিয়ে যাবে না।
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-ink/60 sm:text-base">
          ঠিকানাটি ভুল লেখা হয়েছে, অথবা পেজটি অন্য জায়গায় সরে গেছে। চিন্তা
          নেই—হোমপেজে ফিরে কাজ চালিয়ে যাই।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-ink hover:shadow-card"
          >
            হোমপেজ
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-cream-soft px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-forest/30 hover:bg-white"
          >
            কাজে নিন
          </Link>
        </div>
      </div>
    </main>
  );
}
