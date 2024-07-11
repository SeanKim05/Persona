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

  return (
    <div style={{ fontFamily: "mj" }} className="bg-black">
      {/* Slide 1 */}
      <div className="flex flex-col justify-center items-center h-[700px] text-[120px] text-white opacity-90">
        <h1 className="absolute">Persona</h1>
        <div
          className="top-[40%] text-[18px] text-[#8f9ab1] relative animate-blink"
          style={{ fontFamily: "goBold" }}
        >
          Scroll down
        </div>
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
              <div>
                <p>사회적으로 보여주기 위해 쓰는 가면을 벗고,</p>
                <p>
                  지극히 사적인{" "}
                  <span style={{ fontFamily: "mj" }}>나의 영역으로 </span>
                  가는 공간 페르소나
                </p>
              </div>
              <button
                // style={{ fontFamily: "mj" }}
                className="w-[160px] h-[60px] mt-5 p-1 border border-white text-[24px]"
              >
                바로가기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
