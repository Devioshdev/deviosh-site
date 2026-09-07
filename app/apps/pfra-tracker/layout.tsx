import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./pfra-theme.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--pfra-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PFRA Tracker — Know where you stand",
  description:
    "Track cardio, strength, core, and body composition on a 100-point score. Independent iOS app from Deviosh. Not affiliated with any military branch.",
  alternates: {
    canonical: "https://www.deviosh.com/apps/pfra-tracker",
  },
  openGraph: {
    title: "PFRA Tracker — Cardio. Strength. Core.",
    description:
      "Know where you stand. Track, score, pass, repeat — on a 100-point scale.",
    url: "https://www.deviosh.com/apps/pfra-tracker",
    siteName: "Deviosh",
    type: "website",
    images: [
      {
        url: "/assets/pfra-tracker-og.svg",
        width: 1200,
        height: 630,
        alt: "PFRA Tracker — Cardio. Strength. Core. Know where you stand.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PFRA Tracker — Cardio. Strength. Core.",
    description:
      "Know where you stand. Track, score, pass, repeat — on a 100-point scale.",
    images: ["/assets/pfra-tracker-og.svg"],
  },
};

export default function PfraTrackerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={display.variable}>{children}</div>;
}
