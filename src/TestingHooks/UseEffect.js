import React from "react";
import { useState, useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users";

const UseEffect = () => {
  const [user, setUser] = useState([]);

  const getusers = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <div>
      <h1>Testing UseEffect</h1>
      {user.map((person) => {
        const { id, name, email } = person;
        return (
          <li key={id} className="list-content">
            <span>{name}</span>
            <span>{email}</span>
          </li>
        );
      })}
    </div>
  );
};

export default UseEffect;
