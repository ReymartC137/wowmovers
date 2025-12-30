import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';
import StepsSection from '@/components/home/StepsSection';
import CustomerFeedbackSection from "@/components/home/CustomerFeedbackSection";
import NewsSection from "@/components/home/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="w-full">
        <img src="/Frame7.png" alt="Banner" className="w-full h-auto" />
      </div>
      <FeatureSection />
      <StepsSection />
      <CustomerFeedbackSection />
      <NewsSection />
    </div>
  );
}
