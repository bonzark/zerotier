import { featuresData, content, pricingData } from "@/web/constants";
import {
  Community,
  NewsLetter,
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
      <WhyUs content={content} />
      <Testimonial />
      <FeatureSection features={featuresData} />
      <Pricing data={pricingData} />
      <Services />
      <Community />
      <NewsLetter />
    </>
  );
}
