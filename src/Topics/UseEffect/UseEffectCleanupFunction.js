import React from "react";
import { useState, useEffect } from "react";

const UseEffectCleanupFunction = () => {
  const [size, setsize] = useState(window.innerWidth);

  const changeSize = () => {
    setsize(window.innerWidth);
  };

  // cleanUp function called before useEffect rendered on Re-rendering of the component.

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", changeSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", changeSize);
    };
  });
  return (
    <>
      <h1>UseEffect Cleanup Function</h1>
      <h3>window size = {size} px</h3>
    </>
  );
};

export default UseEffectCleanupFunction;
