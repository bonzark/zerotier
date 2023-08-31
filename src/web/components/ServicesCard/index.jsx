import React from "react";
import { Button } from "../Button/index";

export const ServicesCard = ({
  img,
  title,
  content,
  reverse,
  screen,
  buttonText,
}) => {
  return (
    <div
      className={`flex text-white items-center bg-[#4436CA] md:flex-nowrap rounded-3xl p-8 my-16 ${reverse ? "flex-row" : "flex-row-reverse justify-end"} ${screen ? "flex-wrap" : "flex-wrap-reverse"}
        `}
    >
      <img
        src={img}
        alt=""
        className="items-center w-96 mx-auto"
      />
      <div className="leading-7 items-center">
        <h2 className="md:text-[42px] text-[27px] font-bold py-5">{title}</h2>
        <p className="md:text-2xl text-[18px]">{content}</p>
        <div className="mt-10">
          <Button variant={"yellow"} invert className="flex-wrap">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
