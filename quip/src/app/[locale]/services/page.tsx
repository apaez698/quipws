import { generatePageMetadata } from "@/lib/metadata";
import ServicesContent from "./ServicesContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "services", "/services");
}

export default function ServicesPage() {
  return <ServicesContent />;
}
