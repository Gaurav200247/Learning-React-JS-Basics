import React from "react";
import { useState } from "react";
const UseStateObject = () => {
  // passing an object as intial value of useState
  const [Hero, setHero] = useState({
    name: "Izuku Midoriya",
    gender: "Male",
    heroName: "Deku",
    quirk: "One for All",
    powerLevel: "400",
    img: "https://animehunch.com/wp-content/uploads/2020/09/Deku-My-Hero-Academia-e1599419410921-768x545.jpg",
  });

  const changeItem = () => {
    if (Hero.name === "Izuku Midoriya") {
      setHero({
        ...Hero, //gender and powerLevel are remain unchanged thanks to spread (...) operator.
        name: "Katsuki Bakugo",
        heroName: "DynaMight",
        quirk: "Explosion",
        img: "https://qph.fs.quoracdn.net/main-qimg-56778dde5b43dd102975e2a48b9e38f3-lq",
      });
    } else {
      setHero({
        ...Hero,
        name: "Izuku Midoriya",
        heroName: "Deku",
        quirk: "One for All",
        img: "https://animehunch.com/wp-content/uploads/2020/09/Deku-My-Hero-Academia-e1599419410921-768x545.jpg",
      });
    }
  };
  return (
    <div className="center dark">
      <h1>UseState Object</h1>
      <img src={Hero.img} alt="" className="img" />
      <h3>{Hero.name}</h3>
      <h3>{Hero.gender}</h3>
      <h3>{Hero.heroName}</h3>
      <h3>{Hero.quirk}</h3>
      <h3>{Hero.powerLevel}</h3>
      <button className="btn green" onClick={changeItem}>
        change
      </button>
    </div>
  );
};

export default UseStateObject;
