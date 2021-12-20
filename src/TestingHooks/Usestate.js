import React from "react";
import { useState } from "react";
import { data } from "../Topics/data";

const Usestate = () => {
  const [people, setpeople] = useState(data);

  const ClearAllItems = () => {
    setpeople([]);
  };

  const DeleteItem = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setpeople(newPeople);
  };

  return (
    <div>
      <h1>Testing Usestate</h1>
      <button className="btn btn-success" onClick={ClearAllItems}>
        Clear All Items
      </button>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <li key={id} className="list-content">
            {name}
            <button className="btn btn-danger" onClick={() => DeleteItem(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Usestate;
