import React from "react";
import { Button } from "../Button/index";

export const WhyUsCard = ({ img, title, content, reverse, screen, buttonText }) => {
  return (
    <>
      <div
        className={`flex text-white items-center px-3 ${reverse ? "flex-row" : "flex-row-reverse"} ${screen ? "flex-nowrap" : "flex-wrap"} `}
      >
        <div className="sm:w-[50%] w-[100%] self-center">
          <img src={img} alt="" className="w-full items-center p-10" />
        </div>
        <div className="sm:w-[50%] w-[100%] leading-7 p-10">
          <h3 className="md:text-[30px] text-[20px]  font-bold py-5">{title}</h3>
          {content?.map((paragraph) => (
            <p key={paragraph}
              className="md:text-2xl text-[18px] py-3"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          <div className="my-10">
            <Button variant={"white"} className="flex-wrap">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
