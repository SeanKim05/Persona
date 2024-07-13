// Home1.js
import { useState } from "react";
import NavBar from "@components/navBar";
import { FaBars } from "react-icons/fa";

export default function Home1() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex w-screen h-screen bg-black text-white">
      {isNavOpen ? (
        <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      ) : (
        <button
          onClick={toggleNav}
          className="p-[16px] text-white fixed top-0 left-0"
        >
          <FaBars />
        </button>
      )}
      <div
        className={`flex justify-center items-center flex-grow transition-all duration-300 ${
          isNavOpen ? "ml-[300px]" : "ml-0"
        }`}
      >
        Home1
      </div>
    </div>
  );
}
