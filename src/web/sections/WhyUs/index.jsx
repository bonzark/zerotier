"use client";
import React from "react";
import { whyUsData } from "@/web/constants";
import { WhyUsCard } from "@/web/components";

export const WhyUs = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto rounded-3xl bg-[#262626] px-4">
        {whyUsData?.map((item, index) => (
          <WhyUsCard
            key={index}
            img={item.imageUrl}
            title={item.title}
            content={item.content}
            buttonText={item.buttonText}
            reverse={item.reverse}
            className="m-0"
          />
        ))}
      </div>
    </>
  );
};
