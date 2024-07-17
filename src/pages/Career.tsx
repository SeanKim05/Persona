import { useRef } from "react";

const Career = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const imageSrc = new URL(`../assets/img/mainImg1.jpg`, import.meta.url).href;

  return (
    <div
      ref={scrollContainerRef}
      onWheel={onWheel}
      className="animate-fade-in"
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        width: "100%",
        height: "100vh",
        border: "1px solid #ccc",
      }}
    >
      <div
        style={{
          minWidth: "800px",
          height: "100%",
          backgroundColor: "black",
        }}
        className="flexRowCenter"
      >
        <div className="relative">
          <img className="px-[10%]" src={imageSrc} />
          <h2
            style={{ fontFamily: "mj" }}
            className="absolute top-[-7%] flex justify-center w-full text-[50px]"
          >
            Photography
          </h2>
          <p
            className="flexRowCenter pt-[16px] text-[18px]"
            style={{ fontFamily: "bold" }}
          >
            와 내용을 적어야 하는데 디자인이 정말 없어 보인다
          </p>
        </div>
      </div>
      <div
        style={{
          minWidth: "800px",
          height: "100%",
          backgroundColor: "lightcoral",
        }}
      >
        Item 2
      </div>
      <div
        style={{
          minWidth: "800px",
          height: "100%",
          backgroundColor: "lightgreen",
        }}
      >
        Item 3
      </div>
      <div
        style={{
          minWidth: "800px",
          height: "100%",
          backgroundColor: "lightpink",
        }}
      >
        Item 4
      </div>
      <div
        style={{
          minWidth: "800px",
          height: "100%",
          backgroundColor: "lightseagreen",
        }}
      >
        Item 5
      </div>
    </div>
  );
};

export default Career;
