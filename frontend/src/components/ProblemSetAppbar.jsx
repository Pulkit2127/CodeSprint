import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.svg";

const ProblemSetAppbar = () => {
  return (
    <div className="flex justify-center border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-lg w-full h-fit flex justify-between px-3">
        <div className="flex gap-8">
          <div className="py-3">
            <img src={logo} className="w-5" alt="Logo" />
          </div>
          <ul class="relative m-0 flex h-full grow items-center gap-6 self-end p-0">
            <li class="relative flex h-full items-center text-sm ">
              <a
                class="relative whitespace-nowrap hover:text-[#1a1a1a] flex items-center text-base leading-[22px] cursor-pointer text-[#0000008c]"
                href="#"
              >
                Explore
              </a>
            </li>
            <li class="relative flex h-full items-center text-sm nav-li-after border-b-[#1a1a1a] border-b-2">
              <a
                class="relative whitespace-nowrap flex items-center text-base leading-[22px] cursor-pointer hover:text-[#1a1a1a] font-medium text-[#1a1a1a]"
                href="#"
              >
                Problems
              </a>
            </li>
            <li class="relative flex h-full items-center text-sm ">
              <a
                class="relative whitespace-nowrap hover:text-[#1a1a1a] flex items-center text-base leading-[22px] cursor-pointer text-[#0000008c]"
                href="#"
              >
                Contest
              </a>
            </li>
            <li class="relative flex h-full items-center text-sm ">
              <a
                class="relative whitespace-nowrap flex items-center text-base leading-[22px] cursor-pointer hover:text-[#1a1a1a] text-[#0000008c]"
                href="#"
              >
                Discuss
              </a>
            </li>
            <li class="relative flex h-full items-center text-sm ">
              <div class="relative whitespace-nowrap hover:text-[#1a1a1a] flex items-center text-base leading-[22px] cursor-pointer text-[#0000008c]">
                <span class="flex items-center focus:outline-none">
                  <button
                    class="contents"
                    id="headlessui-menu-button-:r0:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    Interview{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="ml-1 h-[14px] w-[14px]"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
              </div>
            </li>
            <li class="relative flex h-full items-center text-sm ">
              <div class="relative whitespace-nowrap flex items-center text-base leading-[22px] cursor-pointer hover:text-[#1a1a1a] text-[#0000008c]">
                <span class="flex items-center focus:outline-none !text-brand-orange border-brand-orange">
                  <button
                    class="contents"
                    id="headlessui-menu-button-:r1:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    Store{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="ml-1 h-[14px] w-[14px]"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <img src={avatar} alt="User" className="w-8 h-8 rounded-full my-auto" />
      </div>
    </div>
  );
};

export default ProblemSetAppbar;
