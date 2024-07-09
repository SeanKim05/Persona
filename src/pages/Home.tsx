import { useEffect, useState } from "react";
import introImg from "@/assets/introImg.jpg";

export default function Home() {
  const [isBlur, setIsBlur] = useState(true);
  const [text, setText] = useState("Persona");

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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!isBlur) {
      timer = setTimeout(() => {
        setText("Personal");
      }, 1000);
    } else {
      setText("Persona"); // Reset text when blur is reapplied
    }

    return () => clearTimeout(timer); // Clear timeout if component unmounts or isBlur changes
  }, [isBlur]);

  return (
    <div style={{ fontFamily: "go" }} className="bg-black">
      <div className="h-[700px]"></div>
      <div className={`relative ${isBlur ? "blur-lg" : "blur-0"}`}>
        <img
          src={introImg}
          alt="Blurry"
          className="w-full h-screen"
          style={{
            transition: "filter 1s ease-in-out",
          }}
        />
        <div
          style={{ fontFamily: "mjBold" }}
          className="absolute top-20 left-20 text-white text-[96px]"
        >
          <h1 className="mt-14">{text}</h1>
          <p style={{ fontFamily: "go" }} className="text-[22px]">
            사회적으로 보여주기 위해 쓰는 가면을 벗고, <br />
            지극히 사적인 나의 영역으로 가는 공간
          </p>
        </div>
      </div>
    </div>
  );
}
