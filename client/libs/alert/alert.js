import { Button } from "@material-ui/core";
import React from "react";
import { buttonType } from "../js/model";
import Button from "@material-ui/core/Button";
export default function Alert({ config }) {
  const getButtons = () => {
    switch (config.buttonType) {
      case buttonType.Ok:
        return <Button onClick={config?.callBack("Ok")}>Ok</Button>;
      case buttonType.OkCancel:
        return (
          <>
            <Button onClick={config?.callBack("Ok")}>Ok</Button>
            <Button onClick={config?.callBack("cancel")}>Cancel</Button>
          </>
        );
      case buttonType.Cancel:
        return <Button onClick={config?.callBack("cancel")}>Cancel</Button>;
      default:
        return <Button onClick={config?.callBack("Ok")}>Ok</Button>;
    }
  };
  return (
    <div className="row alert-box">
      <div className="col-md-12 col-sm-12 col-xs-12 title">{config.title}</div>
      <div className="col-md-12 col-sm-12 col-xs-12 message">
        {config.message}
      </div>
      <div className="col-md-12 col-sm-12 col-xs-12 buttons">
        {getButtons()}
      </div>
    </div>
  );
}
