import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { GallerySection } from "@/components/GallerySection";
import { CodeHighlightSection } from "@/components/CodeHighlightSection";
import { UpcomingSection } from "@/components/UpcomingSection";
import { CoreTechnologiesSection } from "@/components/CoreTechnologiesSection";
import { Footer } from "@/components/Footer";
import { getSortedLogsData } from "@/lib/markdown";

export default async function Dashboard() {
  const logs = await getSortedLogsData();

  return (
    <>
      <Nav />
      <main className="min-h-screen w-full overflow-x-hidden bg-cream">
        <HeroSection />
        <MetricsSection />
        <GallerySection logs={logs} />
        <CodeHighlightSection />
        <UpcomingSection />
        <CoreTechnologiesSection />
      </main>
      <Footer />
    </>
  );
}
