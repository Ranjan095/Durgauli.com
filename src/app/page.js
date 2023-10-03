/** @format */

"use client";

import React from "react";

import Typewriter from "typewriter-effect";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mandir from "../../public/images/mandir.jpg";
import Image from "next/image";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  var settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  let arr = [1, 2, 3, 4, 5, 6];
  let currentYear = new Date().getFullYear();
  let a = +currentYear - 1974 + " सम वार्षिक समारोह -" + currentYear;

  return (
    <div className="">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className=" text-3xl font-bold  bg-yellow-300 p-2 my-4">Work in progress...</h1>
        <h1 className=" text-3xl font-bold  text-red-700 my-4">
          श्री-श्री 108 दुर्गा पूजा समिति
        </h1>
        <h1 className=" text-3xl font-bold  text-red-700 my-4">
          {"( दुर्गौली मधुबनी )"}
        </h1>
        <Typewriter
          options={{
            strings: [
              "स्थापित - 1975 ईo",
              +currentYear - 1974 + " सम वार्षिक समारोह -" + currentYear,
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "text-2xl font-semibold",
            cursorClassName: "cursor text-2xl text-red-700",
          }}
        />
      </div>
      <div className="m-8 hidden md:block">
        <Slider {...settings}>
          {arr.map((ele, i) => {
            return (
              <div className="rounded-lg border border-solid">
                <Image
                  alt="Mandir"
                  className=" max-h-full object-cover"
                  src={mandir}
                  priority={true}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="m-10  md:hidden">
        <Slider {...settings2}>
          {arr.map((ele, i) => {
            return (
              <div className="rounded-lg bg-red-400">
                <Image
                  alt="Mandir"
                  className=" max-h-full object-cover"
                  src={mandir}
                  priority={true}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
