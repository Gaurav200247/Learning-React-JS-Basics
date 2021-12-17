import React from "react";
import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setpeople] = useState(data);

  const clearAll = () => {
    setpeople([]);
  };

  const deleteItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id); //return only those person.id which are not equal to the seleceted item's id

    setpeople(newPeople);
  };

  return (
    <div>
      <h1>UseState Array Example</h1>

      {people.map((person) => {
        const { id, name } = person; //de-structuring and object
        return (
          <div key={id} className="item">
            <h4>{name}</h4>

            <button
              onClick={() => {
                deleteItem(id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      <button onClick={clearAll} className="btn green">
        Clear All items
      </button>
    </div>
  );
};

export default UseStateArray;
