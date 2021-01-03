import React, { useEffect, useState } from "react";
import { useFormGroup } from "../js/hooks";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Card from "@material-ui/core/Card";
import {
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { InputProps } from "../js/form";
import { Input } from "../../libs/formcontrols/formcontrol";
import "./register.scss";
import { Validations } from "../js/model";
export default function Register() {
  const [user, updateUser] = useFormGroup({
    username: InputProps("", "username", "Username", (e) => updateUser(e), {
      required: true,
    }),
    email: InputProps("", "email", "Email", (e) => updateUser(e), {
      required: true,
    }),
    mobile: InputProps("", "mobile", "Mobile", (e) => updateUser(e), {
      required: true,
    }),
    company: InputProps("", "company", "Company", (e) => updateUser(e), {
      required: true,
    }),
    password: InputProps("", "password", "Password", (e) => updateUser(e), {
      required: true,
    }),
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedUserType, setUserType] = useState("user");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const register = function (e) {
    e && e.stopPropagation();
    console.log(user);
  };

  useEffect(() => {
    console.log(user);
  });

  const getError = function (control) {
    let errors = control.errors;
    if (errors && Object.keys(errors).length > 0) {
      let errorMessage = "";
      Object.keys(errors).forEach((error) => {
        switch (error) {
          case Validations.Required:
            errorMessage = "required";
            break;
          case Validations.MaxLength:
          case Validations.MinLength:
          case Validations.Pattern:
            errorMessage = "Invalid";
            break;
        }
      });
      return { errorMessage: errorMessage };
    } else {
      return null;
    }
  };

  const createFormForCustomer = function () {
    return (
      <div className="row">
        {Object.keys(user).map((key, index) => {
          let control = user[key];
          return (
            <div className="col-12" key={index}>
              <Input {...control} error={getError(control)} />
            </div>
          );
        })}
      </div>
    );
  };

  const createFormForVendor = function () {
    return (
      <div className="row">
        {Object.keys(user).map((key, index) => {
          let control = user[key];
          return (
            <div className="col-12" key={index}>
              <Input {...control} error={getError(control)} />
            </div>
          );
        })}
      </div>
    );
  };

  function displayRegistrationFormForVendor() {
    return (
      <>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            {createFormForVendor()}
            <div className="col-12">
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={"Confirm Password"}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={(e) => setShowRegistrationForm(false)}
            className="action-btns"
          >
            Back
          </Button>
          <Button onClick={(e) => register(e)}>Register</Button>
        </div>
      </>
    );
  }

  function displayRegistrationFormForCustomer() {
    return (
      <>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            {createFormForCustomer()}
            <div className="col-12">
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={"Confirm Password"}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={(e) => setShowRegistrationForm(false)}
            className="action-btns"
          >
            Back
          </Button>
          <Button onClick={(e) => register(e)}>Register</Button>
        </div>
      </>
    );
  }

  function handleChange(event) {
    setUserType(event.target.value);
  }

  function userTypes() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="row user-types">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <input
              type="radio"
              id="user"
              value="user"
              name="usertype"
              checked={selectedUserType === "user"}
              onChange={(e) => handleChange(e)}
              style={{ display: "none" }}
            />
            <label
              className={
                "card vendor-card " +
                (selectedUserType === "user" ? "active" : "")
              }
              htmlFor="user"
            >
              <PermIdentityIcon />
              <span>Customer</span>
            </label>
            <input
              type="radio"
              id="vendor"
              value="vendor"
              name="usertype"
              checked={selectedUserType === "vendor"}
              onChange={(e) => handleChange(e)}
              style={{ display: "none" }}
            />
            <label
              className={
                "card vendor-card " +
                (selectedUserType === "vendor" ? "active" : "")
              }
              htmlFor="vendor"
            >
              <AccountBalanceIcon />
              <span>Vendor</span>
            </label>
          </div>
          <div
            className="col-md-12 col-sm-12 col-xs-12"
            style={{ textAlign: "center" }}
          >
            <Button
              onClick={(e) => setShowRegistrationForm(true)}
              className="action-btns"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register">
      {showRegistrationForm
        ? selectedUserType === "user"
          ? displayRegistrationFormForCustomer()
          : displayRegistrationFormForVendor()
        : userTypes()}
    </div>
  );
}
