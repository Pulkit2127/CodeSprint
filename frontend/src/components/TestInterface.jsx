import React, { useEffect, useRef, useState } from "react";
import HoverButton from "./HoverButton";
import Divider from "./Divider";

const TestInterface = ({ testCases, switchTest, setSwitchTest, output }) => {
  const [testNo, setTestNo] = useState(1);
  const answerRef = useRef("true");

  useEffect(() => {
    console.log(output == "" ? "" : JSON.parse(output));
  }, [switchTest]);

  return (
    <div className="bg-white h-full rounded-lg border border-[#f0f0f0] hover:border-gray-3 duration-300 overflow-hidden">
      <div className="bg-[#fafafa] p-1 flex">
        <HoverButton
          onClick={() => {
            setSwitchTest(true);
          }}
          selected={switchTest}
        >
          <div className="flex gap-1 ml-1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="square-check"
              class="w-3 text-green-700"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              ></path>
            </svg>

            <div className="-my-0.5 mx-0.5">Testcase</div>
          </div>
        </HoverButton>
        <Divider />
        <HoverButton
          onClick={() => {
            setSwitchTest(false);
          }}
          selected={!switchTest}
        >
          <div className="flex gap-1 ml-1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="square-check"
              class="w-3 text-green-700"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              ></path>
            </svg>

            <div className="-my-0.5 mx-0.5">Test Results</div>
          </div>
        </HoverButton>
      </div>
      {switchTest ? (
        <div className="p-4">
          <div className="flex gap-2">
            {testCases.map((_, index) => {
              return (
                <button
                  onClick={() => {
                    setTestNo(index + 1);
                  }}
                  className={`rounded-md py-1 px-4 font-medium text-sm duration-200 ${
                    testNo == index + 1
                      ? "bg-[#f2f3f4] text-black"
                      : "hover:bg-[#e5e6e8] text-[#5c5c5c] hover:text-black"
                  }`}
                >
                  Case {index + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {Object.keys(testCases[testNo - 1].input).map((key, index) => {
              return (
                <div className="flex flex-col gap-2">
                  <div className="text-xs text-gray-500">{key} =</div>
                  <div className="bg-[#f2f3f4] py-2 px-4 rounded-lg">
                    {testCases[testNo - 1].input[key]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : output == "" ? (
        <div className="flex justify-center mt-5 text-xs text-gray-400">
          ~~~ Run the Code ~~~
        </div>
      ) : (
        <div className="p-4">
          <div
            className={`mb-2 font-semibold ${
              answerRef == "true" ? "text-green-500" : "text-red-500"
            }`}
          >
            {answerRef == "true" ? "Correct" : "Wrong"} Answer
          </div>
          <div className="flex gap-2">
            {JSON.parse(output).map((item, index) => {
              const ans =
                JSON.stringify(item) ===
                JSON.stringify(testCases[index].output);
              if (!ans) {
                answerRef.current = "false";
              }
              // console.log(
              //   item,
              //   testCases[index].output,
              //   JSON.stringify(item) === JSON.stringify(testCases[index].output)
              // );
              return (
                <button
                  onClick={() => {
                    setTestNo(index + 1);
                  }}
                  className={`rounded-md py-1 px-4 font-medium text-sm duration-200 flex gap-2 ${
                    testNo == index + 1
                      ? "bg-[#f2f3f4] text-black"
                      : "hover:bg-[#e5e6e8] text-[#5c5c5c] hover:text-black"
                  }`}
                >
                  <div
                    className={`w-1 h-1 rounded-full m-auto ${
                      ans ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  Case {index + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-5 flex flex-col gap-2">
            {Object.keys(testCases[testNo - 1].input).map((key, index) => {
              return (
                <div className="flex flex-col gap-1 bg-[#f2f3f4] py-2 px-4 rounded-lg">
                  <div className="text-xs text-gray-500">{key} =</div>
                  <div className="">{testCases[testNo - 1].input[key]}</div>
                </div>
              );
            })}
            <div className="flex gap-2">
              <div className="flex flex-col gap-1 w-full">
                <div className="text-xs text-gray-500 font-semibold">
                  Output
                </div>
                <div className="bg-[#f2f3f4] py-2 px-4 rounded-lg">
                  {JSON.stringify(JSON.parse(output)[testNo - 1])}
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="text-xs text-gray-500 font-semibold">
                  Expected
                </div>
                <div className="bg-[#f2f3f4] py-2 px-4 rounded-lg">
                  {JSON.stringify(testCases[testNo - 1].output)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestInterface;
