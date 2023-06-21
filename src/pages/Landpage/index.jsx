import { useState } from "react";
import logo from "../../assets/logo.svg";

export default function Landpage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-700 w-screen h-screen font-custom">
      <header className="px-20 w-full h-20 flex items-center justify-between text-white absolute">
        <h2 className="text-white text-3xl font-bold">EduMaster</h2>
        <nav>
          <ul className="flex gap-12 text-2xl font-semibol">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="/sign-up">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex justify-center] w-full h-full">
        <aside className="w-2/5 h-full flex px-20 justify-center items-center flex-col gap-12">
          <h1 className="text-7xl font-bold text-white">
            School
            <br />
            <span className="ml-24 font-semibold  text-zinc-400">Manager</span>
          </h1>
          <p className="text-xl px-39 text-white">
            Help every business user understand,explore, use time data <br></br>{" "}
            and improve your business
          </p>
          <button class=" w-60 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            REGISTER NOW
          </button>
          {/* <div className="w-full"></div> */}
        </aside>
        <aside className="w-2/5 h-full flex justify-center items-center">
          <img src={logo} />
        </aside>
      </div>
    </div>
  );
}
