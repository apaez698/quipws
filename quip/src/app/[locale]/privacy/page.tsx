import { generatePageMetadata } from "@/lib/metadata";
import PrivacyContent from "./PrivacyContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "privacy", "/privacy");
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
