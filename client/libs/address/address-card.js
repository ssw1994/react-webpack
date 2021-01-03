import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import "./address.scss";
import { useSelector } from "react-redux";
import { selectedAddress } from "../../store/selectors/address.selector";
export default function AddressCard({ address }) {
  const selected = useSelector(selectedAddress);
  const className = `a-card ${
    selected && selected.id === address.id ? "selected" : ""
  }`;
  return (
    <div className={className}>
      <Card className="b-shadow">
        <CardHeader title={address?.zipCode} />
        <CardContent>
          <div>{address?.streetName}</div>
          <div>{address?.streetAddress}</div>
          <div>{address?.city}</div>
          <div>{address?.state}</div>
          <div>{address?.country}</div>
        </CardContent>
      </Card>
    </div>
  );
}
