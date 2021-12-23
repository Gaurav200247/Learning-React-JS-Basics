import React, { useState, useRef } from "react";

let a = 0;
const UnControlledForms = () => {
  const name = useRef(null);

  const [list, setlist] = useState([]);

  const Handlesubmit = (e) => {
    e.preventDefault();
    setlist([...list, { name: name.current.value, id: a++ }]);
  };

  return (
    <div>
      <h1>Un-Controlled Forms</h1>
      <form onSubmit={Handlesubmit}>
        <div className="form-group">
          <label>Name : </label>
          <input
            className="form-control"
            id="name"
            placeholder="Enter Name "
            ref={name}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {list.map((item) => {
        const { id, name } = item;
        return (
          <li key={id} className="list-content">
            {name}
          </li>
        );
      })}
    </div>
  );
};

export default UnControlledForms;
