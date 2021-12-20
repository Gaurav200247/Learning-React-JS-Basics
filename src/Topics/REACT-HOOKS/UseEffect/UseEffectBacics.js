import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectBacics = () => {
  const [Value, setValue] = useState(0);

  // The useEffect Hook allows you to perform side effects in your components.

  // Some examples of side effects are: fetching data, directly updating the DOM, and timers.

  // SYNTAX => useEffect(<function>, <dependency>)
  // -> Function is effect you want to render
  // -> Dependency is an array of item which we want to change at a particular condition.

  // Note :- (1) if dependency is not there then useEffect will render on each render.
  //         (2) if dependency is empty then all conditional statement not run and useeffect will run on only FIRST render.

  useEffect(() => {
    console.log("useEffect Rendered (1)");
    if (Value > 9) {
      document.title = `(${Value}) Messages`;
      console.log("useEffect Rendered (2)");
    }
  }, [Value]);
  return (
    <div className="center dark">
      <h1>UseEffect Bacics</h1>
      <h1>{Value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(Value + 1);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default UseEffectBacics;
