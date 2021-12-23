import React, { useEffect, useState } from "react";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const { name } = useParams();
  const [showname, setshowname] = useState("Default Name");

  useEffect(() => {
    const newperson = data.find((item) => {
      return item.name === name;
    });
    setshowname(newperson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <button className="btn btn-success">
        <Link to="/people">Go Back</Link>
      </button>
    </div>
  );
};

export default Person;
