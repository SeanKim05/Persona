/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import NavBar from "@/components/NavBar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Cursor from "./Cursor";

export default function MainLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="w-full bg-black text-white">
      <Cursor isHovered={false} />
      {isNavOpen ? (
        <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      ) : (
        <button
          onClick={toggleNav}
          className=" p-[16px] text-white fixed top-0 left-0 z-50"
        >
          <FaBars size={24} />
        </button>
      )}
      <div
        style={{ fontFamily: "mj" }}
        className={`flex flex-col items-center justify-center flex-grow transition-all duration-700 ${
          isNavOpen ? "ml-[300px]" : "ml-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
