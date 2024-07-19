import { useRef } from "react";

const Me = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const items = [
    {
      className: "bg-black",
      imageSrc: new URL(`../assets/img/me/me0.jpg`, import.meta.url).href,
      // text: "와 내용을 적어야 하는데 디자인이 정말 없어 보인다 와 내용을 적어야 하는데<br />와 내용을 적어야 하는데 디자인이 정말 없어 보인다 와 내용을 적어야 하는데",
    },
    {
      className: "bg-[#CBD0D8]",
      imageSrc: new URL(`../assets/img/me/me1.jpg`, import.meta.url).href,
    },
    {
      className: "bg-[#F4F4EA] text-black",
      imageSrc: new URL(`../assets/img/me/me2.jpg`, import.meta.url).href,
    },
    {
      className: "bg-[#D3AC2B] text-black",
      imageSrc: new URL(`../assets/img/me/me3.jpg`, import.meta.url).href,
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
          className={`flex min-w-[800px] h-full ${item.className} justify-center items-center`}
        >
          <div className="relative">
            <img
              className="flexRowCenter max-h-screen px-[10%]"
              src={item.imageSrc}
            />
            <h2
              style={{ fontFamily: "mj" }}
              className="absolute top-[-30px] flex justify-center w-full text-[50px]"
            >
              Photography
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Me;
