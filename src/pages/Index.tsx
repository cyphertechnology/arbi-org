import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import ImpactSection from "@/components/home/ImpactSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
