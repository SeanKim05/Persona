import { useEffect, useState } from "react";
import introImg from "@/assets/introImg.jpg";
import "@/styles/animation.css"; // Make sure this path is correct

export default function Home() {
  const [isBlur, setIsBlur] = useState(true);
  const [isTextShown, setIsTextShown] = useState(false);

  const fadeInText = "Persona";

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
    let textTimer: ReturnType<typeof setTimeout>;

    if (!isBlur) {
      textTimer = setTimeout(() => {
        setIsTextShown(true);
      }, 100);
    } else {
      setIsTextShown(false);
    }

    return () => {
      clearTimeout(textTimer);
    };
  }, [isBlur]);
  console.log("a");
  return (
    <div style={{ fontFamily: "mj" }} className="bg-black">
      {/* Slide 1 */}
      <div className="flex justify-center items-center h-[700px] text-[120px] text-white">
        <h1 className="">Persona</h1>
      </div>
      {/* Slide 2 */}
      <div className={`relative ${isBlur ? "blur-lg" : "blur-0"}`}>
        <img
          src={introImg}
          alt="Blurry"
          className="w-full h-screen"
          style={{
            transition: "filter 0.5s ease-in-out",
          }}
        />
        <div
          style={{ fontFamily: "mjBold" }}
          className="absolute top-[10%] left-[12%] text-white"
        >
          <h1
            className={`mt-14 text-[90px] ${
              isTextShown && "animate-text-move"
            }`}
          >
            {isTextShown ? (
              <>
                {fadeInText}
                <span className="animate-letter-fade">l</span>
              </>
            ) : (
              fadeInText
            )}
          </h1>

          {isTextShown && (
            <div
              style={{ fontFamily: "go" }}
              className={`text-[18px] animate-letter-fade animate-slide-up `}
            >
              <>
                <p>사회적으로 보여주기 위해 쓰는 가면을 벗고,</p>
                <p>지극히 사적인 개인의 영역으로 가는 공간 페르소나</p>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
