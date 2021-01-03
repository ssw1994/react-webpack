import React, { useEffect } from "react";
import Register from "../register/register";
import Login from "../login/login";
import { CardContent, Card } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./onboarding.scss";
import { useDispatch } from "react-redux";
import { showHideFooter } from "../../store/actions/util.action";
import { closedrawer } from "../../store/actions/drawer.action";
const TabMap = {
  Login: 0,
  Register: 1,
};
export default function Onboard() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(closedrawer());
    dispatch(showHideFooter({ show: false }));
  }, []);

  const GetWindow = function () {
    switch (value) {
      case TabMap.Login:
        return <Login />;
      case TabMap.Register:
        return <Register />;
    }
  };
  return (
    <div className="boarding">
      <div className="box b-shadow">
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </Paper>
        <div>
          <Card>
            <CardContent>{GetWindow()}</CardContent>
          </Card>
          <div>
            <Card>
              <CardContent>
                {value === TabMap.Login ? (
                  <div style={{ textAlign: "center" }}>
                    Don't have accounts ? &nbsp;
                    <u>
                      <strong onClick={(e) => handleChange(e, 1)}>
                        Sign up
                      </strong>
                    </u>
                    &nbsp; here
                  </div>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    Already have account ? &nbsp;
                    <u>
                      <strong onClick={(e) => handleChange(e, 0)}>Login</strong>
                    </u>
                    &nbsp; here
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
