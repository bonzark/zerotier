import React from "react";

export const SectionTitle = (props) => {
  return (
    <h1 className=" md:text-[42px] text-[22px] text-center text-white tracking-tight leading-[1.1] mb-[16px] font-semibold">
      {props.children}
    </h1>
  );
};
