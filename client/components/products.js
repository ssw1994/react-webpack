import React, { useEffect } from "react";
import Product from "../libs/product/product";
import { connect } from "react-redux";
import { fetchProducts, selectProduct } from "../store/actions/product.action";
import { setSideBarType } from "../store/actions/util.action";
import ProductInfo from "../libs/product_info/product_info";
import ProductSearch from "../libs/search/productsearch";
import {
  allProducts,
  columnsToSearch,
  keyWord,
} from "../store/selectors/product.selector";
import "../css/product.scss";
import { sidebarTypes } from "../libs/js/model";

const products = (props) => {
  useEffect(() => {
    if (!props.products || props.products.length <= 0) {
      props.fetchProducts();
    }
    props.sidebar({ sidebarType: sidebarTypes.categories });
  }, []);

  const openDialog = (e, product) => {
    e && e.stopPropagation();
    props?.selectProduct(product);
  };

  const filterProducts = function () {
    if (!!props.keyWord && props.columnsToSearch.length > 0) {
      let returnArray = [];
      let keyword = props.keyWord;
      let availableProducts = props.products;
      let propertiesToSearchFor = props.columnsToSearch;
      objectLoop: for (
        let productIndex = 0;
        productIndex < availableProducts.length;
        productIndex++
      ) {
        let product = availableProducts[productIndex];
        propertyLoop: for (
          let propertyIndex = 0;
          propertyIndex < propertiesToSearchFor.length;
          propertyIndex++
        ) {
          let property = propertiesToSearchFor[propertyIndex];
          if (
            !!product[property] &&
            (product[property] === keyword ||
              (typeof product[property] === "string" &&
                product[property]
                  .toLowerCase()
                  .includes(keyword.toLowerCase())))
          ) {
            returnArray.push(product);
            continue objectLoop;
          }
        }
      }
      return returnArray;
    } else {
      return props.products;
    }
  };

  return (
    <div className="home_products">
      <div className="row product-list">
        {props?.selectedProduct ? <ProductInfo /> : null}
        <ProductSearch />
        {filterProducts().map((product, index) => {
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: allProducts(state),
    keyWord: keyWord(state),
    columnsToSearch: columnsToSearch(state),
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
    sidebar: (payload) => {
      dispatch(setSideBarType(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(products);
