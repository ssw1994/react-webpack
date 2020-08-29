import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));
const inputStyleMap = {
  filled: "filled",
  outlined: "outlined",
  standard: "",
};

const defaultInputStyle = inputStyleMap.outlined;

export function Input({ value, error, placeholder, onChange, name }) {
  const classes = useStyles();
  let obj = {
    id: "outlined-error-helper-text",
    label: placeholder,
    value: value,
    helperText: error?.errorMessage,
    variant: defaultInputStyle,
    onChange: onChange,
    name: name,
  };
  if (error?.hasError) {
    obj[error] = true;
  }
  return (
    <div className={classes.root}>
      <TextField {...obj} />
    </div>
  );
}
