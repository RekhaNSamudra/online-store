import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ListItem from "./ListItem";
import styles from "./Components.module.css";

const ProductList = () => {
  const { products, fetchProductDetails } = useContext(ProductContext);

  return (
    <>
      <h3 className="m-3">Master View</h3>
      <div className={styles.scrollableList}>
        {products.map((item) => {
          return (
            <ul
              className="list-group"
              key={item.id}
              onClick={() => fetchProductDetails(item.id)}
            >
              {/* item is sent as a prop to ListItem Component */}
              <ListItem item={item} />
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
