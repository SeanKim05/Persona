/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Cursor from "./Cursor";
import { useRecoilValue } from "recoil";
import { cursorHovered } from "@/data/atoms/layout";

export default function MainLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isCursorHovered = useRecoilValue(cursorHovered);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <Cursor isHovered={isCursorHovered} />
      {isNavOpen ? (
        <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      ) : (
        <button
          onClick={toggleNav}
          className=" p-[16px] text-white fixed top-0 left-0 z-50 cursor-none"
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
