import React from "react";
import { useState } from "react";

// The React useState Hook allows us to track state in a function component.

// useState accepts an initial state and returns two values:
// 1. The current state.
// 2. A function that updates the state.

const UseStateBasics = () => {
  // Intialising useState
  // const [<currentState>,<stateUpdatingFunction>] = useState(<InitialValue>);
  const [Text, setText] = useState("Hello Bro");

  const clickHandler = () => {
    if (Text === "Hello Bro") {
      // Updating Function
      setText("World is Awesome");
    } else {
      setText("Hello Bro");
    }
  };
  return (
    <div>
      <h2>{Text}</h2>
      <button className="btn" onClick={clickHandler}>
        Click to Change Heading
      </button>
    </div>
  );
};

export default UseStateBasics;
