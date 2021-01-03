import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSideBarType } from "../store/actions/util.action";
import { sidebarTypes } from "../libs/js/model";
import Products from "./products";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSideBarType({ sidebarType: sidebarTypes.categories }));
    return () => {
      dispatch(setSideBarType({ sidebarType: null }));
    };
  }, []);

  return <Products />;
}
