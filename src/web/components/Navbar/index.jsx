"use client";
import { navbarData } from "@/web/constants";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../Button";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleDropDown = (value) => {
    if (dropdown !== "") {
      setDropdown("");
    } else {
      setDropdown(value);
    }
  };

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="absolute top-0 w-full z-[111]">
        <nav className="max-w-screen-xl mx-auto bg-transparent border-gray-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="164"
                height="48"
                viewBox="0 0 164 48"
              >
                <path
                  fill="#FFB441"
                  d="M27.1,7.7c0.5,0.1,1.1,0.2,1.6,0.4c2,0.8,3.4,2.7,3.4,4.9c0,7.2,0,14.4,0,21.6c0,2.6-2.1,4.9-4.7,5.2 c0,0-0.1,0-0.1,0c-7.5,0-15,0-22.5,0c-0.4-0.1-0.7-0.1-1.1-0.2C1.5,38.8,0,36.8,0,34.4c0-7,0-14,0-20.9c0-0.3,0-0.6,0-0.9 c0.2-2.2,1.4-3.7,3.4-4.5c0.5-0.2,1-0.3,1.6-0.4C12.4,7.7,19.7,7.7,27.1,7.7z M16.8,13c0.1,0,0.1,0,0.2,0c3.5,0,7,0,10.5,0 c0.5,0,0.9-0.3,0.9-0.8c0-0.5-0.3-0.8-0.9-0.8c-7.6,0-15.3,0-22.9,0c-0.5,0-0.9,0.3-0.9,0.8C3.7,12.7,4,13,4.6,13c3.5,0,7,0,10.5,0 c0.1,0,0.1,0,0.2,0c0,0.9,0,1.8,0,2.7c-4.2,0.5-7.1,3.6-7.3,7.8c-0.1,1.9,0.5,3.6,1.6,5.1c1.4,1.9,3.4,3,5.7,3.2c0,0.1,0,0.1,0,0.2 c0,1.1,0,2.1,0,3.2c0,0.5,0.3,0.8,0.8,0.8c0.4,0,0.7-0.3,0.7-0.8c0-0.8,0-1.6,0-2.3c0-0.3,0-0.7,0-1c2.1-0.2,3.8-1.1,5.2-2.6 c1.4-1.5,2.1-3.4,2.1-5.4c0-1.9-0.6-3.5-1.7-5c-1.4-1.8-3.3-2.8-5.6-3.1C16.8,14.8,16.8,13.9,16.8,13z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M70.7,14.9c2.6,0,5.1-0.1,7.6,0c1.7,0.1,3.2,0.7,4.3,2.2c2.1,2.9,0.6,6.8-2.9,7.8c-0.1,0-0.1,0-0.2,0.1 c1.7,2.6,3.4,5.2,5.1,7.8c-0.9,0-1.7,0-2.6,0c-1.6-2.5-3.2-4.9-4.9-7.4c-1.4,0-2.8,0-4.3,0c0,2.5,0,4.9,0,7.4c-0.7,0-1.4,0-2.2,0 C70.7,26.7,70.7,20.8,70.7,14.9z M81.2,19.8c0-1.4-0.8-2.3-2.1-2.7c-0.5-0.1-1-0.2-1.5-0.2c-1.5,0-3,0-4.5,0c-0.1,0-0.1,0-0.2,0 c0,2.1,0,4.2,0,6.4c0,0,0,0,0,0c1.8,0,3.7,0,5.5-0.1c1.7-0.1,2.8-1.2,2.8-2.9l0,0l0,0C81.2,20.1,81.2,20,81.2,19.8 C81.2,19.8,81.2,19.8,81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M159,24.9c1.7,2.6,3.4,5.2,5,7.7c0,0,0,0,0,0c-0.8,0-1.7,0-2.5,0c-1.6-2.5-3.2-4.9-4.9-7.4c-1.4,0-2.8,0-4.3,0 c0,2.5,0,4.9,0,7.4c-0.7,0-1.4,0-2.2,0c0-5.9,0-11.9,0-17.9c0.1,0,0.1,0,0.2,0c2.2,0,4.5,0,6.7,0c1.6,0,3.1,0.4,4.3,1.5 c1.3,1.2,1.7,2.7,1.5,4.3c-0.2,2.2-1.6,3.6-3.8,4.2C159.1,24.9,159,24.9,159,24.9z M152.3,16.9c0,2.1,0,4.2,0,6.4 c0.1,0,0.1,0,0.2,0c1.4,0,2.8,0,4.2,0c0.4,0,0.9,0,1.3-0.1c1.1-0.2,2.1-0.7,2.4-1.9c0.1-0.4,0.2-0.9,0.2-1.4c0-1.5-0.8-2.5-2.3-2.8 c-0.3-0.1-0.6-0.1-0.9-0.1C155.8,16.9,154.1,16.9,152.3,16.9z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M87.6,24.5c-0.1-1.7,0.1-3.5,0.7-5.1c1.3-3.2,4.1-5,7.7-4.9c2.2,0.1,4.1,0.7,5.7,2.3c1.3,1.3,2,3,2.3,4.8 c0.3,2.3,0.2,4.5-0.7,6.6c-1.3,2.9-3.5,4.4-6.6,4.7c-2,0.2-3.8-0.2-5.5-1.3c-1.9-1.3-2.9-3.1-3.3-5.3 C87.7,25.7,87.6,25.1,87.6,24.5C87.6,24.5,87.6,24.5,87.6,24.5L87.6,24.5z M89.8,24.2c0.1,0.6,0.1,1.1,0.2,1.7 c0.5,2.6,2.2,4.8,5.2,5c2.7,0.2,5-0.9,6-3.6c0.6-1.5,0.7-3.1,0.5-4.7l0,0c0,0,0,0,0,0c0-0.3-0.1-0.7-0.1-1c-0.6-3-2.6-4.8-5.5-5 c-2.5-0.1-4.6,1.1-5.6,3.4c-0.5,1.1-0.6,2.2-0.7,3.3c0,0,0,0,0,0c0,0,0,0,0,0C89.8,23.6,89.8,23.9,89.8,24.2 C89.8,24.2,89.8,24.2,89.8,24.2z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M145.9,30.7c0,0.7,0,1.4,0,2c-4.3,0-8.6,0-12.9,0c0-5.9,0-11.9,0-17.9c4.2,0,8.3,0,12.5,0c0,0.7,0,1.3,0,2 c-3.4,0-6.9,0-10.3,0c0,1.9,0,3.8,0,5.8c2.7,0,5.3,0,8,0c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0,2,0,4,0,6 C138.7,30.7,142.3,30.7,145.9,30.7z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M66.5,30.7c0,0.7,0,1.4,0,2c-4.3,0-8.6,0-12.9,0c0-6,0-11.9,0-17.9c4.2,0,8.3,0,12.5,0c0,0.7,0,1.3,0,2 c-3.4,0-6.9,0-10.3,0c0,1.9,0,3.8,0,5.8c2.7,0,5.4,0,8,0c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0,2,0,4,0,6 C59.3,30.7,62.9,30.7,66.5,30.7z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M48.9,14.8c0,0.6,0,1.2,0,1.9c0,0.1-0.1,0.1-0.1,0.2c-3.6,4.5-7.3,9.1-10.9,13.6c0,0-0.1,0.1-0.1,0.1 c3.8,0,7.6,0,11.4,0c0,0.7,0,1.4,0,2c-4.7,0-9.3,0-14,0c0-0.6,0-1.3,0-1.9c0-0.1,0.1-0.2,0.1-0.2c3.6-4.5,7.2-9,10.8-13.5 c0,0,0.1-0.1,0.1-0.2c-3.6,0-7.2,0-10.8,0c0-0.7,0-1.4,0-2C39.9,14.8,44.4,14.8,48.9,14.8z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M112.9,16.9c-2.1,0-4.1,0-6.2,0c0-0.7,0-1.3,0-2c4.9,0,9.7,0,14.6,0c0,0.7,0,1.3,0,2c-2.1,0-4.1,0-6.2,0 c0,5.3,0,10.6,0,15.8c-0.7,0-1.4,0-2.2,0C112.9,27.4,112.9,22.2,112.9,16.9z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M125.1,14.8c0.7,0,1.4,0,2.1,0c0,5.9,0,11.9,0,17.9c-0.7,0-1.4,0-2.1,0C125.1,26.7,125.1,20.8,125.1,14.8z"
                ></path>
                <polygon
                  fill="#FFB441"
                  points="87.6,24.5 87.6,24.5 87.6,24.5 87.6,24.5 	"
                ></polygon>
                <path
                  fill="#000000"
                  d="M16.8,13c0,0.9,0,1.8,0,2.6c2.3,0.3,4.2,1.3,5.6,3.1c1.1,1.5,1.7,3.1,1.7,5c0,2.1-0.7,3.9-2.1,5.4 c-1.4,1.5-3.1,2.4-5.2,2.6c0,0.4,0,0.7,0,1c0,0.8,0,1.6,0,2.3c0,0.5-0.3,0.8-0.7,0.8c-0.4,0-0.8-0.3-0.8-0.8c0-1.1,0-2.1,0-3.2 c0-0.1,0-0.1,0-0.2c-2.4-0.3-4.3-1.3-5.7-3.2c-1.1-1.5-1.7-3.2-1.6-5.1c0.2-4.2,3.1-7.3,7.3-7.8c0-0.9,0-1.8,0-2.7c0,0-0.1,0-0.2,0 c-3.5,0-7,0-10.5,0c-0.5,0-0.9-0.3-0.9-0.8c0-0.5,0.3-0.8,0.9-0.8c7.6,0,15.3,0,22.9,0c0.5,0,0.9,0.3,0.9,0.8 c0,0.5-0.3,0.8-0.9,0.8c-3.5,0-7,0-10.5,0C16.9,13,16.9,13,16.8,13z M16.8,30.2c3.1-0.3,6-3.1,5.7-6.9c-0.2-3.8-3.3-5.9-5.7-6.1 C16.8,21.6,16.8,25.9,16.8,30.2z M15.3,30.2c0-4.3,0-8.6,0-13c-3,0.3-5.8,3-5.7,6.6C9.6,27.5,12.4,30,15.3,30.2z"
                ></path>
                <path
                  fill="#FFB441"
                  d="M81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8 C81.2,19.8,81.2,19.8,81.2,19.8z"
                ></path>
                <polygon
                  fill="#FFB441"
                  points="81.2,20.3 81.2,20.3 81.2,20.3 81.2,20.3 	"
                ></polygon>
                <path
                  fill="#FFFFFF"
                  d="M89.8,24.1C89.8,24.2,89.8,24.2,89.8,24.1C89.8,24.2,89.8,24.2,89.8,24.1z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M89.8,23.3C89.8,23.3,89.8,23.3,89.8,23.3C89.8,23.4,89.8,23.4,89.8,23.3C89.8,23.4,89.8,23.3,89.8,23.3 C89.8,23.3,89.8,23.3,89.8,23.3z"
                ></path>
                <polygon
                  fill="#FFB441"
                  points="101.8,22.6 101.8,22.6 101.8,22.6 101.8,22.6 	"
                ></polygon>
                <path
                  fill="#FFB441"
                  d="M16.8,30.2c0-4.3,0-8.6,0-12.9c2.4,0.2,5.5,2.3,5.7,6.1C22.8,27.1,19.9,29.9,16.8,30.2z"
                ></path>
                <path
                  fill="#FFB441"
                  d="M15.3,30.2c-2.9-0.3-5.7-2.8-5.7-6.4c-0.1-3.6,2.7-6.3,5.7-6.6C15.3,21.6,15.3,25.9,15.3,30.2z"
                ></path>
              </svg>
            </a>
            <div className="flex gap-[10px]">
              <div className="block lg:hidden">
                <Button variant={"yellow"}>Sign up</Button>
              </div>
              <button
                onClick={handleNav}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                {navOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`w-full lg:block lg:w-auto ${navOpen ? "" : "hidden"}`}
              id="navbar-dropdown"
            >
              <ul
                className={`flex flex-col font-medium p-4 md:p-0 mt-4 gap-[8px] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-[#1a1a1a] ${navOpen ? "h-screen w-full left-0 absolute top-15" : ""
                  }`}
              >
                {navbarData.map((i, index) =>
                  i.dropdown ? (
                    <li key={index}>
                      <button
                        onClick={() => handleDropDown(i.name)}
                        className="flex items-center justify-between gap-[8px] text-[20px] w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-[#ffb441] md:p-0 md:w-auto "
                      >
                        {i.name}
                        <svg
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="v0n4h10"
                        >
                          <path
                            d="M4.93301 7.25C4.74056 7.58333 4.25944 7.58333 4.06699 7.25L0.602886 1.25C0.410435 0.916666 0.650998 0.499999 1.0359 0.499999L7.9641 0.5C8.349 0.5 8.58957 0.916666 8.39712 1.25L4.93301 7.25Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                      {dropdown === i.name && (
                        <div
                          id="dropdownNavbar"
                          className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-400"
                            aria-labelledby="dropdownLargeButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Dashboard
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Settings
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Earnings
                              </a>
                            </li>
                          </ul>
                          <div className="py-1">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              Sign out
                            </a>
                          </div>
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={index}>
                      <Link
                        href={i.link}
                        className="block py-2 pl-3 pr-4 text-[20px] text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-[#ffb441] md:p-0 "
                      >
                        {i.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="hidden lg:block">
              <Button variant={"ghost"}>Login</Button>
              <Button variant={"yellow"}>Sign up</Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
