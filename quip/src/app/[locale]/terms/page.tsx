import { generatePageMetadata } from "@/lib/metadata";
import TermsContent from "./TermsContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "terms", "/terms");
}

export default function TermsPage() {
  return <TermsContent />;
}
