import React, { useEffect, useState } from "react";
import Ice from "./Ice";
import Footer from "./Footer";

const App = () => {
  let [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    // если пересекаем 10% слайда - переходим на этот слайд
    let page1 = document.querySelector(".page1");
    let page2 = document.querySelector(".page2");
    let page3 = document.querySelector(".page3");
    const options = {
      root: null,
      threshold: 0.1,
    };

    const scrollToPage = (index) => (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        document.querySelector(".navbar").childNodes.forEach((circle) => {
          circle.classList.remove("active");
        });
        document.querySelector(`.circle${index}`).classList.add("active");
        window.scrollTo({
          left: 0,
          top: (index - 1) * document.querySelector(".page2").offsetHeight,
          behavior: "smooth",
        });
      }
    };
    const pageObserver1 = new IntersectionObserver(scrollToPage(1), options);
    pageObserver1.observe(page1);
    const pageObserver2 = new IntersectionObserver(scrollToPage(2), options);
    pageObserver2.observe(page2);
    const pageObserver3 = new IntersectionObserver(scrollToPage(3), options);
    pageObserver3.observe(page3);
  }, []);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    // заполнить столбик при перемещении ползунка
    slider.style.backgroundImage = `linear-gradient(
      to right,
      #dff3e3 0%,
      #dff3e3 ${sliderValue}%,
      grey ${sliderValue}%,
      grey 100%
    )`;
  }, [sliderValue]);

  // подвинуть в нужное положение при отпускании кнопки
  const onSliderMouseUp = () => {
    if (sliderValue >= 0 && sliderValue < 25) {
      setSliderValue(0);
    } else if (sliderValue >= 25 && sliderValue < 75) {
      setSliderValue(50);
    } else if (sliderValue >= 75 && sliderValue <= 100) {
      setSliderValue(100);
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar__circle circle1 active"></div>
        <div className="navbar__circle circle2"></div>
        <div className="navbar__circle circle3"></div>
      </div>
      <div className="page1">
        <img className="background-img" src="/img/page1.jpg" alt="page1"></img>
        <h1 className="page1__text">
          Всегда ли цели терапии СД2 на поверхности?
        </h1>

        <div className="page1__point1">
          <h1 className="page1__description">Гипогликемия</h1>
          <div className="page1__circle page1__circle__circle1"></div>
        </div>
        <div className="page1__point2">
          <h1 className="page1__description page1__description-2">
            Цель по HbA1c
          </h1>
          <div className="page1__circle page1__circle__circle2"></div>
        </div>
        <div className="page1__point3">
          <h1 className="page1__description">Осложнения СД</h1>
          <div className="page1__circle page1__circle__circle3"></div>
        </div>
        <div className="page1__point4">
          <h1 className="page1__description">СС риски</h1>
          <div className="page1__circle page1__circle__circle4"></div>
        </div>
        <Footer />
      </div>

      <div className="page2">
        <img className="background-img" src="/img/page2.png" alt="page2"></img>
        <h1 className="page2__text">Основа терапии -патогенез СД2</h1>
        <Ice x="9" y="21" size="40" blur="1" angle="30" />
        <Ice x="20" y="55" size="110" blur="1" angle="60" />
        <Ice x="90" y="10" size="200" blur="4" angle="30" />
        <Ice x="80" y="80" size="70" blur="6" angle="-20" />
        <Footer />
      </div>

      <div className="page3">
        <img className="background-img" src="/img/page3.jpg" alt="page3"></img>
        <div
          style={
            sliderValue >= 0 && sliderValue < 25
              ? { transform: "translateX(0)" }
              : sliderValue >= 25 && sliderValue < 75
              ? { transform: "translateX(-100%)" }
              : { transform: "translateX(-200%)" }
          }
          className="page3__slide"
        >
          <h2 className="page3__slide__text">Звенья патогенеза СД2</h2>
          <img
            className="page3__slide__img page3__slide__img1"
            src="/img/tab_1.png"
            alt="page3"
          ></img>
          <Ice x="10" y="65" size="200" blur="2" angle="30" />
          <Ice x="70" y="30" size="120" blur="3" angle="90" />
          <Ice x="90" y="15" size="60" blur="2" angle="25" />
        </div>
        <div
          style={
            sliderValue >= 0 && sliderValue < 25
              ? { transform: "translateX(100%)" }
              : sliderValue >= 25 && sliderValue < 75
              ? { transform: "translateX(0)" }
              : { transform: "translateX(-100%)" }
          }
          className="page3__slide page3__slide__2"
        >
          <h2 className="page3__slide__text">Смертельный октет</h2>
          <img
            className="page3__slide__img page3__slide__img2"
            src="/img/tab_2.png"
            alt="page3"
          ></img>
          <Ice x="90" y="65" size="200" blur="4" angle="30" />
          <Ice x="10" y="30" size="120" blur="1" angle="90" />
          <Ice x="43" y="10" size="60" blur="1" angle="25" />
        </div>
        <div
          style={
            sliderValue >= 0 && sliderValue < 25
              ? { transform: "translateX(200%)" }
              : sliderValue >= 25 && sliderValue < 75
              ? { transform: "translateX(100%)" }
              : { transform: "translateX(0)" }
          }
          className="page3__slide page3__slide__3"
        >
          <h2 className="page3__slide__text">Звенья патогенеза СД2</h2>
          <img
            className="page3__slide__img page3__slide__img3"
            src="/img/tab_3.png"
            alt="page3"
          ></img>
          <Ice x="20" y="80" size="200" blur="2" angle="0" />
          <Ice x="90" y="20" size="120" blur="1" angle="90" />
          <Ice x="2" y="10" size="40" blur="0" angle="25" />
        </div>
        <div className="page3__slide__years">
          <h2 className="page3__slide__years__text">1988</h2>
          <h2 className="page3__slide__years__text">2009</h2>
          <h2 className="page3__slide__years__text">2016</h2>
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          onChange={(e) => {
            setSliderValue(e.target.value);
          }}
          onMouseUp={onSliderMouseUp}
          className="slider"
          id="myRange"
        />
      </div>
    </div>
  );
};

export default App;
