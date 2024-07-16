import { useEffect, useState } from "react";
import home from "@assets/img/home.jpg";

export default function Home() {
  const [randIdx, setRandIdx] = useState(0);
  const [isImgVisible, setIsImgVisible] = useState(true);

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
      let newRandIdx;
      do {
        newRandIdx = Math.floor(Math.random() * localImgArr.length);
      } while (newRandIdx === randIdx); // 새로 생성된 인덱스가 기존 인덱스와 같지 않을 때 까지 생성

      setIsImgVisible(false);
      setTimeout(() => {
        setRandIdx(newRandIdx);
        setIsImgVisible(true);
      }, 200);
    }, 3000);

    return () => clearInterval(timer);
  }, [randIdx]);

  const words = [
    { text: "차가운", top: "20%", left: "30%" },
    { text: "클래식한", top: "40%", left: "70%" },
    { text: "남성적인", top: "60%", left: "50%" },
    { text: "담백한", top: "10%", left: "80%" },
    { text: "신선한", top: "80%", left: "20%" },
    { text: "복고적인", top: "50%", left: "40%" },
    { text: "중후한", top: "30%", left: "60%" },
    { text: "세련된", top: "70%", left: "30%" },
    { text: "도시적인", top: "90%", left: "50%" },
  ];

  return (
    <>
      <div className="flexColumn h-screen text-[18px]">
        <div className="w-full mb-[12px]">{localImgArr[randIdx].desc}</div>
        <img
          className="w-[100%] h-[60%]"
          src={imageSrc}
          style={{
            opacity: isImgVisible ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
        <div className="w-full flex justify-end mt-[12px]">
          {localImgArr[randIdx].desc}
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${home})`, fontFamily: "mjBold" }}
        className="relative flex items-center justify-center w-full h-screen text-[80px]"
      >
        <div className="absolute">김사람</div>
        {words.map((word, index) => (
          <span
            key={index}
            className="absolute text-[24px]"
            style={{
              fontFamily: "mj",
              top: word.top,
              left: word.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </>
  );
}
