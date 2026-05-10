import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deviosh.com"),
  title: "Deviosh — Founder-led mobile app development",
  description:
    "Deviosh designs, builds, and publishes custom iOS and Android apps using AI throughout the pipeline. From idea to App Store in 4–6 weeks.",
  alternates: {
    canonical: "https://www.deviosh.com/",
  },
  openGraph: {
    title: "Deviosh — Founder-led mobile app development",
    description:
      "AI-powered custom app development for iOS and Android. Lower-cost, faster delivery, and App Store-ready launches.",
    url: "https://www.deviosh.com/",
    siteName: "Deviosh",
    type: "website",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Deviosh AI-powered app development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviosh — Founder-led mobile app development",
    description:
      "AI-powered custom app development for iOS and Android. Lower-cost, faster delivery, and App Store-ready launches.",
    images: ["/assets/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
