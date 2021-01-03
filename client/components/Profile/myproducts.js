import React from "react";
import CreateProduct from "../../libs/myproducts/createproduct";
import ListProduct from "../../libs/myproducts/listproducts";
import UploadProduct from "../../libs/myproducts/uploadproduct";
import { CardContent, Card } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "../../css/profile.scss";
export default function MyProducts() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const GetWindow = function () {
    switch (value) {
      case 0:
        return <ListProduct />;
      case 1:
        return <CreateProduct />;
      case 2:
        return <UploadProduct />;
    }
  };
  return (
    <div className="my-products">
      <div className="box">
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
          >
            <Tab label="My Products" />
            <Tab label="Create Product" />
            <Tab label="Upload Products" />
          </Tabs>
        </Paper>
        <div>
          <Card>
            <CardContent>{GetWindow()}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
