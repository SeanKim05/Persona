import { useEffect, useState, useRef } from "react";
import introImg from "@/assets/introImg.jpg";
import "@/styles/animation.css";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const [blurIntensity, setBlurIntensity] = useState(10);
  const [isTextShown, setIsTextShown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); //1회 이상 스크롤이 진행되면 에니매이션 작동 x

  const slideRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  //slide2 Blur처리
  const calculateBlur = () => {
    if (!slideRef.current) return;
    const slideTop = slideRef.current.offsetTop; //ref된 요소의 윗지점
    const scrollDistance = Math.max(0, slideTop - window.scrollY); //scroll 지점이 마이너스 값이 되는 것을 방지
    const blur = Math.min(blurIntensity, scrollDistance / 100); // blur === 0일 떄 가장선명
    setBlurIntensity(blur);
  };
  //스크롤 이동
  const scrollHandler = () => {
    calculateBlur();
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
    // blur 처리가 제거 된 후 텍스트 생성
    if (blurIntensity === 0) {
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
            <>
              Persona
              {isTextShown && <span className="animate-letter-fade">l</span>}
            </>
          </h1>

          {isTextShown && (
            <div
              style={{ fontFamily: "go" }}
              className={`text-[16px] animate-letter-fade animate-slide-up`}
            >
              <div>
                <p>사회적으로 보여주기 위해 쓰는 가면을 벗고,</p>
                <p>
                  지극히 사적인
                  <span style={{ fontFamily: "mj" }}> 나의 영역으로</span> 가는
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
      </div>
    </div>
  );
}
