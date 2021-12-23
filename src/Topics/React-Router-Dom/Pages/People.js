import React, { useState } from "react";
import { data } from "../../data";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setpeople] = useState(data);
  return (
    <div className="mycontainer">
      <h1>People Page</h1>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <li key={id} className="list-content">
            {name}
            <Link className="a-learnmore" to={`/person/${name}`}>
              Learn More
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default People;
