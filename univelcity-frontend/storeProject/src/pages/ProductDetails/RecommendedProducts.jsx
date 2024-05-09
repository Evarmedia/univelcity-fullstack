// RecommendedProducts.jsx

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const RecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?_limit=4") // Fetch a limited number of products
      .then((response) => response.json())
      .then((data) => {
        setRecommendedProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching recommended products:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {recommendedProducts.map((product) => (
        <div key={product.id} className="flex justify-center p-4">
            <ProductCard product={product} />
          
        </div>
      ))}
    </div>
  );
};

export default RecommendedProducts;
