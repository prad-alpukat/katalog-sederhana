import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  // function get data API
  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    try {
      const dataTemp = await response.json();
      setData(dataTemp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <h1>Home</h1>;
}
