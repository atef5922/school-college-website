import { AcademicPrograms } from "@/components/home/AcademicPrograms";
import { AdmissionCTA } from "@/components/home/AdmissionCTA";
import { FeatureCards } from "@/components/home/FeatureCards";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeContactSection } from "@/components/home/HomeContactSection";
import { NoticeEventQuickLinks } from "@/components/home/NoticeEventQuickLinks";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { QuickActionCards } from "@/components/home/QuickActionCards";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickActionCards />
      <StatsBar />
      <PrincipalMessage />
      <NoticeEventQuickLinks />
      <FeatureCards />
      <AcademicPrograms />
      <GalleryPreview />
      <TestimonialsSection />
      <AdmissionCTA />
      <HomeContactSection />
    </>
  );
}
