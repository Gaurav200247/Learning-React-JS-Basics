import React from "react";
import { UseFetch } from "./UseFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { isloading, product } = UseFetch(url);
  console.log(product);
  return (
    <div>
      <h1>Custom Hooks - UseFetch</h1>
      <h2>{isloading ? "Loading..." : "Data Fetched"}</h2>
    </div>
  );
};

export default Example;
