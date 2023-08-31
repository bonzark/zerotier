import { SectionTitle } from "@/web/components";
import { HeroBanner } from "@/web/sections";
import { content } from "@/web/constants";
import { WhyUs } from "@/web/sections";
import { featuresData } from "@/web/constants";
import { FeatureSection, Testimonial } from "@/web/sections";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SectionTitle>Home Page</SectionTitle>
      <WhyUs content={content} />
      <Testimonial />
      <FeatureSection features={featuresData} />
    </>
  );
}
