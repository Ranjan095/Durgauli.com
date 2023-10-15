/** @format */

import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center text-2xl font-bold">Hello Admin</h1>
      <h1 className="text-center text-2xl font-bold text-red-500 mb-2">Go to Dashbord and do your work!</h1>
      <h1 className="text-center text-2xl font-bold">Warning!</h1>
      <h1 className="text-center text-2xl font-bold text-red-500 bg-yellow-200">
        Editing data will make changes in the database.Confirm that you
        have the right data and permissions before proceeding.
      </h1>
    </div>
  );
};

export default Admin;
