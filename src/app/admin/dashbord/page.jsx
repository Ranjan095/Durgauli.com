/** @format */
"use client";
import Modal from "@/components/Modal/Modal";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import React, { useState } from "react";

const Dashbord = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen">
      <div className="flex flex-wrap justify-end p-3">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="rounded-lg bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add worker
        </button>
      </div>
      <div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="text-center">
            <p className="text-2xl font-semibold">Add Worker</p>
            <form className="mt-3">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                    ></input>
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Image URL{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white   px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="ImageURL"
                      id="imageURL"
                    ></input>
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Mobile No{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white   px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="Number"
                      placeholder="Mobile no"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center ">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Category{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <select className="flex h-10 w-full rounded-md border border-gray-300 gh-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value={""}>Select</option>
                      <option value={"कार्यकारणीक"}>कार्यकारणीक</option>
                      <option value={"पूजा विभाग"}>पूजा विभाग</option>
                      <option value={"वित्त विभाग"}>वित्त विभाग</option>
                      <option value={"बाजार व्यवस्था"}>बाजार व्यवस्था</option>
                      <option value={"स्वागत समिति"}>स्वागत समिति</option>
                      <option value={"कीर्त्तन विभाग"}>कीर्त्तन विभाग</option>
                      <option value={"प्रसाद विभाग"}>प्रसाद विभाग</option>
                      <option value={"भंडरा विभाग"}>भंडरा विभाग</option>
                      <option value={"सुरक्षा विभाग"}>सुरक्षा विभाग</option>
                      <option value={"मनोरंजन विभाग"}>मनोरंजन विभाग</option>
                      <option value={"अंकेक्षक विभाग"}>अंकेक्षक विभाग</option>
                      <option value={"सूचना विभाग"}>सूचना विभाग</option>
                      <option value={"उदघोषक"}>उदघोषक</option>
                      <option value={"परामर्शदायी सदस्यगण"}>
                        परामर्शदायी सदस्यगण
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Post{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <select className="flex h-10 w-full rounded-md border border-gray-300 gh-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value={""}>Select</option>
                      <option value={"सचिव"}>सचिव</option>
                      <option value={"सहायक सचिव"}>सहायक सचिव</option>
                      <option value={"अध्यक्ष"}>अध्यक्ष</option>
                      <option value={"उपाध्यक्ष"}>उपाध्यक्ष</option>
                      <option value={"सहायक पूजारी"}>सहायक पूजारी</option>
                      <option value={"सहायक कोषाध्यक्ष"}>
                        सहायक कोषाध्यक्ष
                      </option>
                      <option value={"कोषाध्यक्ष"}>कोषाध्यक्ष</option>
                      <option value={"सहायक सचिव"}>सहायक सचिव</option>
                      <option value={"सहायक"}>सहायक</option>
                      <option value={"पूजारी"}>पूजारी</option>
                      <option value={"उप महासचिव"}>उप महासचिव</option>
                      <option value={"महासचिव"}>महासचिव</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center bg-pink-500 justify-center rounded-md  px-3.5 py-2 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Worker <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Dashbord;
