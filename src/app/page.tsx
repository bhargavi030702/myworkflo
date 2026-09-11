import { Intro } from "@/components/Intro";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
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
      <Intro />
      <ScrollProgress />
      <Nav />
      <main className="min-h-screen w-full overflow-x-hidden bg-paper">
        <HeroSection />
        <Marquee />
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
