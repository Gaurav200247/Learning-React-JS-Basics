import React from "react";
import { useState, useEffect } from "react";

const HideShow = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <h1>Hide/show</h1>
      <button className="btn" onClick={() => setshow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setsize] = useState(window.innerWidth);
  const sizeHandler = () => {
    setsize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeHandler);
    return (
      () => {
        window.removeEventListener("resize", sizeHandler);
      },
      []
    );
  });

  return (
    <div>
      <h1>Window width is : {size} px</h1>
    </div>
  );
};

export default HideShow;
