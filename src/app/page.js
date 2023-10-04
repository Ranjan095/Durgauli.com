/** @format */

"use client";

import React from "react";

import Typewriter from "typewriter-effect";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mandir from "../../public/images/mandir.jpg";
import maaDurga from "../../public/images/maaDurga.jpg";
import calasYatra from "../../public/images/calasYatra.jpg";
import belnatti from "../../public/images/belnatti.jpg";
import Image from "next/image";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let arr = [
    { name: "MaaDurga", src: maaDurga },
    { name: "mandir", src: mandir },
    { name: "calasYatra", src: calasYatra },
    { name: "belnatti", src: belnatti },
  ];
  let currentYear = new Date().getFullYear();
  let a = +currentYear - 1974 + " सम वार्षिक समारोह -" + currentYear;

  let pujaPath = [
    { date: "15/10/2023", disc: "कलश स्थापन" },
    { date: "16/10/2023", disc: "रेमन्त पूजा" },
    { date: "20/10/2023", disc: "बिल्वा भिमंत्रण,गज पूजा" },
    { date: "21/10/2023", disc: "पत्रिका प्रवेश, निशा पूजा" },
    { date: "22/10/2023", disc: "महाष्टमीव्रत" },
    { date: "23/10/2023", disc: "महानवमी व्रत, हवन, त्रिशुलनी पूजा" },
    { date: "24/10/2023", disc: "अपराजिता पूजा,देवी विसर्जन, विजया दशमी" },
    { date: "25/10/2023", disc: "देवी जलप्रवाह, भसान" },
  ];
  let manoranjan = [
    { date: "18/10/2023", disc: "आल्ह उदल नाच, बहेड़ा धनुषा, नेपाल" },
    { date: "19/10/2023", disc: "आल्ह उदल नाच, बहेड़ा धनुषा, नेपाल" },
    { date: "20/10/2023", disc: "आल्ह उदल नाच, बहेड़ा धनुषा, नेपाल" },
    { date: "21/10/2023", disc: "निती जागरण झाँकी लाइव शो मधुबनी" },
    { date: "22/10/2023", disc: "निती जागरण झाँकी लाइव शो मधुबनी" },
    { date: "23/10/2023", disc: "निती जागरण झाँकी लाइव शो मधुबनी" },
  ];

  return (
    <div className="">
      {/* <h1 className=" text-3xl font-bold  bg-yellow-300 p-2 my-4 text-center">
        Work in progress...
      </h1> */}
      <div className=" text-center m-5 text-red-500 ">
        {/* <Typewriter
          options={{
            strings: [
              "सर्व मंगल मांगल्ये शिवे सर्वार्थ साधिके।",
              "शरण्ये त्र्यम्बके गौरी नारायणी नमोस्तुते।।",
              "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।",
              "नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नम:।",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: " font-semibold",
            cursorClassName: "cursor text-2xl text-red-700",
          }}
        /> */}
        <p className=" font-bold">
          ॐ सर्वमंगल मांगल्ये शिवे सर्वार्थसाधिके। शरण्ये त्रयम्बके गौरी नारायणी
          नमोस्तुते।।
        </p>
        <p className=" font-bold">
          या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै
          नमो नम:।।
        </p>
      </div>

      <div className="mx-auto mb-10 max-w-2xl text-center">
        {/* <h1 className=" text-3xl font-bold  bg-yellow-300 p-2 my-4">
          Work in progress...
        </h1> */}

        <h1 className="text-2xl md:text-3xl font-bold  my-2 md:my-4">
          श्री-श्री 108 दुर्गा पूजा समिति
        </h1>
        <h1 className=" text-2xl md:text-3xl font-bold   my-2 md:my-4">
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
            wrapperClassName: "text-2xl font-semibold text-red-500",
            cursorClassName: "cursor text-2xl text-red-700",
          }}
        />
      </div>
      {/*** slicer ***/}
      <div className="mb-10">
        <Slider {...settings}>
          {arr.map((ele, i) => {
            return (
              <div key={i} className="rounded-lg border border-solid">
                <Image
                  alt="Mandir"
                  className="max-h-[200px] md:max-h-[300px] lg:max-h-[350px] object-cover"
                  src={ele.src}
                  priority={true}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/*** Puja ***/}
      <h1 className=" md:text-2xl lg:text-3xl font-bold  bg-yellow-300 p-2  text-center">
        श्री दुर्गा पूजन, दुर्गा सप्तशती पाठ, अन्य पाठ एवं आरती मध्याहन 01 बजे
        एवं रात्रि 09:00 बजे ! प्रतिदिन भजन कार्य संध्याकाल 06 बजे सँ भजन
        संध्या, पाठ
      </h1>

      <div className="flex justify-center overflow-hidden border border-gray-200 md:rounded-lg mb-2">
        <table className=" min-w-full divide-y divide-gray-200 ">
          <thead className=" bg-red-400">
            <tr>
              <th className="px-4 py-3.5 text-sm font-bold ">दिनांक</th>
              <th className="px-12 py-3.5 text-sm font-bold ">पूजा</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {pujaPath.map((ele, i) => {
              return (
                <tr key={i} className="text-center ">
                  <td className="whitespace-nowrap px-2 py-2 md:px-4 md:py-4">
                    {ele.date}
                  </td>
                  <td className="px-1">{ele.disc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/*** sanskarti karykaram ***/}
      <div>
        <h1 className=" md:text-2xl lg:text-3xl font-bold text-red-500 p-2  text-center">
          सांस्कृतिक कार्यक्रम (मनोरंजन)
        </h1>
        <table className=" min-w-full divide-y divide-gray-200 ">
          <thead className=" bg-red-400">
            <tr>
              <th className="px-4 py-3.5 text-sm font-bold ">दिनांक</th>
              <th className="px-12 py-3.5 text-sm font-bold ">पूजा</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {manoranjan.map((ele, i) => {
              return (
                <tr key={i} className="text-center ">
                  <td className="whitespace-nowrap px-2 py-2 md:px-4 md:py-4">
                    {ele.date}
                  </td>
                  <td className="px-1">{ele.disc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
