import { NewsLetter, SectionTitle } from "@/web/components";
import { Testimonial } from "@/web/sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionTitle>Home Page</SectionTitle>
      <Testimonial />
      <NewsLetter />
    </>
  );
}
