import React from "react";
import { useAuth } from "./auth-provider";

export default function Login() {
  const { signin } = useAuth();

  return (
    <>
      <h2>Login (Public)</h2>

      <button type="button" onClick={signin}>
        Log In
      </button>
    </>
  );
}
