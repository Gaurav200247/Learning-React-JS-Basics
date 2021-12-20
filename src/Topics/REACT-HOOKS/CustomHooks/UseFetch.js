import { useState, useEffect } from "react";

export const UseFetch = (url) => {
  const [product, setProduct] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { isloading, product };
};
