/** @format */
"use client"
import { createContext } from "react";
import { useState } from "react";

export let RefreshContext = createContext();

const RefreshContextProvider = ({ children }) => {
  let [refresh, setRefresh] = useState(false);
  let refreshComponent = () => {
    setRefresh(!refresh);
  };

  return (
    <RefreshContext.Provider value={{ refresh ,refreshComponent}}>
      {children}
    </RefreshContext.Provider>
  );
};

export default RefreshContextProvider;
