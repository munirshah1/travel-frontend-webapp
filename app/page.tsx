import CampSection from '@/components/CampSection';
import FeatureSection from '@/components/FeatureSection';
import GetAppSection from '@/components/GetAppSection';
import GuideSection from '@/components/GuideSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CampSection />
      <GuideSection />
      <FeatureSection />
      <GetAppSection />
    </>
  );
}
