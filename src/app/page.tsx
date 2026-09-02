import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { GallerySection } from "@/components/GallerySection";
import { CodeHighlightSection } from "@/components/CodeHighlightSection";
import { UpcomingSection } from "@/components/UpcomingSection";
import { CoreTechnologiesSection } from "@/components/CoreTechnologiesSection";
import { getSortedLogsData } from "@/lib/markdown";

export default async function Dashboard() {
  const logs = await getSortedLogsData();

  return (
    <main className="min-h-screen w-full bg-[#0F0F0F] overflow-x-hidden font-sans selection:bg-[#7A1F1F] selection:text-white">
      <HeroSection />
      <MetricsSection />
      <GallerySection logs={logs} />
      <CodeHighlightSection />
      <UpcomingSection />
      <CoreTechnologiesSection />
    </main>
  );
}
