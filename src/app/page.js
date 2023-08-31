import { SectionTitle } from "@/web/components";
import { featuresData, content } from "@/web/constants";
import { FeatureSection, Testimonial, WhyUs, Services } from "@/web/sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionTitle>Home Page</SectionTitle>
      <WhyUs content={content} />
      <Testimonial />
      <FeatureSection features={featuresData} />
      <Services />
    </>
  );
}
