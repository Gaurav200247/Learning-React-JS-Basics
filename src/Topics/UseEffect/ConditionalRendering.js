import React from "react";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const ConditionalRendering = () => {
  const [isloading, setIsLoading] = useState(true);
  const [user, setuser] = useState("gaurav");
  const [iserror, setIserror] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status <= 299 && response.status >= 200) {
          return response.json();
        } else {
          setIsLoading(false);
          setIserror(true);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        const { login } = data;
        setuser(login);
        setIsLoading(false);
        console.log("Succesfull fetch");
      })
      .catch(() => console.log("ERROR..."));
  }, []);

  if (isloading) {
    return <h2>Loading...</h2>;
  }

  if (iserror) {
    return <h2>Error...</h2>;
  }

  return <h2>{user}</h2>;
};

export default ConditionalRendering;
