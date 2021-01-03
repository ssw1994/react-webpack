import React, { useEffect, useState } from "react";
import { InputProps } from "../js/form";
import { useFormGroup } from "../js/hooks";
import { Input, Select } from "../formcontrols/formcontrol";
import { Button } from "@material-ui/core";
import Product from "../../libs/product/product";
import { loggedUser } from "../../store/selectors/user.selector";
import "./createproduct.scss";
import { useSelector, useDispatch } from "react-redux";
import * as moment from "moment";
import { categories } from "../../store/selectors/util.selector";
import { saveproduct } from "../../store/actions/product.action";
export default function CreateProduct() {
  const dispatch = useDispatch();
  const user = useSelector(loggedUser);
  const categoryies = useSelector(categories);
  const [productForm, setProductForm] = useFormGroup({
    productName: InputProps(
      "",
      "productName",
      "Product Name",
      (e) => setProductForm(e),
      { required: true },
      false
    ),
    price: InputProps(
      "",
      "price",
      "Price",
      (e) => setProductForm(e),
      { required: true },
      false
    ),
    productAdjective: InputProps(
      "",
      "productAdjective",
      "description",
      (e) => setProductForm(e),
      { required: true },
      false
    ),
    productMaterial: InputProps(
      "",
      "productMaterial",
      "Material",
      (e) => setProductForm(e),
      { required: true },
      false
    ),
    department: InputProps(
      "",
      "department",
      "Category",
      (e) => setProductForm(e),
      { required: true },
      false,
      {
        list: categoryies,
        name: "category",
        id: "id",
      }
    ),
    product: InputProps(
      "",
      "product",
      "Product Type",
      (e) => setProductForm(e),
      { required: true },
      false
    ),
  });

  const getProductPreview = () => {
    return {
      metadata: {
        ownerId: user.userId,
        owner: user.username,
        company: user?.company,
        dataCreated: moment(),
      },
      images: [
        "http://lorempixel.com/640/480/food",
        "http://lorempixel.com/640/480/sports",
        "http://lorempixel.com/640/480/nightlife",
        "http://lorempixel.com/640/480/fashion",
        "http://lorempixel.com/640/480/cats",
      ],
      color: "orchid",
      department: productForm.department.value,
      productName: productForm.productName.value,
      price: productForm.price.value,
      productAdjective: productForm.productAdjective.value,
      productMaterial: productForm.productMaterial.value,
      product: productForm.product.value,
    };
  };

  const createProductForm = function () {
    console.log(categoryies);
    return (
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="row">
            {Object.keys(productForm).map((key, index) => {
              let control = productForm[key];
              return key === "department" ? (
                <div key={key + index} className="col-6">
                  <Select {...control} />
                </div>
              ) : (
                <div className="col-6" key={index}>
                  <Input {...control} />
                </div>
              );
            })}
            <div className="col-12 btn-submit center-items">
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => saveProduct(e)}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <Product product={getProductPreview()} />
        </div>
      </div>
    );
  };

  const saveProduct = function (event) {
    event && event.stopPropagation();
    const param = getProductPreview();
    dispatch(saveproduct(param));
  };

  return <div className="cp">{createProductForm()}</div>;
}
