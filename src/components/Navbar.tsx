"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";
import {
  ArrowUpRightIcon,
  CloseIcon,
  DownloadIcon,
  LeafIcon,
  MailIcon,
  MenuIcon,
} from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/5 bg-cream/85 shadow-[0_10px_40px_-30px_rgba(18,36,26,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#home"
          className="group inline-flex w-fit items-center gap-3"
          aria-label={`${site.name} — হোমপেজ`}
          onClick={() => setActiveSection("#home")}
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-cream transition-transform duration-500 group-hover:-rotate-12">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-tight text-ink">
              {site.name}
              <span className="text-amber">.</span>
            </span>
            <span className="mt-1 hidden text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ink/50 sm:block">
              খামার ও দিনমজুরি
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="প্রধান মেনু">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveSection(link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-forest" : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber transition-all duration-300 ${
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:col-start-3">
          <a
            href={site.resume}
            download="Badhon-Bepari-CV.pdf"
            className="group hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-ink hover:shadow-card sm:inline-flex"
          >
            সিভি ডাউনলোড
            <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-cream-soft text-ink transition-colors hover:bg-sage lg:hidden"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={`shell overflow-y-auto overflow-x-hidden transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto max-h-[calc(100vh-5rem)] pb-4 opacity-100"
            : "pointer-events-none max-h-0 pb-0 opacity-0"
        }`}
      >
        <div className="rounded-[1.75rem] border border-ink/10 bg-cream-soft p-3 shadow-soft">
          <nav className="flex flex-col" aria-label="মোবাইল মেনু">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href);
                  setMenuOpen(false);
                }}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-sage/60"
              >
                {link.label}
                <span className="font-display text-xs text-ink/35">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-3 grid gap-2 border-t border-ink/10 pt-3">
            <a
              href={site.resume}
              download="Badhon-Bepari-CV.pdf"
              className="flex items-center justify-between rounded-2xl bg-forest px-4 py-3.5 text-sm font-semibold text-cream"
              onClick={() => setMenuOpen(false)}
            >
              সিভি ডাউনলোড
              <DownloadIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-ink/65 transition-colors hover:bg-sage/60"
              onClick={() => setMenuOpen(false)}
            >
              <span className="inline-flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                {site.email}
              </span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
