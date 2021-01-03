import { random } from "faker";

export class FormGroup {
  _controls = null;
  constructor(controls) {
    this.controls = controls;
  }

  set controls(controls) {
    this._controls = controls;
  }

  get values() {
    let obj = {};
    Object.keys(this.controls).forEach(
      (key) => (obj[key] = this.controls[key].value)
    );
    return obj;
  }

  get controls() {
    return this._controls;
  }
}

export class FormControl {
  _value;
  _validator;
  _valid;
  _errors = null;
  config = {
    placehoder: "",
  };
  constructor(value, validator, config = null) {
    this.value = value;
    this.validator = validator;
    this.config = config;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  set validator(validator) {
    this._validator = validator;
  }

  get validator() {
    return this._validator;
  }

  set valid(valid) {
    this._valid = valid;
  }

  get valid() {
    this._valid;
  }

  set config(config) {
    this.config = config;
  }

  get config() {
    return this._config;
  }

  hasError(error) {
    if (this.error && this.error.hasOwnProperty(error) && this.error[error])
      return true;
    return false;
  }

  checkValidation() {
    Object.keys(this.validator).forEach((error) => {});
  }
}

export class FormArray {
  constructor() {}
}

export function InputProps(
  value = "",
  id = `input_${Date.now()}`,
  placeholder = "Enter here",
  onChange = (e) => {},
  validations = {},
  touched = false,
  rest = undefined
) {
  return {
    value,
    id,
    placeholder,
    onChange,
    validations,
    touched,
    rest,
  };
}
