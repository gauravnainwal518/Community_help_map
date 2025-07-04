import React from "react";

const Loader = ({ size = "w-8 h-8", color = "border-blue-500" }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${size} ${color}`}
      ></div>
    </div>
  );
};

export default Loader;
