import { SectionTitle } from "@/web/components";
import { HeroBanner } from "@/web/sections";
import { WhyUs } from "@/web/sections";
import { FeatureSection, Testimonial } from "@/web/sections";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SectionTitle>Home Page</SectionTitle>
      <WhyUs />
      <Testimonial />
      <FeatureSection />
    </>
  );
}

export default Home;