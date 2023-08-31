"use client";
import React from "react";
import { servicesData } from "@/web/constants";
import { ServicesCard } from "@/web/components";

export const Services = () => {
  return (
    <>
      <div className="max-w-screen-xl p-8 xl:p-0 mx-auto">
        {servicesData?.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.imageUrl}
            title={item.title}
            content={item.content}
            buttonText={item.buttonText}
            reverse={item.reverse}
          />
        ))}
      </div>
    </>
  );
};
