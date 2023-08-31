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
  const flexDirection = reverse ? "row" : "row-reverse";
  const flexWrap = screen ? "nowrap" : "wrap-reverse";

  return (
    <>
      <div
        className={`flex text-white items-center bg-[#4436ca] rounded-3xl p-8 my-16`}
        style={{ flexDirection, flexWrap }}
      >
        <div className="sm:w-[33%] w-[100%] self-center">
          <img
            src={img}
            alt=""
            className="items-center w-full h-[376.14px] px-5"
          />
        </div>
        <div className="sm:w-[67%] w-[100%] leading-7 items-center">
          <h2 className="md:text-[42px] text-[27px] font-bold py-5">{title}</h2>
          <p className="md:text-2xl text-[18px]">{content}</p>
          <div className="mt-10">
            <Button variant={"yellow"} invert className="flex-wrap">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
