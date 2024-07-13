/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function Home() {
  const [randIdx, x] = useState(0);

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
    <div>
      <img className="w-[500px] h-[300px]" src={imageSrc} />
      <div>{localImgArr[0].desc}</div>
    </div>
  );
}
