import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import AdminBookings from "./pages/AdminBookings";
import Home from "./pages/Home";
import ValidateBooking from "./pages/ValidateBooking";
import AIDemo from "./pages/AIDemo";
import Login from "./pages/Login";

import AppHeader from "./components/Layout/AppHeader";
import AppFooter from "./components/Layout/AppFooter";

const DEMO_USERS = {
  ADMIN: {
    email: "admin@courts.com",
    role: "ADMIN",
  },
  STAFF: {
    email: "staff@courts.com",
    role: "STAFF",
  },
};

function AppShell({ me, setMe, authLoading }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleGlobalLogout() {
    localStorage.removeItem("demoRole");
    setMe(null);
    navigate("/login", { replace: true });
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-900">
      <AppHeader
        me={me}
        pathname={location.pathname}
        authLoading={authLoading}
        onLogout={handleGlobalLogout}
      />

      <div className="flex min-h-[calc(100vh-73px)] flex-col">
        <div className="flex-1">
          <Routes>
            <Route
              path="/login"
              element={<Login onAuthChange={() => {}} me={me} />}
            />

            <Route path="/" element={<Home />} />

            <Route
              path="/validate"
              element={<ValidateBooking onAuthChange={() => {}} />}
            />

            <Route
              path="/admin/bookings"
              element={
                me?.role === "ADMIN" ? (
                  <AdminBookings onAuthChange={() => {}} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/ai-demo"
              element={
                me?.role === "ADMIN" ? (
                  <AIDemo />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </div>

        <AppFooter />
      </div>
    </div>
  );
}

export default function App() {
  const [me, setMe] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const demoRole = localStorage.getItem("demoRole");

    if (demoRole && DEMO_USERS[demoRole]) {
      setMe(DEMO_USERS[demoRole]);
    } else {
      setMe(null);
    }

    setAuthLoading(false);
  }, []);

  return (
    <AppShell
      me={me}
      setMe={setMe}
      authLoading={authLoading}
      setAuthLoading={setAuthLoading}
    />
  );
}