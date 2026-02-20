import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/ui/Card";

function Shop() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8144/api/list");
      setData(res.data.products);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="min-h-screen px-6 py-6">
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      {data.length > 0 ? (
        <div className="grid grid-cols-4 gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center">
              <Card
                image_url={item.image_url}
                product_name={item.name}
                product_price={item.price}
                product_rating={item.rating}
              />
            </div>
          ))}
        </div>
      ) : (
        !error && (
          <p className="text-center text-gray-400 font-semibold mt-20">
            Loading...
          </p>
        )
      )}
    </div>
  );
}

export default Shop;