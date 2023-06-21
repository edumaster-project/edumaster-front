import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Landpage from "./pages/Landpage";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/sign-up" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
