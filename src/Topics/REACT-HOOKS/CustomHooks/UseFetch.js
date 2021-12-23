import { useState, useEffect, useCallback } from "react";

export const UseFetch = (url) => {
  const [product, setProduct] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { isloading, product };
};
