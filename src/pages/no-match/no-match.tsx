import React from "react";
import { NavLink } from "react-router-dom";

export default function NoMatch() {
  return (
    <>
      <div>Page 404 </div>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
    </>
  );
}
