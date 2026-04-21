import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quip — AI Agency",
  description: "AI solutions that work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
