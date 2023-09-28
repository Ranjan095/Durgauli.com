/** @format */
"use client";
import AddWorkerModal from "@/components/AddWorkerModal/AddWorkerModal";
import Modal from "@/components/Modal/Modal";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Heart,
  Loader2,
  Loader2Icon,
  Plus,
} from "lucide-react";
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
      <AddWorkerModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Dashbord;
