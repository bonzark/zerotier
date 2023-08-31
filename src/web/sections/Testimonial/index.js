import React from "react";
import { testimonial } from "@/web/constants";
import { SectionTitle, TestimonialCard } from "@/web/components";

export const Testimonial = () => {
  return (
    <>
      <section>
        <div>
          <div className="mb-10">
            <SectionTitle>
              Used by the world's most innovative teams
            </SectionTitle>
          </div>
          {testimonial.map((item) => {
            return (
              <TestimonialCard
                name={item.name}
                content={item.content}
                img={item.imgPath}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
