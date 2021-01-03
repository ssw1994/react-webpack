import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddressCard from "./address-card";
import { addresses } from "../../store/selectors/address.selector";
import { updateAddress } from "../../store/actions/util.action";
import {
  fetchAllAddress,
  selectAddress,
} from "../../store/actions/address.action";
import { loggedUser } from "../../store/selectors/user.selector";
import "./address.scss";
export default function SavedAddress() {
  const allAddress = useSelector(addresses);
  const user = useSelector(loggedUser);
  const dispatch = useDispatch();

  const setAddress = function (e, address) {
    e && e.stopPropagation();
    dispatch(selectAddress(address));
    dispatch(updateAddress(address));
  };

  return (
    <div className="saved-address row">
      {allAddress.map((address, index) => {
        return (
          <div
            className="col-md-3 col-sm-3 col-xs-12"
            key={index}
            onClick={(e) => setAddress(e, address)}
          >
            <AddressCard address={address} />
          </div>
        );
      })}
    </div>
  );
}
