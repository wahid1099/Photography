import React, { useContext } from "react";
import { AuthContext } from "../Context/Authprovider";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
