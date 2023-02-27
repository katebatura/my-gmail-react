import React from "react";
import { useAuth } from "./auth-provider";

export default function SignUp() {
  const { signup } = useAuth();

  return (
    <>
      <h2>Sign up (Public)</h2>

      <button type="button" onClick={signup}>
        Sign Up
      </button>
    </>
  );
}
