import React from "react";

// футер на первом и втором слайдах
const Footer = () => {
  return (
    <div className="page1__transition">
      <h1 className="page1__transition__text">Листайте вниз</h1>
      <img
        className="page1__transition__arrow"
        src="/img/arrow.png"
        alt="light"
      ></img>
    </div>
  );
};

export default Footer;
