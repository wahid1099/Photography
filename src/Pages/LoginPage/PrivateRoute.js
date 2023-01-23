import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navigate,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Spinner } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
const PrivateRouter = ({ children }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const { user, isLoading } = UseAuth();
  if (isLoading) {
    return <Spinner animation="border" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
