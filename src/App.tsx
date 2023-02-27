import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import "./App.scss";
import { useAuth } from "./pages/authentication/auth-provider";
import NoMatch from "./pages/no-match/no-match";
import ProtectedRoute from "./components/protected-route";
import Login from "./pages/authentication/login";
import SignUp from "./pages/authentication/sign-up";

function Navigation() {
  return (
    <nav>
      <NavLink to="/inbox">Inbox</NavLink>
      <NavLink to="/send">Send</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/test-permission">Permission</NavLink>
    </nav>
  );
}

// TODO Add Lazy loading
function Dashboard() {
  return <h2>Dashboard (Protected)</h2>;
}

function Permission() {
  return <h2>Permission (Protected + permissions)</h2>;
}

function App() {
  const { user } = useAuth();

  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="inbox" element={<Dashboard />} />
          <Route path="send" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
        </Route>
        <Route
          path="test-permission"
          element={
            <ProtectedRoute
              redirectPath="/inbox"
              isAllowed={!!user && user.permissions.includes("analyze")}
            >
              <Permission />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
