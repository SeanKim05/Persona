/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [randIdx, x] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const localImgArr = [
    { desc: "가나다", navTo: "" },
    { desc: "가나1다", navTo: "" },
    { desc: "가나3다", navTo: "" },
  ];

  const imageSrc = new URL(
    `../assets/img/mainImg${randIdx}.jpg`,
    import.meta.url
  ).href;

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * localImgArr.length);
      x(randomIndex);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

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
        className={`flex flex-col items-center justify-center flex-grow transition-all duration-300 ${
          isNavOpen ? "ml-[300px]" : "ml-0"
        }`}
      >
        <img className="w-[500px] h-[300px]" src={imageSrc} />
        <div>{localImgArr[0].desc}</div>
      </div>
    </div>
  );
}
