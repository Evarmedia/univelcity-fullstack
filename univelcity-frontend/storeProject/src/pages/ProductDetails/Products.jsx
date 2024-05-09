// import React from 'react'
import { useEffect, useState } from "react";
import fetchProduct from "../ProductDetails/fetchProducts";
import ProductCard from "./ProductCard";
const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct()
      .then((productData) => {
        setProduct(productData);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        <>
        Error fetching product data
        </>
      });
  }, []);

  return (
    <div>
      <div className="flex gap-10 justify-start flex-wrap">
        <div className="mx-auto mt-8">
          <h1 className="text-3xl font-semibold mb-4">See Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
