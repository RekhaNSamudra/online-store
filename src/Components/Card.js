import React from "react";
import { capitalizeFirstLetter } from "../Utility/utils";

const Card = ({ selectedProduct }) => {
  return (
    <div className="card">
      <img
        src={selectedProduct.image}
        className="card-img-top"
        alt={selectedProduct.title}
        style={{ maxHeight: "300px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{selectedProduct.title}</h5>
        <p className="card-text">{selectedProduct.description}</p>
        <h6 className="card-subtitle mb-2 text-muted">
          Price: ${selectedProduct.price}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Category: {capitalizeFirstLetter(selectedProduct.category)}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Rating: {selectedProduct.rating.rate} / 5 (
          {selectedProduct.rating.count} reviews)
        </h6>
      </div>
    </div>
  );
};

export default Card;
