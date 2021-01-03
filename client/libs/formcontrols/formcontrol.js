import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import SelectInput from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));
export const inputStyleMap = {
  filled: "filled",
  outlined: "outlined",
  standard: "standard",
};

const defaultInputStyle = inputStyleMap.standard;

export function Input({
  value,
  error,
  placeholder,
  onChange,
  name,
  id,
  errors,
  valid,
  touched,
  rest,
  type,
}) {
  const classes = useStyles();
  let obj = {
    id: id,
    label: placeholder,
    value: value,
    helperText: error?.errorMessage,
    variant: defaultInputStyle,
    onChange: onChange,
    name: name,
    error: !(valid === "true") && touched,
    type: type ? type : "text",
  };

  if (!!rest && rest.multiline) obj["multiline"] = rest.multiline;
  if (!!rest && rest.rows) obj["rows"] = rest.rows;
  if (!!rest && rest.variant) obj["variant"] = rest.variant;
  if (!!rest && rest.endAdornment) obj["endAdornment"] = rest.endAdornment;
  return (
    <div className={classes.root}>
      <TextField {...obj} />
    </div>
  );
}
export function Select({
  value,
  error,
  placeholder,
  onChange,
  name,
  id,
  errors,
  valid,
  touched,
  rest,
  type,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={id}>{placeholder}</InputLabel>
      <SelectInput
        labelId={id}
        id={id}
        name={id}
        open={open}
        onClose={(e) => setOpen(false)}
        onOpen={(e) => setOpen(true)}
        value={value}
        onChange={onChange}
      >
        {rest.list.map((item, index) => {
          return (
            <MenuItem value={item[rest.id]} key={index}>
              {item[rest.name]}
            </MenuItem>
          );
        })}
      </SelectInput>
    </FormControl>
  );
}
