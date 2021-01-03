import { useState } from "react";
import { Validations } from "./model";
export function useFormGroup(initialState) {
  const [controls, setValues] = useState(initialState);

  const isValid = function (control) {
    if (control.validations && Object.keys(control.validations).length > 0) {
      let validations = control.validations;
      let errors = {};
      Object.keys(control.validations).forEach((validation) => {
        switch (validation) {
          case Validations.Required:
            if (
              !control.value ||
              control.value === "" ||
              control.value === null ||
              control.value === undefined
            )
              errors[Validations.Required] = false;
            break;
          case Validations.Pattern:
            if (validations[validation] instanceof RegExp)
              if (!validations[validations].test(control.value))
                errors[Validations.Pattern] = false;
            break;
          case Validations.MaxLength:
            if (
              typeof control.value === "string" &&
              control.value.length > Validations[validation]
            )
              errors[Validations.MaxLength] = false;
            break;
          case Validations.MinLength:
            if (
              typeof control.value === "string" &&
              control.value.length < Validations[validation]
            )
              errors[Validations.MinLength] = false;
            break;
          default:
            console.error("Invalid validation");
        }
      });
      let valid = Object.keys(errors).length === 0 ? "true" : "false";
      return {
        ...control,
        errors,
        valid,
      };
    } else {
      return true;
    }
  };

  const checkValidatityofAllControls = function (ctrls) {
    let controls = {};
    Object.keys(ctrls).forEach((x) => {
      controls[x] = isValid(ctrls[x]);
    });
    return controls;
  };

  return [
    controls,
    function (e) {
      controls[e.target.id || e.target.name].value = e.target.value;
      controls[e.target.id || e.target.name].touched = true;
      setValues(checkValidatityofAllControls(controls));
    },
  ];
}
