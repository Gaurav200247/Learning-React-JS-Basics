import React from "react";
import { UseFetch } from "../UseFetch";
import { Product } from "./Product";

const url = "https://course-api.com/react-prop-types-example";

const PropTypes = () => {
  const { product, isloading } = UseFetch(url);
  return (
    <div>
      <h1>PropTypes</h1>
      <div>
        {isloading ? (
          <h2>Loading...</h2>
        ) : (
          product.map((item) => {
            return <Product key={item.id} {...item} />;
          })
        )}
      </div>
    </div>
  );
};

export default PropTypes;
