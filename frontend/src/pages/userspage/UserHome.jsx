import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";

const UserHome = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://project-backend-n78k.onrender.com/");
      console.log(res.data.products);
      setProductData(res.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <UserNav />
      <div className="container mx-auto px-4 py-8">
        {productData.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Loading products...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productData.map((elem) => (
              <div
                key={elem._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={elem.image}
                    alt={elem.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <Link
                    to={`/products/detail/${elem._id}`}
                    className="block text-lg font-semibold text-blue-600 hover:underline mb-2"
                  >
                    {elem.title}
                  </Link>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {elem.description}
                  </p>
                  <h2 className="text-gray-800 font-bold text-md">Price: ${elem.price}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserHome;
