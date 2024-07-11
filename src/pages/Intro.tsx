import { useEffect, useState, useRef } from "react";
import introImg from "@/assets/introImg.jpg";
import "@/styles/animation.css"; // Ensure the CSS path is correct
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [blurIntensity, setBlurIntensity] = useState(10); // Start with full blur
  const [isTextShown, setIsTextShown] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const fadeInText = "Persona";

  const calculateBlur = () => {
    if (!slideRef.current) return;
    const slideTop = slideRef.current.offsetTop;
    const scrollDistance = Math.max(0, slideTop - window.scrollY);
    const blur = Math.min(10, scrollDistance / 100); // Adjust the divisor to control the rate of blur change
    setBlurIntensity(blur);
  };

  const scrollHandler = () => {
    calculateBlur(); // Call calculateBlur on each scroll event to dynamically adjust the blur
    if (window.scrollY > 100 && !hasScrolled) {
      if (slideRef.current) {
        window.scrollTo({
          top: slideRef.current.offsetTop,
          behavior: "smooth",
        });
        setHasScrolled(true);
      }
    } else if (window.scrollY <= 100 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [hasScrolled]);

  useEffect(() => {
    let textTimer: ReturnType<typeof setTimeout>;

    if (blurIntensity < 0.1) {
      textTimer = setTimeout(() => {
        setIsTextShown(true);
      }, 100);
    } else {
      setIsTextShown(false);
    }

    return () => {
      clearTimeout(textTimer);
    };
  }, [blurIntensity]);

  const navigate = useNavigate();

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
      <div ref={slideRef} className="relative">
        <img
          src={introImg}
          alt="Persona intro"
          className="w-full h-screen"
          style={{
            filter: `blur(${blurIntensity}px)`,
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
              className={`text-[18px] animate-letter-fade animate-slide-up`}
            >
              <div>
                <p>사회적으로 보여주기 위해 쓰는 가면을 벗고,</p>
                <p>
                  지극히 사적인{" "}
                  <span style={{ fontFamily: "mj" }}>나의 영역으로</span> 가는
                  공간 페르소나
                </p>
              </div>
              <button
                className="w-[160px] h-[60px] mt-5 p-1 border border-white text-[20px] hover:opacity-50 transition-opacity"
                onClick={() => navigate("/main")}
              >
                바로가기
              </button>
            </div>
          )}
        </div>
        <div id="my-section" />
      </div>
    </div>
  );
}
