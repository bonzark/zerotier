import { SectionTitle } from "@/web/components";
import { featuresData, content, pricingData } from "@/web/constants";
import {
  Pricing,
  HeroBanner,
  FeatureSection,
  Testimonial,
  WhyUs,
  Services,
} from "@/web/sections";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SectionTitle>Home Page</SectionTitle>
      <WhyUs content={content} />
      <Testimonial />
      <FeatureSection features={featuresData} />
      <Pricing data={pricingData} />
      <Services />
    </>
  );
}
