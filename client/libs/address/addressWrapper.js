import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NewAddress from "./address";
import SavedAddress from "./saved-address";
const TabMap = {
  NewAddress: 0,
  SavedAddress: 1,
};
export default function AddressWrapper() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const GetAddress = () => {
    switch (value) {
      case TabMap.NewAddress:
        return <NewAddress />;
      case TabMap.SavedAddress:
        return <SavedAddress />;
    }
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="New Address" />
          <Tab label="Saved Address" />
        </Tabs>
      </Paper>
      <div className="details">{GetAddress()}</div>
    </div>
  );
}
