import React from "react";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [user, setuser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const items = await response.json();
    setuser(items);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>UseEffect Fetch Data</h1>
      {user.map((item) => {
        const { login, id, avatar_url, html_url } = item;
        return (
          <li key={id} className="item">
            <img src={avatar_url} src={login} />
            <div className="item-gray">
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default FetchData;
