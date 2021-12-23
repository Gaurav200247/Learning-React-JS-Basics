import React, { useState, useEffect, useCallback, useMemo } from "react";
import { UseFetch } from "../CustomHooks/UseFetch";

const url = "https://course-api.com/javascript-store-products";

const calculateMostExpensive = (data) => {
  console.log("hello");

  return data.reduce((total, item) => {
    const price = item.fields.price;
    if (price >= total) {
      total = price;
    }
    return total;
  }, 0);
};

const Example = () => {
  const [count, setcount] = useState(0);
  const { product } = UseFetch(url);
  const [cart, setcart] = useState(0);

  const addtocart = useCallback(() => {
    //now if count value changes the re-render of sinlgeitem does not occur
    setcart(cart + 1);
  }, [cart]); //dependency array is used : beacause the moment cart changes re-create the addtocart() function

  const mostExpensiveValueMemorised = useMemo(
    () => calculateMostExpensive(product),
    [product]
  ); //it will memeorize the value untill it gets changed which does not makes it re-render everytime when something else re-render in the Example component

  //   useEffect(() => {
  //     console.log("Big List Called");
  //   });

  return (
    <div style={{ width: "100%" }}>
      <div className="counter">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button
          style={{ width: "40%" }}
          className="btn btn-success"
          onClick={() => setcount(count + 1)}
        >
          +1
        </button>
        <h2>
          <i class="fas fa-shopping-cart"></i> : {cart}
        </h2>
      </div>
      <div className="biglist" style={{ marginTop: "20px" }}>
        <h1>Products List</h1>
        <h3>Most Expensive product price : ${mostExpensiveValueMemorised}</h3>
        <ul className="biglist-products">
          {product.map((item) => {
            const { id, fields } = item;
            return (
              //due to addtocart() the prop has been sent or changed therefore re-render occurs.
              <SingleItem key={id} fields={fields} addtocart={addtocart} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// React.memo() does not re-render the function until any changes happens to its props only.(means value of props changes)
const SingleItem = React.memo(({ fields, addtocart }) => {
  const { name, price } = fields;
  const image = fields.image[0].url;

  //   useEffect(() => {
  //     console.log("Single Item Called");
  //   });

  return (
    <li className="single-product">
      <img className="product-image" src={image} alt={name} />
      <span>{name}</span>
      <span>${price}</span>
      <button
        className="btn btn-primary"
        style={{ width: "50%" }}
        onClick={addtocart}
      >
        Add to Cart
      </button>
    </li>
  );
});
export default Example;
