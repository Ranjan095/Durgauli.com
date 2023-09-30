/** @format */

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const ArtiCard = ({ title, description }) => {
  let [isOpen, setIsOpen] = useState(false);
  // console.log(description);
  return (
    <div className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
      >
        <div>
          <span className="flex text-start text-lg font-semibold text-black ">
            {title}
          </span>
          <p className={`text-red-500 font-semibold ${isOpen && "hidden"}`}>
            {description[0]}...
          </p>
        </div>

        {isOpen ? (
          <ChevronDown className=" h-5 w-5 text-gray-500 animate-bounce" />
        ) : (
          <ChevronUp className=" h-5 w-5 text-gray-500 animate-bounce" />
        )}
      </button>
      <div className="px-2 md:px3 pb-5 sm:pb-4">
        {description?.map((ele, i) => (
          <p
            key={i}
            className={`text-red-500 font-semibold text-center py-1 ${
              i % 2 === 1 ? "mb-4" : "mb-0"
            } ${i % 2 === 1 ? "bg-gray-200" : "bg-gray-300"}  ${
              !isOpen ? "hidden" : "block"
            }`}
          >
            {ele}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ArtiCard;
