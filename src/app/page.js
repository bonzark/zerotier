import { SectionTitle } from "@/web/components";
import { HeroBanner } from "@/web/sections";
import { featuresData } from "@/web/constants";
import { FeatureSection, Testimonial } from "@/web/sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SectionTitle>Home Page</SectionTitle>
      <Testimonial />
      <FeatureSection features={featuresData} />
    </>
  );
}
