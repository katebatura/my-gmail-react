import { Navigate, Outlet, useLocation } from "react-router-dom";
import React from "react";

export default function ProtectedRoute({
  isAllowed,
  redirectPath = "/login",
  children = null,
}) {
  const location = useLocation();

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children || <Outlet />;
}
