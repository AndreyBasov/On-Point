import React from "react";

// в компонент передаем координаты, размеры, угол поворта и уровень размытия
const Ice = (props) => {
  let iceStyle = {
    position: "absolute",
    top: `${props.y}%`,
    left: `${props.x}%`,
    height: `${props.size / 15}vw`,
    width: `${props.size / 15}vw`,
    transform: `rotate(${props.angle}deg)`,
    filter: `blur(${props.blur}px)`,
  };
  return <img src="/img/ice5.png" style={iceStyle} alt="ice"></img>;
};

export default Ice;
