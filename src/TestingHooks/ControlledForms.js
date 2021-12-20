import React, { useState } from "react";

const ControlledForms = () => {
  const [name, setname] = useState("");
  const [people, setpeople] = useState([]);

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (name) {
      setpeople([...people, { name, id: new Date().getTime().toString() }]);
    } else {
      alert("Plz Enter a Value");
    }

    setname("");
    console.log(people.length);
  };

  return (
    <div>
      <h1>ControlledForms</h1>
      <form onSubmit={Handlesubmit}>
        <div className="form-group">
          <label>Name : </label>
          <input
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <li key={id} className="list-content">
            {name}
          </li>
        );
      })}
      <button className="btn btn-danger" onClick={() => setpeople([])}>
        Clear All Items
      </button>
    </div>
  );
};

export default ControlledForms;
