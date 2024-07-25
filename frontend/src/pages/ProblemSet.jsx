import React, { useEffect, useState } from "react";
import axios from "axios";
import ProblemSetAppbar from "../components/ProblemSetAppbar";
import Tag from "../components/Tag";
import "../styles/problemset.css";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const ProblemSet = () => {
  const [tags, setTags] = useState();
  const [problems, setProblems] = useState();

  const navigate = useNavigate();

  const [problemSearchTerm, setProblemSearchTerm] = useState("");
  const filteredProblems = problems
    ? problems.filter((item) =>
        item.name.toLowerCase().includes(problemSearchTerm.toLowerCase())
      )
    : null;
  const handleProblemSearchChange = (event) => {
    setProblemSearchTerm(event.target.value);
  };

  const [tagSearchTerm, setTagSearchTerm] = useState("");
  const filteredTags = tags
    ? tags.filter((item) =>
        item.tagName.toLowerCase().includes(tagSearchTerm.toLowerCase())
      )
    : null;
  const handleTagSearchChange = (event) => {
    setTagSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/problems/tags")
      .then((response) => {
        setTags(response.data.tags);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/api/v1/problems/problemset")
      .then((response) => {
        setProblems(response.data.problems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-dvh relative">
      <div className="sticky top-0 right-0 left-0 bg-white z-20">
        <ProblemSetAppbar></ProblemSetAppbar>
      </div>
      <div className=" flex justify-center">
        <div className="w-full max-w-screen-lg pl-2 grid grid-cols-4 gap-6 mt-4">
          {/* Tags */}
          <div
            className={`col-span-1 order-last rounded-xl p-3 shadow-down-01 h-fit`}
          >
            <div>
              <div className="font-semibold text-sm text-gray-800">
                All Tags
              </div>
              <SearchBar
                onChange={handleTagSearchChange}
                placeholder={"Search for a tag..."}
              />
            </div>
            <div className="flex flex-wrap relative min-h-32">
              {filteredTags ? (
                filteredTags.map((item) => {
                  return <Tag tag={item}></Tag>;
                })
              ) : (
                <Loader></Loader>
              )}
            </div>
          </div>
          {/* Problems List */}
          <div className="col-span-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-black px-3 py-[9px] rounded-full w-fit flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="white"
                  class="mr-2 hidden h-[18px] w-[18px] lg:block text-label-r dark:text-dark-label-r"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 10v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-2 2zM6 10v9h12v-9H6zM4 6v2h16V6H4zm6 7.5a1 1 0 110-2h4a1 1 0 110 2h-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div className="text-white">All Problems</div>
              </div>
              <SearchBar
                variant={"big"}
                onChange={handleProblemSearchChange}
                placeholder={"Search for a problem..."}
              />
            </div>
            <table className="w-full text-sm relative">
              <tr className="text-gray-400 font-normal cursor-pointer border-b">
                <td className="hover:text-black pl-2 py-3">P.No.</td>
                <td className="hover:text-black">Title</td>
                <td className="hover:text-black">Difficulty</td>
                <td className="hover:text-black">Status</td>
              </tr>
              {filteredProblems ? (
                filteredProblems.map((p, index) => {
                  return (
                    <tr
                      onClick={() => {
                        navigate(`/problems/${p._id}`);
                      }}
                      className={`text-black hover:text-blue-500 cursor-pointer ${
                        index % 2 != 0 ? "bg-[#F7F8FA]" : "bg-white"
                      }`}
                    >
                      <td className="pl-2 py-3 text-inherit">{p.pNo}.</td>
                      <td className="text-inherit">{p.name}</td>
                      <td
                        className={`${
                          p.level == "Easy"
                            ? "text-[#00af9b]"
                            : p.level == "Medium"
                            ? "text-[#ffb800]"
                            : "text-[#ff2d55]"
                        }`}
                      >
                        {p.level}
                      </td>
                      <td className="">-</td>
                    </tr>
                  );
                })
              ) : (
                <Loader></Loader>
              )}
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProblemSet;
