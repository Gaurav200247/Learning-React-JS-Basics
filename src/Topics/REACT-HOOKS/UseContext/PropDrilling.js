import React, { useState } from "react";
import { data } from "../data";

const PropDrilling = () => {
  const [people, setpeople] = useState(data);

  const deleteItem = (id) => {
    setpeople((people) => {
      return people.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div>
      <h1>Prop Drilling</h1>
      <List people={people} deleteItem={deleteItem} />
    </div>
  );
};

const List = ({ people, deleteItem }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <SinglePerson id={id} name={name} key={id} deleteItem={deleteItem} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, deleteItem }) => {
  return (
    <li className="list-content" key={id}>
      ({id}) {name}
      <button onClick={() => deleteItem(id)} className="mybtn-trash">
        <i className="far fa-trash-alt fa-2x"></i>
      </button>
    </li>
  );
};
export default PropDrilling;
