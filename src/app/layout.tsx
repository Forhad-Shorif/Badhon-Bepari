import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import Cursor from "@/components/Cursor";
import { site } from "@/lib/content";
import "./globals.css";

const bodyFont = Hind_Siliguri({
  variable: "--font-body",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const displayFont = Noto_Serif_Bengali({
  variable: "--font-display-bn",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badhon.mn"),
  title: {
    default: "বাদন — খামার শ্রমিক ও দিনমজুর",
    template: "%s | বাদন",
  },
  description:
    "মাটি আর ঘামে গড়া প্রতিদিনের শ্রম। ৫ বছরের খামারি অভিজ্ঞতা, ফসল তোলা, চাষাবাদ, গুদাম ও দিনমজুরির কাজে দক্ষ বাদনের পোর্টফোলিও।",
  keywords: [
    "খামার শ্রমিক",
    "দিনমজুর",
    "কৃষি কাজ",
    "পোর্টফোলিও",
    "বাদন",
    "ফসল",
    "মঙ্গোলিয়া",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "/",
    siteName: site.name,
    title: "বাদন — খামার শ্রমিক ও দিনমজুর",
    description:
      "মাটি আর ঘামে গড়া প্রতিদিনের শ্রম। ৫ বছরের অভিজ্ঞতা, ১২ ধরনের ফসল, কাজের দিনের ছোট ছোট মুহূর্ত।",
    images: [
      {
        url: "/image/Banner.jpg",
        width: 765,
        height: 692,
        alt: "বাদন — খামার শ্রমিক ও দিনমজুর",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "বাদন — খামার শ্রমিক ও দিনমজুর",
    description:
      "মাটি আর ঘামে গড়া প্রতিদিনের শ্রম। ৫ বছরের অভিজ্ঞতা, ১২ ধরনের ফসল।",
    images: ["/image/Banner.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-cream text-ink">
        <a
          href="#content"
          className="sr-only z-[120] rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-5 focus:top-5"
        >
          মূল কনটেন্টে যান
        </a>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
