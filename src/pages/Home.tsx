import { useState } from "react";
import NavBar from "@/components/NavBar";
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const imageSrc = new URL("../assets/img/introImg2.jpg", import.meta.url).href;

  return (
    <div className="flex w-screen h-screen bg-black text-white">
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
        className={`flexRowCenter text-[62px] flex-grow transition-all duration-300 ${
          isNavOpen ? "ml-[300px]" : "ml-0"
        }`}
      >
        <div></div>
        <img className="w-[50%] h-[60%]" src={imageSrc} />
      </div>
    </div>
  );
}
