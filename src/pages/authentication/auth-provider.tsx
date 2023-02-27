import React, { Context, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface UserInterface {
  id: string;
  name: string;
  permissions: string[];
  roles: string[];
}

export interface AuthContextInterface {
  user: UserInterface;
  signin: any;
  signup: any;
  signout: any;
  sendPasswordResetEmail?: any;
  confirmPasswordReset?: any;
}

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: "1",
          name: "robin",
          permissions: [],
          roles: ["admin"],
        }),
      250
    );
  });

export const AuthContext: Context<AuthContextInterface> =
  React.createContext(null);

export function useAuth(): AuthContextInterface {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = React.useState(null);

  const signin = async () => {
    const newUser = await fakeAuth();

    setUser(newUser);

    const origin = location.state?.from?.pathname || "/inbox";
    navigate(origin);
  };

  const signout = () => {
    setUser(null);
  };

  const signup = () => signin();

  const value: AuthContextInterface = useMemo(
    () => ({
      user,
      signin,
      signup,
      signout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
