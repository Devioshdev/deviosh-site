import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deviosh.com"),
  title: "Deviosh | Founder-Led Mobile App Development",
  description:
    "Deviosh builds focused mobile apps, MVPs, app modernization, AI features, and automation for founders and small teams.",
  openGraph: {
    title: "Deviosh | Founder-Led Mobile App Development",
    description:
      "Focused mobile app development, modernization, AI features, and automation for founders and small teams.",
    url: "https://deviosh.com",
    siteName: "Deviosh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviosh | Founder-Led Mobile App Development",
    description:
      "Focused mobile app development, modernization, AI features, and automation for founders and small teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
