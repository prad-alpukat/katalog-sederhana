import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Product() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  // function get data API
  const getProduct = async () => {
    const response = await fetch("https://dummyjson.com/products/" + id);
    try {
      const dataTemp = await response.json();
      setData(dataTemp);
      console.log(dataTemp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (data !== null) {
    return (
      <div>
        <h1>{data.title}</h1>
        {data.images.map((gambar, index) => {
          return <img key={index} className="h-40 w-auto" src={gambar} alt="" />;
        })}
      </div>
    );
  }
}
