import React from "react";
import logo from "../assets/logo.png";
import HoverButton from "./HoverButton";

const ProblemAppbar = () => {
  return (
    <div className="px-5 py-2">
      <div className="flex justify-between">
        <div className="flex gap-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <img className="w-4" src={logo}></img>
          </div>
          <div className="w-[1.5px] h-5 bg-slate-200 rounded-md"></div>
          <div>
            <HoverButton>
              <div className="flex gap-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="indent"
                  className="svg-inline--fa fa-indent w-3.5 mx-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="rgb(107,114,128)"
                    d="M0 64C0 77.3 10.7 88 24 88H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24C10.7 40 0 50.7 0 64zM192 192c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H216c-13.3 0-24 10.7-24 24zm24 104c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H216zM0 448c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24zM121 268.4c7.8-6.4 7.8-18.3 0-24.7L26.2 165.6C15.7 157 0 164.4 0 177.9V334.1c0 13.5 15.7 20.9 26.2 12.4L121 268.4z"
                  ></path>
                </svg>
                <div className="font-medium text-sm">Problem List</div>
                <div>{/* <img></img> */}</div>
              </div>
            </HoverButton>
            <HoverButton>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-left"
                class="svg-inline--fa fa-chevron-left w-2.5 text-gray-500 my-0.5 mx-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"
                ></path>
              </svg>
            </HoverButton>
            <HoverButton>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                class="svg-inline--fa fa-chevron-right w-2.5 text-gray-500 my-0.5 mx-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
                ></path>
              </svg>
            </HoverButton>
            <HoverButton>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shuffle"
                class="svg-inline--fa fa-shuffle w-4 text-gray-500 my-0.5 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M425 31l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H352c-12.6 0-24.4 5.9-32 16l-46 61.3-30-40 37.6-50.1C298.2 117 324.3 104 352 104h78.1L391 65c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM204 322.7l-37.6 50.1C149.8 395 123.7 408 96 408H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H96c12.6 0 24.4-5.9 32-16l46-61.3 30 40zM391 287c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H352c-27.7 0-53.8-13-70.4-35.2L128 168c-7.6-10.1-19.4-16-32-16H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H96c27.7 0 53.8 13 70.4 35.2L320 344c7.6 10.1 19.4 16 32 16h78.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9z"
                ></path>
              </svg>
            </HoverButton>
          </div>
        </div>
        <button className="bg-[#e7e7e7d0] px-2.5 rounded-lg text-gray-500 hover:bg-[#e7e7e7cd] duration-300">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="note-sticky"
            class="w-3.5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z"
            ></path>
          </svg>
        </button>
        <div className="flex gap-2 text-sm">
          <HoverButton textHover>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              className="w-3.5 m-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M48 80V240h96V80H48zM0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V240c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM304 272V432h96V272H304zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V272zM144 368H48v64h96V368zM48 320h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48zM304 80v64h96V80H304zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80z"
              ></path>
            </svg>
          </HoverButton>
          <HoverButton textHover>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="gear"
              class="w-4 m-0.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M256 0c17 0 33.6 1.7 49.8 4.8c7.9 1.5 21.8 6.1 29.4 20.1c2 3.7 3.6 7.6 4.6 11.8l9.3 38.5C350.5 81 360.3 86.7 366 85l38-11.2c4-1.2 8.1-1.8 12.2-1.9c16.1-.5 27 9.4 32.3 15.4c22.1 25.1 39.1 54.6 49.9 86.3c2.6 7.6 5.6 21.8-2.7 35.4c-2.2 3.6-4.9 7-8 10L459 246.3c-4.2 4-4.2 15.5 0 19.5l28.7 27.3c3.1 3 5.8 6.4 8 10c8.2 13.6 5.2 27.8 2.7 35.4c-10.8 31.7-27.8 61.1-49.9 86.3c-5.3 6-16.3 15.9-32.3 15.4c-4.1-.1-8.2-.8-12.2-1.9L366 427c-5.7-1.7-15.5 4-16.9 9.8l-9.3 38.5c-1 4.2-2.6 8.2-4.6 11.8c-7.7 14-21.6 18.5-29.4 20.1C289.6 510.3 273 512 256 512s-33.6-1.7-49.8-4.8c-7.9-1.5-21.8-6.1-29.4-20.1c-2-3.7-3.6-7.6-4.6-11.8l-9.3-38.5c-1.4-5.8-11.2-11.5-16.9-9.8l-38 11.2c-4 1.2-8.1 1.8-12.2 1.9c-16.1 .5-27-9.4-32.3-15.4c-22-25.1-39.1-54.6-49.9-86.3c-2.6-7.6-5.6-21.8 2.7-35.4c2.2-3.6 4.9-7 8-10L53 265.7c4.2-4 4.2-15.5 0-19.5L24.2 218.9c-3.1-3-5.8-6.4-8-10C8 195.3 11 181.1 13.6 173.6c10.8-31.7 27.8-61.1 49.9-86.3c5.3-6 16.3-15.9 32.3-15.4c4.1 .1 8.2 .8 12.2 1.9L146 85c5.7 1.7 15.5-4 16.9-9.8l9.3-38.5c1-4.2 2.6-8.2 4.6-11.8c7.7-14 21.6-18.5 29.4-20.1C222.4 1.7 239 0 256 0zM218.1 51.4l-8.5 35.1c-7.8 32.3-45.3 53.9-77.2 44.6L97.9 120.9c-16.5 19.3-29.5 41.7-38 65.7l26.2 24.9c24 22.8 24 66.2 0 89L59.9 325.4c8.5 24 21.5 46.4 38 65.7l34.6-10.2c31.8-9.4 69.4 12.3 77.2 44.6l8.5 35.1c24.6 4.5 51.3 4.5 75.9 0l8.5-35.1c7.8-32.3 45.3-53.9 77.2-44.6l34.6 10.2c16.5-19.3 29.5-41.7 38-65.7l-26.2-24.9c-24-22.8-24-66.2 0-89l26.2-24.9c-8.5-24-21.5-46.4-38-65.7l-34.6 10.2c-31.8 9.4-69.4-12.3-77.2-44.6l-8.5-35.1c-24.6-4.5-51.3-4.5-75.9 0zM208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"
              ></path>
            </svg>
          </HoverButton>
          <div className="flex gap-3 justify-center items-center text-gray-500">
            <span className="hover:text-black cursor-pointer">Register</span> or
            <div className="hover:text-black cursor-pointer">Sign in</div>
          </div>
          <button className="bg-[#f2e7d6] mx-2 px-4 rounded-lg text-[#ffa116] font-semibold my-0.5 hover:bg-[#f3e0c4] duration-300">
            Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemAppbar;
