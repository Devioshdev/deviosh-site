import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deviosh.com"),
  title: "Deviosh — App studio",
  description:
    "Deviosh is a founder-led app studio and product brand. We design, build, and ship iOS and Android apps.",
  alternates: {
    canonical: "https://www.deviosh.com/",
  },
  openGraph: {
    title: "Deviosh — App studio",
    description:
      "Founder-led app studio. We design, build, and ship iOS and Android apps — products with real craft.",
    url: "https://www.deviosh.com/",
    siteName: "Deviosh",
    type: "website",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Deviosh — founder-led app studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviosh — App studio",
    description:
      "Founder-led app studio. We design, build, and ship iOS and Android apps — products with real craft.",
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
