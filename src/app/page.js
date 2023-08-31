import { SectionTitle } from "@/web/components";
import { content } from "@/web/constants";
import { WhyUs } from "@/web/sections";

export default function Home() {
  return (
    <>
      <SectionTitle>Home Page</SectionTitle>
      <WhyUs content={content} />
    </>
  );
}
