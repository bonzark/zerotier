import { SectionTitle } from "@/web/components";
import { HeroBanner } from "@/web/sections";
import { featuresData, content } from "@/web/constants";
import { FeatureSection, Testimonial, WhyUs, Services } from "@/web/sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SectionTitle>Home Page</SectionTitle>
      <WhyUs content={content} />
      <Testimonial />
      <FeatureSection features={featuresData} />
      <Services />
    </>
  );
}
