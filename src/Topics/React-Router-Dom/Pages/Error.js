import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mycontainer">
      <h1>😥Page Not Found | 404 |😥</h1>
      <button className="btn btn-primary">
        <Link to="/">GO BACK</Link>
      </button>
    </div>
  );
};

export default Error;
