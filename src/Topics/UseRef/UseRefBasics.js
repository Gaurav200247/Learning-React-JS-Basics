import React from "react";
import { useRef } from "react";

// The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.

// It can be used to access a DOM element directly.

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("refValue" + refContainer.current.value); //gives the value of input on submit.

    const item = document.createElement("p");
    item.innerText = refContainer.current.value;
    const itemContainer = document.querySelector(".item-conatainer");
    itemContainer.append(item);
  };

  //console.log(refContainer); //shows an object with key current and its value is the whole element tag.

  return (
    <div>
      <h1>UseRef</h1>
      <form onSubmit={HandleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="item-conatainer"></div>
    </div>
  );
};

export default UseRefBasics;
