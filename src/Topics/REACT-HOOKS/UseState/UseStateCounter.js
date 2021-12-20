import React from "react";
import { useState } from "react";

const UseStateCounter = () => {
  const [Value, setValue] = useState(0);
  const increaseLater = () => {
    setInterval(() => {
      // callback function in the updating function of useState;
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      {/* Regular Counter */}
      <h2>Regular Counter</h2>
      <h1>{Value}</h1>
      <div className="btnContainer item dark">
        <button className="btn" onClick={() => setValue(Value - 1)}>
          DECREASE
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          RESET
        </button>
        <button className="btn" onClick={() => setValue(Value + 1)}>
          INCREASE
        </button>
      </div>

      {/* Complex Counter */}
      <h2>Complex Counter</h2>
      <h1>{Value}</h1>
      <div className="btnContainer item dark">
        <button className="btn" onClick={increaseLater}>
          Increase Later
        </button>
      </div>
    </>
  );
};

export default UseStateCounter;
