import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../formcontrols/formcontrol";
import { searchForProduct } from "../../store/actions/product.action";
import "./productsearch.scss";
export default function ProductSearch() {
  let dispatch = useDispatch();
  const [placeholder, setPlaceholder] = useState("Search For Product");
  useEffect(() => {
    dispatch(searchForProduct(searchFor));
  });
  const [searchFor, updateSearchFor] = useState("");
  return (
    <div className="search-for-product">
      <input
        value={searchFor}
        onChange={(e) => updateSearchFor(e.target.value)}
        placeholder={placeholder}
        onFocus={(e) => setPlaceholder("")}
        onBlur={(e) => setPlaceholder("Search For Product")}
      />
    </div>
  );
}
