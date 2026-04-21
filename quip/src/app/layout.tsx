import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://quipmakeitwork.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quip — AI Agency",
    template: "%s | Quip",
  },
  description: "AI solutions that work.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Quip — Make It Work",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
