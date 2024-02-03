import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user.user);
  if (currentUser === undefined) {
    return <Spinner />;
  }
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
