import React, { useState, useEffect } from "react";
import productservice from "../services/product.service";
import Product from "../libs/product/product";
import { connect } from "react-redux";
import { fetchProducts, selectProduct } from "../store/actions/product.action";
import ProductInfo from "../libs/product_info/product_info";
import "../css/product.scss";

const products = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const openDialog = (e, product) => {
    e && e.stopPropagation();
    props?.selectProduct(product);
  };

  return (
    <div className="row product-list">
      {props?.selectedProduct ? <ProductInfo /> : null}
      {props?.products?.data.map((product, index) => {
        return (
          <div
            className="col-md-3 col-sm-4 col-xs-12 product"
            key={index}
            onClick={(e) => openDialog(e, product)}
          >
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    selectedProduct: state.productReducer.selectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (payload = null) => {
      dispatch(fetchProducts(payload));
    },
    selectProduct: (payload = null) => {
      dispatch(selectProduct(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(products);
