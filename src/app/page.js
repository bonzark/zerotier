import { Community, NewsLetter, SectionTitle } from "@/web/components";
// import { content } from "@/web/constants";
// import { WhyUs } from "@/web/sections";
// import { featuresData } from "@/web/constants";
// import { FeatureSection } from "@/web/sections";
// import { SectionTitle } from "@/web/components";
import { HeroBanner } from "@/web/sections";
import { featuresData, content } from "@/web/constants";
import { FeatureSection, Testimonial, WhyUs, Services } from "@/web/sections";
import Image from "next/image";
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
      <Community />
      <NewsLetter />
    </>
  );
}
