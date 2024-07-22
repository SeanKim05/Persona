import { useRef, useState } from "react";

const Me = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const toggleFlip = (index: number) => {
    setFlippedIndices((prevFlippedIndices) =>
      prevFlippedIndices.includes(index)
        ? prevFlippedIndices.filter((i) => i !== index)
        : [...prevFlippedIndices, index]
    );
  };

  const items = [
    {
      title: "Hiker",
      className: "bg-[#333D51]",
      imageSrc: new URL(`../assets/img/me/me0.jpg`, import.meta.url).href,
      text: "abc",
    },
    {
      title: "Runner",

      className: "bg-[#CBD0D8]",
      imageSrc: new URL(`../assets/img/me/me1.jpg`, import.meta.url).href,
      text: "abc",
    },
    {
      title: "Travler",
      className: "bg-[#F4F4EA] text-black",
      imageSrc: new URL(`../assets/img/me/me2.jpg`, import.meta.url).href,
      text: "abc",
    },
    {
      title: "Photograper",
      className: "bg-[#D3AC2B] text-black",
      imageSrc: new URL(`../assets/img/me/me3.jpg`, import.meta.url).href,
      text: "abc",
    },
  ];

  return (
    <div
      ref={scrollContainerRef}
      onWheel={onWheel}
      className="animate-fade-in flex overflow-x-auto whitespace-nowrap w-full h-screen"
    >
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleFlip(index)}
          className={`flex min-w-[800px] h-full justify-center items-center flip-card ${
            item.className
          } ${flippedIndices.includes(index) ? "flipped" : ""}`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front flexRowCenter">
              <img
                className=" flexRowCenter max-h-[90%] px-[10%]"
                src={item.imageSrc}
              />
              <h2
                style={{ fontFamily: "mj" }}
                className="absolute top-[10%] flex justify-center w-full text-[50px]"
              >
                {item.title}
              </h2>
            </div>
            <div className={`flip-card-back bg-black`}>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Me;
