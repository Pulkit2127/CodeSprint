import React from "react";

const Tag = ({ tag }) => {
  return (
    <div className="flex gap-1 justify-center items-center my-2 mr-2 px-2 py-1 text-xs bg-[#000a200d] rounded-full cursor-pointer">
      <div className="text-[#3c3c4399] font-semibold hover:text-blue-500 ">
        {tag.tagName}
      </div>
      <div className=" text-white bg-[#ffa116] rounded-full px-2">{tag.no}</div>
    </div>
  );
};

export default Tag;
