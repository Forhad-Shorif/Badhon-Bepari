"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, LeafIcon } from "@/components/Icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(180,95,63,0.16),transparent_66%)] blur-2xl" />
        <div className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,165,60,0.18),transparent_66%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-clay text-cream shadow-card">
          <LeafIcon className="h-7 w-7 rotate-45" />
        </div>

        <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-clay">
          সাময়িক সমস্যা
        </p>

        <h1 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] leading-[1.08] tracking-[-0.02em] text-ink">
          কিছু একটা
          <br />
          <span className="italic text-clay">ভুল হয়ে গেছে।</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-ink/60 sm:text-base">
          মাঠে হঠাৎ ঝড় উঠেছে বলে মনে হচ্ছে। আবার চেষ্টা করুন বা হোমপেজে ফিরে
          দেখুন। সমস্যা চলতে থাকলে সরাসরি যোগাযোগ করুন।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-ink hover:shadow-card"
          >
            আবার চেষ্টা করুন
            <ArrowUpRightIcon className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-cream-soft px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-forest/30 hover:bg-white"
          >
            হোমপেজ
          </Link>
        </div>
      </div>
    </main>
  );
}
