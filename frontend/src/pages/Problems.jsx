import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Split from "react-split";
import ProblemAppbar from "../components/ProblemAppbar";
import ProblemQuestion from "../components/ProblemQuestion";
import Loader from "../components/Loader";
import CodeEditor from "../components/CodeEditor";
import TestInterface from "../components/TestInterface";
import "../styles/splitter.css";

const Problems = () => {
  //   const [problem, setProblem] = useState({
  //     pNo: 1,
  //     name: "Two Sum",
  //     description:
  //       "Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.<br /><br />You may assume that each input would have <b><em>exactly</em> one solution</b> you may not use the same element twice.<br /><br />You can return the answer in any order. ",
  //     level: "Easy",
  //     examples: [
  //       {
  //         input: { nums: "[2, 7, 11, 15]", target: "9" },
  //         output: [0, 1],
  //         explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
  //       },
  //       {
  //         input: { nums: "[3,2,4]", target: "6" },
  //         output: [1, 2],
  //       },
  //       {
  //         input: { nums: "[3,3]", target: "6" },
  //         output: [0, 1],
  //       },
  //     ],
  //     constraints: [
  //       "<code>2 <= nums.length <= 104</code>",
  //       "<code>-109 <= nums[i] <= 109</code>",
  //       "<code>-109 <= target <= 109</code>",
  //       "<strong>Only one valid answer exists.</strong>",
  //     ],
  //     snippet: `
  // /**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {

  // };
  // `,
  //     driverCode: `
  // const out1 = twoSum([2,7,11,15], 9);
  // const out2 = twoSum([3,2,4], 6);
  // const out3 = twoSum([3,3], 6);
  // console.log(JSON.stringify([out1, out2, out3]));
  // `,
  //     tags: ["Array", "Hash Table"],
  //   });

  const [problem, setProblem] = useState();

  const [output, setOutput] = useState("");

  const [switchTest, setSwitchTest] = useState(true);

  const { problemId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/problems/" + problemId)
      .then((response) => {
        const res = response.data.problem;
        // res.examples.input = JSON.parse(res.examples.input);
        console.log(res.examples.input);
        const parseInputs = () => {
          const parsedExamples = res.examples.map((example) => {
            const parsedInput = JSON.parse(example.input);
            // const parsedOutput = JSON.parse(example.output);
            return { ...example, input: parsedInput };
          });
          return { ...res, examples: parsedExamples };
        };
        const updatedProblem = parseInputs();
        setProblem(updatedProblem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-dvh w-full bg-[#f0f0f0] flex flex-col">
      <ProblemAppbar></ProblemAppbar>
      {problem ? (
        <div className="grow mx-2.5 mb-2.5">
          <Split
            className="flex h-full w-full"
            sizes={[48, 52]}
            direction="horizontal"
          >
            <div>
              <ProblemQuestion problem={problem}></ProblemQuestion>
            </div>
            <Split
              sizes={[50, 50]}
              direction="vertical"
              className="duration-0 h-[92vh]"
            >
              <CodeEditor
                snippet={problem.snippet}
                output={output}
                setOutput={setOutput}
                setSwitchTest={setSwitchTest}
                driverCode={problem.driverCode}
              ></CodeEditor>
              <TestInterface
                testCases={problem.examples}
                switchTest={switchTest}
                setSwitchTest={setSwitchTest}
                output={output}
              ></TestInterface>
            </Split>
          </Split>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default Problems;
