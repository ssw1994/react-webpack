import React, { useEffect, useState } from "react";
import { InputProps } from "../js/form";
import { Input } from "../../libs/formcontrols/formcontrol";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useFormGroup } from "../js/hooks";
import { login } from "../../store/actions/user.action";
import { isLoggedIn } from "../../store/selectors/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { showHideFooter } from "../../store/actions/util.action";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import "./login.scss";
export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isLoggedIn);
  const [showPassword, togglePassword] = useState(false);
  const handleClickShowPassword = (e) => {
    e && e.stopPropagation();
    togglePassword(!showPassword);
  };

  const [user, updateUser] = useFormGroup({
    username: InputProps("", "username", "Username", (e) => updateUser(e), {
      required: true,
    }),
    password: InputProps(
      "",
      "password",
      "Password",
      (e) => updateUser(e),
      {
        required: true,
      },
      false
    ),
  });
  const logMeIn = function (e) {
    e && e.stopPropagation();
    let param = {
      username: user.username.value,
      password: user.password.value,
      userId: 1,
    };
    dispatch(login(param));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(showHideFooter({ show: true }));
      history.push("/home");
    }
  });

  return (
    <div className="login">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <Input {...user.username} />
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <Input {...user.password} type={showPassword ? "text" : "password"} />
          <span
            onClick={(e) => handleClickShowPassword(e)}
            className="pass-icon"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </span>
        </div>
        <div
          className="col-md-12 col-sm-12 col-xs-12"
          style={{ textAlign: "center" }}
        >
          <Button onClick={(e) => logMeIn(e)}>Login</Button>
        </div>
      </div>
    </div>
  );
}
