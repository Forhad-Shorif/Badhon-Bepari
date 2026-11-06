"use client";

import { useState, type FormEvent } from "react";
import { site, socials } from "@/lib/content";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "./Icons";
import Reveal from "./ui/Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `কাজের প্রস্তাব — ${name.trim() || "পোর্টফোলিও"}`,
    );
    const body = encodeURIComponent(
      `${message.trim()}\n\nযোগাযোগ:\n${name.trim()}\n${contact.trim()}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative pb-20 pt-6 sm:pb-24 lg:pb-28">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-ink p-6 text-cream sm:p-10 lg:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="noise absolute inset-0 opacity-[0.06]" />
              <div className="absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(82,122,94,0.4),transparent_66%)] blur-2xl" />
              <div className="absolute -bottom-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,165,60,0.18),transparent_66%)] blur-2xl" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-amber-soft">
                  <span className="h-px w-8 bg-amber-soft/60" />
                  যোগাযোগ
                </p>

                <h2 className="mt-5 text-balance font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.14] tracking-[-0.015em]">
                  কাজে নিন?
                  <br />
                  <span className="italic text-amber-soft">চায়ের আড্ডায়</span>{" "}
                  কথা বলি।
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-cream/60 sm:text-base">
                  ফসল তোলা, বপন, গুদাম, মাল ওঠানো-নামানো—দিনমজুরির জন্য
                  প্রস্তুত। কখন, কোথায়, কত দিন কাজ হবে বলুন; সময় মিলিয়ে নিই।
                </p>

                <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-cream/10 bg-cream/[0.05] px-4 py-2 text-[0.7rem] font-medium text-cream/75">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                  </span>
                  {site.availability}
                </div>

                <div className="mt-8 grid gap-3">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="group flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.035] p-4 transition-colors hover:border-amber/30 hover:bg-cream/[0.06]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10 text-amber-soft">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-cream/40">
                        ফোন
                      </span>
                      <span className="mt-0.5 block text-sm font-medium">
                        {site.phone}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-cream/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-soft" />
                  </a>

                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.035] p-4 transition-colors hover:border-amber/30 hover:bg-cream/[0.06]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10 text-amber-soft">
                      <MailIcon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-cream/40">
                        ইমেইল
                      </span>
                      <span className="mt-0.5 block text-sm font-medium">
                        {site.email}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-cream/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-soft" />
                  </a>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.035] p-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/10 text-amber-soft">
                        <MapPinIcon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cream/40">
                          ঠিকানা
                        </p>
                        <p className="mt-0.5 text-xs font-medium">
                          {site.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.035] p-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/10 text-amber-soft">
                        <ClockIcon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cream/40">
                          কাজের সময়
                        </p>
                        <p className="mt-0.5 text-xs font-medium">
                          প্রতিদিন · ০৭:০০–১৯:০০
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/10 pt-5">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-1.5 text-xs font-medium text-cream/50 transition-colors hover:text-cream"
                    >
                      {social.label}
                      <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[1.75rem] bg-cream p-6 text-ink shadow-soft sm:p-8 lg:self-center"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest">
                  কাজের প্রস্তাব
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight sm:text-[1.75rem]">
                  সংক্ষেপে লিখুন
                </h3>
                <p className="mt-2 text-xs leading-6 text-ink/50">
                  কত দিন, কোথায়, কী কাজ—লিখলে সবচেয়ে দ্রুত উত্তর দিতে পারব।
                </p>

                <div className="mt-6 grid gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-ink/45"
                    >
                      আপনার নাম
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="যেমন: রহিম"
                      className="mt-2 w-full border-0 border-b border-ink/15 bg-transparent px-0 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/25 focus:border-forest focus:ring-0"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-ink/45"
                    >
                      ফোন বা ইমেইল
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      autoComplete="tel"
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                      placeholder="+976 9911 2233"
                      className="mt-2 w-full border-0 border-b border-ink/15 bg-transparent px-0 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/25 focus:border-forest focus:ring-0"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-ink/45"
                    >
                      কাজের বিবরণ
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="যেমন: আগামী সপ্তাহে ৩ দিন আলু তোলার জন্য একজন মানুষ দরকার।"
                      className="mt-2 w-full resize-none border-0 border-b border-ink/15 bg-transparent px-0 py-2.5 text-sm leading-6 text-ink outline-none transition-colors placeholder:text-ink/25 focus:border-forest focus:ring-0"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:bg-ink hover:shadow-card"
                >
                  প্রস্তাব পাঠান
                  <SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>

                <p className="mt-3 text-center text-[0.65rem] leading-5 text-ink/40">
                  বাটনে চাপলেই ইমেইল অ্যাপ খুলবে। অথবা সরাসরি{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold text-forest underline underline-offset-2"
                  >
                    {site.email}
                  </a>{" "}
                  ঠিকানায় লিখুন।
                </p>

                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-2 text-center text-[0.65rem] font-medium text-forest transition-opacity ${
                    sent ? "opacity-100" : "opacity-0"
                  }`}
                >
                  ইমেইল অ্যাপ খোলা হচ্ছে। না খুললে সরাসরি লিখুন।
                </p>

                <div className="mt-6 rounded-2xl border border-forest/10 bg-sage/35 p-4">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-forest">
                    দ্রুত উত্তর পেতে
                  </p>
                  <ul className="mt-2 grid gap-1.5 text-[0.7rem] leading-5 text-ink/55">
                    <li>কোথায়, কখন কাজ হবে?</li>
                    <li>কত দিন, দিনে কত ঘণ্টা?</li>
                    <li>কোন ফসল, কী কাজ?</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
