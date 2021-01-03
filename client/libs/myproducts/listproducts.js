import React, { useEffect } from "react";
import Product from "../../libs/product/product";
import { useSelector } from "react-redux";
import { myProducts } from "../../store/selectors/product.selector";
export default function ListProducts() {
  const products = useSelector(myProducts);
  return (
    <div className="row product-list">
      {products?.map((product, index) => {
        return (
          <div className="col-md-3 col-sm-4 col-xs-12 product" key={index}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
}
