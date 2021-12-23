import React, { useReducer } from "react";

const reducer = (count, action) => {
  switch (action.actionName) {
    case "increase":
      return count + 1;
    case "decrease":
      return count - 1;
    case "alert":
      alert("COOL");
      return count;
    default:
      alert("Error...");
      return count;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Testing UseReducer</h1>
      <h1>{count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ actionName: "increase" })}
      >
        INCREASE
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ actionName: "decrease" })}
      >
        DECREASE
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ actionName: "alert" })}
      >
        Alert
      </button>
    </div>
  );
};

export default UseReducer;
