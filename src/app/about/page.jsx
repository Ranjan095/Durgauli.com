/** @format */
"use client";
import Advisory from "@/components/PujaSamiti/Advisory";
import Announcer from "@/components/PujaSamiti/Announcer";
import Auditor from "@/components/PujaSamiti/Auditor";
import BhandraDepartment from "@/components/PujaSamiti/BhandraDepartment";
import DefenceDepartment from "@/components/PujaSamiti/DefenceDepartment";
import EntertainmentDepartment from "@/components/PujaSamiti/EntertainmentDepartment";
import Executive from "@/components/PujaSamiti/Executive";
import FinanceDepartment from "@/components/PujaSamiti/FinanceDepartment";
import InformationDepartment from "@/components/PujaSamiti/InformationDepartment";
import KirtanDepartment from "@/components/PujaSamiti/KirtanDepartment";
import MarketDepartment from "@/components/PujaSamiti/MarketDepartment";
import PrasadDepartment from "@/components/PujaSamiti/PrasadDepartment";
import PujaDepartment from "@/components/PujaSamiti/PujaDepartment";
import WelcomeDepartment from "@/components/PujaSamiti/WelcomeDepartment";
import {
  GET_WORKER_ERROR,
  GET_WORKER_REQUEST,
  GET_WORKER_SUCCESS,
} from "@/redux/workerReducer/workerType";
import axios from "axios";
import { ArrowRight, Loader, Loader2, Phone, PhoneCall } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function About() {
  let { workers, isLoading, isError } = useSelector(
    (store) => store.workerReducer
  );
  // console.log(workers, isLoading, isError);

  let currentYear = new Date().getFullYear();
  // console.log(typeof currentYear)

  let dispatch = useDispatch();

  let getData = () => {
    dispatch({ type: GET_WORKER_REQUEST });
    axios
      .get("/api/workers")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_WORKER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_WORKER_ERROR });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center text-center h-screen">
      <Loader className="motion-safe:animate-spin text-gray-500 " size={100} />
    </div>
  ) : (
    <div>
      <div className="my-2 lg:my-4  p-2 lg:p-4 bg-red-200 rounded-lg">
        <p className="text-center text-2xl font-bold ">
          श्री-श्री 108 दुर्गा पूजा समिति (दुर्गौली, जिला-मधुबनी){" "}
        </p>
        <p className="text-center text-2xl font-semibold text-gray-500 ">
          स्थापित - 1975 ईo{" "}
        </p>
        <p className="text-center text-2xl font-semibold text-gray-500 ">
          {+currentYear - 1974} सम वार्षिक समारोह - {+currentYear}
        </p>
      </div>
      <Executive />
      <PujaDepartment />
      <FinanceDepartment />
      <MarketDepartment />
      <WelcomeDepartment />
      <KirtanDepartment />
      <PrasadDepartment />
      <BhandraDepartment />
      <DefenceDepartment />
      <EntertainmentDepartment />
      <Auditor />
      <InformationDepartment />
      <Announcer />
      <Advisory />
    </div>
  );
}
