import React from "react";
import styles from "./heroBanner.module.css";
import Link from "next/link";
const learnBtn = "Learn More >";
export const HeroBanner = () => {
  return (
    <>
      <div
        className={`h-screen w-full flex justify-center items-center bg-center bg-no-repeat bg-cover ${styles.heroBg}`}
      >
        <div className="max-w-screen-xl mx-auto p-8 z-30">
          <div className="lg:w-1/2 w-full px-0 sm:px-8 md:px-0">
            <h1 className="text-[28px] md:text-[58px] text-white tracking-tight leading-[1.1] mb-[16px] font-semibold">
              Securely connect any device, anywhere.
            </h1>
            <p className="text-[4.5vw] sm:text-[18px] md:text-[24px] text-white tracking-tight leading-[1.5] mb-[16px] font-normal p-0 md:pr-[50px]">
              ZeroTier lets you build modern, secure multi-point virtualized
              networks of almost any type. From robust peer-to-peer networking
              to multi-cloud mesh infrastructure, we enable global connectivity
              with the simplicity of a local network.
            </p>
            <div className="py-2">
              <button className="bg-[#ffb441] px-3 border border-[#ffb441] hover:bg-black hover:text-[#ffb441] transition-all duration-200 py-[5px] text-black rounded-3xl">
                Get Zero Tier
              </button>
              <button className="px-3 ml-3 border hover:bg-[#3a3a3a] text-white hover:text-[#ffb441] transition-all duration-200 py-[5px]  border-none rounded-3xl">
                {learnBtn}
              </button>
            </div>
          </div>
        </div>
        <p className="absolute bottom-10 px-8 text-xl">
          🔔 NEW! ZeroTier Summer 2023 Release:
          <Link
            href={"/"}
            className="text-white underline hover:text-[#ffb441]"
          >
            Download 1.12.1
          </Link>
          <span>  -</span>
          <Link
            href={"/"}
            className="text-white ml-2 underline hover:text-[#ffb441]"
          >
            Read More
          </Link>
        </p>
      </div>
    </>
  );
};
