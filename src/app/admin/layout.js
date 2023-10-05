/** @format */

import AdminNavBar from "@/components/Admin/AdminNavBar/AdminNavBar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavBar />
      {children}
    </div>
  );
};

export default AdminLayout;
