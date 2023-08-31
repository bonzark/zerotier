import { Community, NewsLetter, SectionTitle } from "@/web/components";
import { content } from "@/web/constants";
import { WhyUs } from "@/web/sections";
import { featuresData } from "@/web/constants";
import { FeatureSection, Testimonial } from "@/web/sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionTitle>Home Page</SectionTitle>
      <WhyUs content={content} />
      <Testimonial />
      <FeatureSection features={featuresData} />
      <Community />
      <NewsLetter />
    </>
  );
}
