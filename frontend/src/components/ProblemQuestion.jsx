import React, { useState } from "react";
import HoverButton from "./HoverButton";
import Divider from "./Divider";

const ProblemQuestion = ({ problem }) => {
  return (
    <div className="bg-white h-[92vh] rounded-lg border border-[#f0f0f0] hover:border-gray-3 duration-300 overflow-auto">
      <div className="bg-[#fafafa] sticky top-0 p-1 flex">
        <HoverButton>
          <div className="flex gap-1 ml-1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="memo"
              class="w-2.5 text-blue-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm120 64H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
              ></path>
            </svg>
            <div className="-my-0.5 font-semibold mx-0.5">Description</div>
          </div>
        </HoverButton>

        <Divider />

        <HoverButton>
          <div className="flex gap-1 ml-1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="book-open"
              class="w-4 text-orange-200"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M156 32C100.6 32 48.8 46.6 27.1 53.6C10.3 59 0 74.5 0 91.1V403.5c0 26.1 24 44.2 48 40.2c19.8-3.3 54.8-7.7 100-7.7c54 0 97.5 25.5 112.5 35.6c7.5 5 16.8 8.4 27 8.4c11.5 0 21.6-4.2 29.3-9.9C330.2 460.3 369.1 436 428 436c47.7 0 80.5 4 99 7.2c23.9 4.1 49-13.8 49-40.6V91.1c0-16.5-10.3-32.1-27.1-37.5C527.2 46.6 475.4 32 420 32c-36.8 0-71.8 6.4-97.4 12.7c-12.8 3.2-23.5 6.3-30.9 8.7c-1.3 .4-2.6 .8-3.7 1.2c-1.1-.4-2.4-.8-3.7-1.2c-7.5-2.4-18.1-5.5-30.9-8.7C227.8 38.4 192.8 32 156 32zM264 97.3V417.9C238 404.2 196.8 388 148 388c-42.9 0-77.4 3.7-100 7.1V97.3C70.3 90.6 112.4 80 156 80c31.6 0 62.6 5.6 85.9 11.3c8.6 2.1 16.1 4.2 22.1 6zm48 319.2V97.3c6-1.8 13.5-3.9 22.1-6C357.4 85.6 388.4 80 420 80c43.6 0 85.7 10.6 108 17.3V394.7c-21.7-3.3-54.9-6.7-100-6.7c-51.4 0-90.8 15-116 28.6z"
              ></path>
            </svg>
            <div className="-my-0.5 mx-0.5 text-gray-500">Editorial</div>
          </div>
        </HoverButton>

        <Divider />

        <HoverButton>
          <div className="flex gap-1 ml-1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="flask"
              class="w-3 text-blue-300"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"
              ></path>
            </svg>
            <div className="-my-0.5 mx-0.5 text-gray-500">Solutions</div>
          </div>
        </HoverButton>

        <Divider />

        <HoverButton>
          <div className="flex gap-1 ml-1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="clock-rotate-left"
              class="w-3.5 text-blue-300"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M48 106.7V56c0-13.3-10.7-24-24-24S0 42.7 0 56V168c0 13.3 10.7 24 24 24H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H80.7c37-57.8 101.7-96 175.3-96c114.9 0 208 93.1 208 208s-93.1 208-208 208c-42.5 0-81.9-12.7-114.7-34.5c-11-7.3-25.9-4.3-33.3 6.7s-4.3 25.9 6.7 33.3C155.2 496.4 203.8 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C170.3 0 94.4 42.1 48 106.7zM256 128c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
              ></path>
            </svg>
            <div className="-my-0.5 mx-0.5 text-gray-500">Submissions</div>
          </div>
        </HoverButton>
      </div>
      <div className="p-4">
        <div className="font-semibold text-2xl">
          {problem.pNo}. {problem.name}
        </div>
        <div className="bg-[#0000000f] text-[#1cb8b8] px-2 py-1 rounded-full text-xs w-fit mt-4">
          {problem.level}
        </div>
        <div
          className="mt-4 text-sm"
          dangerouslySetInnerHTML={{ __html: problem.description }}
        ></div>
        <div className="my-10">
          {problem.examples.map((ex, index) => {
            return (
              <div>
                <strong className="text-sm">Example {index + 1}:</strong>
                <pre className=" border-l-2 pl-4 my-3">
                  <div className="flex gap-2">
                    <strong>Input:</strong>
                    <p className="text-gray-500 font-extrathin">
                      {Object.keys(ex.input).map((key, index) => {
                        return (
                          <span>
                            <span hidden={index == 0}>, </span>
                            {key} = {ex.input[key]}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <strong>Output:</strong>
                    <p className="text-gray-500 font-thin">
                      {JSON.stringify(ex.output)}
                    </p>
                  </div>
                  {ex.explanation ? (
                    <div className="flex gap-2">
                      <strong>Explanation:</strong>
                      <p className="text-gray-500 font-thin">
                        {ex.explanation}
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </pre>
              </div>
            );
          })}
        </div>
        <div>
          <strong className="text-sm">Constraints:</strong>
          <ul className="list-disc text-sm">
            {problem.constraints.map((con) => {
              return (
                <li
                  className="my-3 ml-4"
                  dangerouslySetInnerHTML={{ __html: con }}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemQuestion;
