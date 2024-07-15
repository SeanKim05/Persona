/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import NavBar from "@/components/NavBar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className=" bg-black text-white">
      {isNavOpen ? (
        <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      ) : (
        <button
          onClick={toggleNav}
          className="p-[16px] text-white fixed top-0 left-0"
        >
          <FaBars size={24} />
        </button>
      )}
      <div
        style={{ fontFamily: "mj" }}
        className={`flex flex-col items-center justify-center flex-grow transition-all duration-300 ${
          isNavOpen ? "ml-[300px]" : "ml-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
