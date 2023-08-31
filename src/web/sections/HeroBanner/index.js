import React from "react";

export const HeroBanner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('./heroBg.webp)` }}
        className={`h-[100vh] w-full flex justify-center items-center`}
      >
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
          <img alt="" role="presentation" src="./heroBg.webp" />
        </div> */}
        <div className="max-w-screen-xl mx-auto">
          <div className="w-1/2">
            <h1 className="text-[28px] md:text-[58px] text-white tracking-tight leading-[1.1] mb-[16px] font-semibold">
              Securely connect any device, anywhere.
            </h1>
            <p className="text-[18px] md:text-[24px] text-white tracking-tight leading-[1.5] mb-[16px] font-normal p-0 md:pr-[50px]">
              ZeroTier lets you build modern, secure multi-point virtualized
              networks of almost any type. From robust peer-to-peer networking
              to multi-cloud mesh infrastructure, we enable global connectivity
              with the simplicity of a local network.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
