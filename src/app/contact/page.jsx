/** @format */

"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  ArrowUpRight,
  ArrowUpRightFromCircle,
} from "lucide-react";
import Image from "next/image";
import mandir from "../../../public/images/mandir.jpg";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let developer = [
  {
    name: "Ranjan Yadav",
    image: "https://avatars.githubusercontent.com/u/113471389?v=4",
    position: "Full stack developer",
    portfolio: "https://ranjan095.github.io/",
    position: "Full Stack Developer",
    skills: [
      "Javascript",
      "React",
      "Next.js",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "tailwindcss",
      "MUI",
    ],
    description:
      "If you're seeking a MERN Stack developer who prioritises user-friendly apps and top-notch code, I am enthusiastic about the opportunity to Contribute to your team.",
  },
];

let obj = {
  fName: "",
  lName: "",
  mobile: "",
  message: "",
};

export default function ContactPage() {
  let [loading, setLoading] = useState(false);
  let [input, setInput] = useState(obj);
  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/feedback", input)
      .then((res) => {
        setLoading(false);
        // console.log(res.data);

        setInput(obj);
        toast.success(
          `Thanks ${input.fName} Your feedback has been recorded !`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      })
      .catch((err) => {
        setInput(false);
        console.log(err);
        toast.error(`Oops Somthing went wrong!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    // console.log(input);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  अपन सलाह जरूर दिय !
                </p>
                <p className="mt-4 text-lg text-red-600">
                  श्री-श्री 108 दुर्गा पूजा समिति (दुर्गौली, जिला-मधुबनी)
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        First Name
                      </label>
                      <input
                        required
                        value={input.fName}
                        onChange={(e) =>
                          setInput({ ...input, fName: e.target.value })
                        }
                        className="flex h-10 w-full rounded-md border border-gray-300  px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Last Name
                      </label>
                      <input
                        required
                        value={input.lName}
                        onChange={(e) =>
                          setInput({ ...input, lName: e.target.value })
                        }
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  {/* <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div> */}
                  <div className="grid w-full  items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Phone number
                    </label>
                    <input
                      required
                      value={input.mobile}
                      onChange={(e) =>
                        setInput({ ...input, mobile: e.target.value })
                      }
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Message
                    </label>
                    <textarea
                      required
                      value={input.message}
                      onChange={(e) =>
                        setInput({ ...input, message: e.target.value })
                      }
                      className="flex row-span-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      rows={4}
                    />
                  </div>
                  <button
                    disabled={loading ? true : false}
                    type="submit"
                    className={` inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80`}
                  >
                    {!loading ? "Send Message" : "Loading..."}
                  </button>
                </form>
              </div>
            </div>
            <Image
              alt="Mandir"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src={mandir}
              priority={true}
            />
          </div>
        </div>
      </div>

      {/*** Developer Team ***/}
      <div className="mt-2 flex flex-col justify-center items-center">
        <div className="text-center mb-3">
          <div className="">
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              Meet our Developer
            </p>
          </div>

          {/* developer */}
          <div>
            {developer.map((dev, i) => (
              <div
                key={i}
                className="flex max-w-3xl flex-col border items-center rounded-md  md:flex-row my-3 p-2"
              >
                <div className="h-full w-full flex justify-center">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-[200px] md:w-full rounded-md object-cover"
                  />
                </div>
                <div>
                  <div>
                    <Link
                      className="border-b-2 border-gray-500 rounded-lg"
                      href={dev.portfolio}
                      target="blanck"
                    >
                      {" "}
                      <h1 className=" mt-4 md:mt-0 inline-flex items-center text-lg font-semibold hover:text-gray-400">
                        {dev.name} <ArrowUpRight className="ml-2 h-4 w-4" />
                      </h1>
                    </Link>

                    <p className="mt-3 text-sm text-gray-600">
                      {dev.description}
                    </p>
                    <div className="mt-4">
                      {dev.skills.map((skill, i) => {
                        return (
                          <span
                            key={Math.random()}
                            className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                          >
                            {`#${skill}`}
                          </span>
                        );
                      })}
                    </div>
                    <div className="mt-3 flex items-center space-x-2">
                      <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-700">
                        {dev.position}
                      </p>
                      <Link href={dev.portfolio} target="blanck">
                        <button
                          type="button"
                          className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <ArrowUpRightFromCircle className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
