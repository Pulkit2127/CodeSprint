import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-white flex justify-center items-center">
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-black ml-3"></div>
    </div>
  );
};

export default Loader;
