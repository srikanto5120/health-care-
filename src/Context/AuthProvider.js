import React from "react";
import { createContext } from "react";
import LoadData from "../Hooks/LoadData";

import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const services = LoadData();
  const data = { allContext, services };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
