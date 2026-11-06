import { LeafIcon } from "@/components/Icons";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <div className="relative mx-auto h-20 w-20">
          <span className="absolute inset-0 rounded-full border border-forest/15" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-forest" />
          <span className="absolute inset-0 grid place-items-center">
            <LeafIcon className="h-7 w-7 text-forest" />
          </span>
        </div>

        <p className="mt-6 font-display text-2xl tracking-tight text-ink">
          ফসল প্রস্তুত হচ্ছে...
        </p>
        <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink/40">
          একটু অপেক্ষা করুন
        </p>
      </div>
    </main>
  );
}
