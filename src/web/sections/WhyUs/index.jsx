"use client";
import React from "react";
import { whyUsData } from "@/web/constants";
import { WhyUsCard } from "@/web/components";

export const WhyUs = () => {
  return (
    <>
      <div className="max-w-screen-xl xl:p-0 lg:mx-auto mx-8 rounded-3xl bg-[#262626] my-10">
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
