import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Landpage from "./pages/Landpage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import useToken from "./hooks/useToken";
import Profile from "./pages/Dashboard/Profile";
import MainBoard from "./pages/Dashboard/Mainboard";
import Help from "./pages/Dashboard/Help";

export default function App() {
  injectStyle();
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <VerifyCredentialToken>
                  <Dashboard />
                </VerifyCredentialToken>
              }
            >
              <Route path="profile" element={<Profile />} />
              <Route path="main" element={<MainBoard />} />
              <Route path="help" element={<Help />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

function VerifyCredentialToken({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }
  return <>{children}</>;
}
