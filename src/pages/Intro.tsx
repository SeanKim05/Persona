import { useEffect, useState, useRef } from "react";
import introImg from "@/assets/img/introImg.jpg";
import "@/styles/animation.css";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const [blurIntensity, setBlurIntensity] = useState(10);
  const [isTextShown, setIsTextShown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const slideRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const calculateParallax = () => {
    if (!slideRef.current) return;
    const scrollY = window.scrollY;
    const slideHeight = slideRef.current.offsetHeight;

    const blur = Math.min(10, Math.max(0, (slideHeight - scrollY) / 100));
    setBlurIntensity(blur);
  };

  const scrollHandler = () => {
    calculateParallax();

    const bottomOfPage =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (bottomOfPage && !isTextShown) {
      setTimeout(() => {
        setIsTextShown(true);
      }, 500);
    }

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
  }, [hasScrolled, isTextShown]);

  return (
    <div style={{ cursor: "default" }} className="bg-black">
      {/* Slide 1 */}
      <div className="flex flex-col justify-center items-center h-[95vh] text-[120px] text-white opacity-90 bg-intro font-mjBold">
        <h1 className="absolute animate-focus-in-expand-fwd fade-in">
          Persona
        </h1>
        <div
          className="top-[40%] text-[18px] text-[#8f9ab1] relative animate-blink"
          style={{ fontFamily: "goBold" }}
        >
          Scroll down
        </div>
      </div>

      {/* Slide 2 */}
      <div ref={slideRef} className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center transition-filter ease-in-out duration-800"
          style={{
            backgroundImage: `url(${introImg})`,
            filter: `blur(${blurIntensity}px)`,
          }}
        />
        <div
          style={{ fontFamily: "mjBold" }}
          className="absolute top-[10%] left-[12%] text-white z-10"
        >
          <h1
            className={`mt-14 text-[90px] ${
              isTextShown ? "animate-text-move" : ""
            }`}
          >
            Persona
            {isTextShown && <span className="animate-letter-fade">l</span>}
          </h1>

          <div style={{ fontFamily: "go" }} className={`text-[16px] h-[100px]`}>
            {isTextShown && (
              <div className="animate-letter-fade animate-slide-up">
                <p>
                  심리학에서 페르소나는 개인이 사회적 상황에서 자신을 드러내는
                  방식, 즉 사회적 가면을 의미,
                </p>
                <p className="mb-2">
                  내면적 본질을 숨기고 외부 세계에 적응하기 위해 사용하는 일종의
                  '가면'
                </p>
                <p className="text-[20px]">
                  <span style={{ fontFamily: "goBold" }}>중요한 내용</span>
                  으로 가는 공간 페르소나
                </p>
              </div>
            )}
          </div>
          <button
            style={{ fontFamily: "goBold" }}
            className="w-[160px] h-[60px] mt-5 p-1 border border-white text-[20px] hover:opacity-50 transition-opacity"
            onClick={() => navigate("/main")}
          >
            바로가기
          </button>
        </div>
      </div>
    </div>
  );
}
