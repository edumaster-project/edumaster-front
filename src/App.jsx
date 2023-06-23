import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Landpage from "./pages/Landpage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

// CALL IT ONCE IN YOUR APP

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
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
