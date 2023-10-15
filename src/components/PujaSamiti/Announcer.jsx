/** @format */

import { Phone } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const Announcer = () => {
  let { workers, isLoading, isError } = useSelector(
    (store) => store.workerReducer
  );

  return (
    <div className="mt-2 p-1">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl lg:leading-tight">
        उदघोषक
        </h2>
        {/* <p className="mx-auto max-w-2xl text-gray-600 md:text-xl">
          Welcome to every one
        </p> */}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {workers
          .filter((ele) => ele.category === "उदघोषक")
          .map((ele, i) => (
            <div
              key={i}
              className="flex justify-center text-center items-center"
            >
              {" "}
              <div className="w-[150px] md:w-[300px] rounded-md border">
                <div className="flex justify-center">
                  {" "}
                  <img
                    src={
                      ele.image
                        ? ele.image
                        : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                    }
                    alt={ele.name}
                    className={` h-[150px] md:h-[300px] w-full rounded-md object-cover `}
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{ele.name}</h1>
                  <h6 className="mt-1 font-normal text-gray-500">
                  {ele.category}
                </h6>
                  <h6 className="font-semibold text-gray-500">
                    {ele.post}
                  </h6>
                  {ele.mobile && (
                    <div
                      className={`inline-flex justify-center items-center text-gray-500 text-[15px]`}
                    >
                      <Phone className="mr-2" size={16} /> {ele.mobile}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Announcer;
