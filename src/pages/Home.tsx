import { useEffect, useState } from "react";
import introImg from "@/assets/introImg.jpg";

export default function Home() {
  const [isBlur, setIsBlur] = useState(true);

  const screenHeight = window.screen.height;
  console.log(screenHeight);

  const scrollHandler = () => {
    if (window.scrollY > 400) {
      setIsBlur(false);
    } else {
      setIsBlur(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="h-[700px]"></div>
      <div className={`relative ${isBlur ? "blur-lg" : "blur-0"}`}>
        <img
          src={introImg}
          alt="Blurry"
          className={`w-full h-screen`}
          style={{
            transition: "filter 1s ease-in-out",
          }}
        />
        <h1 className="absolute top-0 left-0  text-white text-4xl font-bold">
          Persona
        </h1>
      </div>
    </div>
  );
}
