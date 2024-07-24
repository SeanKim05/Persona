import React, { useEffect } from "react";
import "@styles/custom.css";

const Career = () => {
  const imageSrc = new URL(`../assets/img/me/me0.jpg`, import.meta.url).href;
  const imageSrc1 = new URL(`../assets/img/me/me1.jpg`, import.meta.url).href;
  const imageSrc2 = new URL(`../assets/img/me/me2.jpg`, import.meta.url).href;
  const imageSrc3 = new URL(`../assets/img/me/me3.jpg`, import.meta.url).href;

  useEffect(() => {
    // JavaScript functionality here
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");
    let carouselDom = document.querySelector(".carousel");
    let listItemDom = document.querySelector(".carousel .list");
    let thumbnailDom = document.querySelector(".carousel .thumbnail");

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };
    let timeRunning = 3000;
    let timeAutoNext = 5000;
    let runTimeOut;
    let runAutoRun = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      let itemSlider = document.querySelectorAll(".carousel .list .item");
      let itemThumbnail = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
      } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runAutoRun);
    }
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <img src={imageSrc} alt="img1" />
          <div className="content">
            <div className="author">SADASD</div>
            <div className="title">ASDSAD ASD</div>
            <div className="topic">ASDSDAQWE</div>
            <div className="des">asdas qwdasdq sadqwdas, asdqwedsa asd.</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={imageSrc1} alt="img2" />
          <div className="content">
            <div className="author">SADASD</div>
            <div className="title">ASDSAD ASD</div>
            <div className="topic">ASDSDAQWE</div>
            <div className="des">asdas qwdasdq sadqwdas, asdqwedsa asd.</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={imageSrc2} alt="img3" />
          <div className="content">
            <div className="author">SADASD</div>
            <div className="title">ASDSAD ASD</div>
            <div className="topic">ASDSDAQWE</div>
            <div className="des">asdas qwdasdq sadqwdas, asdqwedsa asd.</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={imageSrc3} alt="img4" />
          <div className="content">
            <div className="author">SADASD</div>
            <div className="title">ASDSAD ASD</div>
            <div className="topic">ASDSDAQWE</div>
            <div className="des">asdas qwdasdq sadqwdas, asdqwedsa asd.</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item">
          <img src={imageSrc1} alt="img2" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={imageSrc2} alt="img3" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={imageSrc3} alt="img4" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={imageSrc} alt="img1" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Career;
