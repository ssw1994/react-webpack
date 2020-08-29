import React from "react";
import "./product.scss";
export default function Product({ product }) {
  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url('${product.images[0]}')` }}
      ></div>
      <div className="product-name">
        <span>{product.productName}</span>
      </div>
      <div className="product-description">{product.productAdjective}</div>
      <div className="product-price">{product.price}</div>
    </div>
  );
}
