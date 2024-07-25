import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import HoverButton from "./HoverButton";
import axios from "axios";

const CodeEditor = ({ setSwitchTest, setOutput, snippet, driverCode }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(snippet);
  }, []);

  const runCode = async () => {
    try {
      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language: "javascript",
          version: "18.15.0",
          files: [
            {
              name: "main.js",
              content: `
              ${code}
              ${driverCode}
              `,
            },
          ],
        }
      );
      console.log(response.data.run.output);
      setOutput(response.data.run.output);
      setSwitchTest(false);
    } catch (error) {
      console.log("error----------------------------");
      //   setOutput(
      //     JSON.stringify([
      //       `${error.message}`,
      //       `${error.message}`,
      //       `${error.message}`,
      //     ])
      //   );
      setSwitchTest(false);
    }
  };

  return (
    <div className="bg-white h-full rounded-lg border border-[#f0f0f0] hover:border-gray-3 duration-300 overflow-hidden">
      <div className="bg-[#fafafa] p-1 flex">
        <HoverButton>
          <div className="flex gap-1 ml-1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="code"
              class="w-4 text-green-600"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M399.1 1.1c-12.7-3.9-26.1 3.1-30 15.8l-144 464c-3.9 12.7 3.1 26.1 15.8 30s26.1-3.1 30-15.8l144-464c3.9-12.7-3.1-26.1-15.8-30zm71.4 118.5c-9.1 9.7-8.6 24.9 1.1 33.9L580.9 256 471.6 358.5c-9.7 9.1-10.2 24.3-1.1 33.9s24.3 10.2 33.9 1.1l128-120c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-13-7.6-17.5l-128-120c-9.7-9.1-24.9-8.6-33.9 1.1zm-301 0c-9.1-9.7-24.3-10.2-33.9-1.1l-128 120C2.7 243 0 249.4 0 256s2.7 13 7.6 17.5l128 120c9.7 9.1 24.9 8.6 33.9-1.1s8.6-24.9-1.1-33.9L59.1 256 168.4 153.5c9.7-9.1 10.2-24.3 1.1-33.9z"
              ></path>
            </svg>
            <div className="-my-0.5 mx-0.5 font-semibold text-black">Code</div>
          </div>
        </HoverButton>
      </div>
      <div className="flex justify-between border-b-[0.8px] ">
        <div>
          <div className="border rounded-md p-1 m-1 text-xs cursor-pointer hover:bg-[#e7e7e7] duration-300 w-fit text-gray-500">
            JavaScript
          </div>
        </div>
      </div>
      <div className="h-full ">
        <Editor
          className="mt-2 -ml-1"
          height="100%"
          language={"javascript"}
          value={snippet}
          theme="vs-light"
          onChange={(value, event) => {
            setCode(value);
          }}
          options={{
            fontSize: "13px",
          }}
        ></Editor>
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-white p-1 z-20">
        <div className="flex justify-between items-baseline">
          <div className="text-xs font-light text-gray-400 ml-2">Saved</div>
          <div className="flex gap-2">
            <button
              onClick={runCode}
              className="rounded-lg px-5 py-1.5 font-semibold bg-gray-100 text-sm hover:bg-gray-200"
            >
              Run
            </button>
            <button className="rounded-lg px-5 py-1.5 font-semibold bg-green-500 text-sm hover:bg-green-600 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
