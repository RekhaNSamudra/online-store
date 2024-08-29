import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Product Context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log("products: ", response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setSelectedProduct(response.data);
      console.log("selected-item: ", response.data.title);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, selectedProduct, fetchProductDetails }}
    >
      {children}
    </ProductContext.Provider>
  );
};
