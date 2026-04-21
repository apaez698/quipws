import { generatePageMetadata } from "@/lib/metadata";
import AboutContent from "./AboutContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "about", "/about");
}

export default function AboutPage() {
  return <AboutContent />;
}
