import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import styles from "./Components.module.css";

const Layout = () => {
  return (
    <>
      <div className="container mt-5">
        <div className={`row ${styles.layout}`}>
          <div className="col-lg-6 col-sm-12 ">
            <ProductList />
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <ProductDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
