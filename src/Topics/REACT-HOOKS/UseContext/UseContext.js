import React, { useState, useContext } from "react";
import { data } from "../data";

const ContextFragment = React.createContext();
// Used to access props from root to a particular component without accessing middle components.
// Has two Components - 1. Provider
//                      2.Consumer

const UseContext = () => {
  const [people, setpeople] = useState(data);

  const deleteItem = (id) => {
    setpeople((people) => {
      return people.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <ContextFragment.Provider value={{ people, deleteItem }}>
      <h1>Context API / UseContext</h1>
      <List />
    </ContextFragment.Provider>
  );
};

const List = () => {
  const { people } = useContext(ContextFragment);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return <SinglePerson key={id} name={name} id={id} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { deleteItem } = useContext(ContextFragment);
  return (
    <li className="list-content" key={id}>
      ({id}) {name}
      <button onClick={() => deleteItem(id)} className="mybtn-trash">
        <i className="far fa-trash-alt fa-2x"></i>
      </button>
    </li>
  );
};
export default UseContext;
