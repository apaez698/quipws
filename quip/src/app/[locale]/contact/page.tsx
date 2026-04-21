import { generatePageMetadata } from "@/lib/metadata";
import ContactContent from "./ContactContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "contact", "/contact");
}

export default function ContactPage() {
  return <ContactContent />;
}
