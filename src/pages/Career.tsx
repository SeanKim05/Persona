// HorizontalScroll.js
import { useRef } from "react";

const Career = () => {
  const scrollContainerRef = useRef(null);

  const onWheel = (e) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      onWheel={onWheel}
      //
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        width: "100%",
        height: "100%",
        border: "1px solid #ccc",
      }}
    >
      <div
        style={{
          minWidth: "800px",
          height: "100%",
          backgroundColor: "lightblue",
        }}
      >
        Item 1
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
