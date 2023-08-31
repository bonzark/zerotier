import { SectionTitle } from "@/web/components";
import { featuresData } from "@/web/constants";
import { FeatureSection, Testimonial } from "@/web/sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionTitle>Home Page</SectionTitle>
      <Testimonial />
      <FeatureSection features={featuresData} />
    </>
  );
}
