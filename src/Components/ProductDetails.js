import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Card from "./Card";

const DetailView = () => {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <>
      <h3 className="m-3"> Detail View</h3>
      <div>
        {!selectedProduct ? (
          <h3 className="text-center m-5 p-3">
            Select a product to see the details.
          </h3>
        ) : (
          /* selectedProduct is sent as a prop to Card component*/
          <Card selectedProduct={selectedProduct} />
        )}
      </div>
    </>
  );
};

export default DetailView;
