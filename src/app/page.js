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

const Home = () => {
  return (
    <>
      <HeroBanner />
      <WhyUs />
      <Testimonial />
      <FeatureSection />
      <Pricing />
      <Services />
      <Community />
      <NewsLetter />
    </>
  );
}

export default Home;