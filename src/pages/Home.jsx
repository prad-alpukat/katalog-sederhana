import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  // function get data API
  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    try {
      const dataTemp = await response.json();
      setData(dataTemp);
      console.log(dataTemp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="bg-gray-700">
        <div className="container mx-auto text-white">
          {data
            ? data.products.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <h1>
                    {index + 1}. {item.title}
                  </h1>
                  <a className="text-purple-500" href={"/" + item.id}>
                    detail
                  </a>
                </div>
              ))
            : "tidak ada produk"}
        </div>
      </div>
    </>
  );
}
