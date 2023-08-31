import React from "react";

export const TestimonialCard = (props) => {
  return (
    <>
      <div className="max-w-[960px] mx-auto px-[32px]">
      <div className="flex flex-row max-w-[960px] mx-auto bg-gradient-to-r from-[#ffb441] to-[#4436ca] mb-10 rounded-3xl">
        <div className="flex flex-col md:flex-row p-10 w-full gap-4">
          <div className="w-[10%] md:w-[6%]">
            <img className="" src={props.img} />
          </div>
          <div className="pb-8 text-left w-[90%] md:w-[94%]">
            <p className="mb-4 text-2xl">{props.content}</p>
            <p className="text-lg">{props.name}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
