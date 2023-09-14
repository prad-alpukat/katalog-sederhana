import { useEffect } from "react";

export default function Home() {
  // function get data API
  const getProducts = () => {
    console.log("getproducts");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <h1>Home</h1>;
}
