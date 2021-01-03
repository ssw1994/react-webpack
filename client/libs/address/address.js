import React from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";
import { Input } from "../formcontrols/formcontrol";
import Map from "../map/map";
import FreeMap from "../map/FreeMap";
import { FormGroup, FormControl } from "../../libs/js/form";
import { updateAddress } from "../../store/actions/util.action";
import { getAddress } from "../../store/selectors/util.selector";
import "./address.scss";
class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      addressForm: this.getAddressForm(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.saveAddress = this.saveAddress.bind(this);
  }

  createAddressForm() {
    let map = this.state.showMap;
    let colMap = map
      ? "col-md-12 col-sm-12 col-xs-12"
      : "col-md-6 col-sm-6 col-xs-12";
    let address = this.state.addressForm.controls; //this.props.address;
    return Object.keys(address).map((key, index) => {
      let control = this.state.addressForm.controls[key];
      return (
        <div className={colMap} key={index}>
          <Input
            value={control.value}
            onChange={this.handleChange}
            name={key}
            {...control.config}
          ></Input>
        </div>
      );
    });
  }

  getAddressForm() {
    let address = this.props.address;
    let addressForm = new FormGroup({
      firstName: new FormControl(
        address.firstName,
        { required: true },
        { placeholder: "First Name" }
      ),
      lastname: new FormControl(
        address.lastName,
        { required: true },
        { placeholder: "Last Name" }
      ),
      addressLine_1: new FormControl(
        address.streetName,
        { required: true },
        { placeholder: "Street Name" }
      ),
      addressLine_2: new FormControl(
        address.streetAddress,
        { required: true },
        { placeholder: "Street Address " }
      ),
      city: new FormControl(
        address.city,
        { required: true },
        { placeholder: "City" }
      ),
      district: new FormControl(
        address.district,
        { required: true },
        { placeholder: "District" }
      ),
      pinCode: new FormControl(
        address.zipCode,
        { required: true },
        { placeholder: "Zip Code" }
      ),
      state: new FormControl(
        address.state,
        { required: true },
        { placeholder: "State" }
      ),
      country: new FormControl(
        address.country,
        { required: true },
        { placeholder: "Country" }
      ),
      contactNo: new FormControl(
        address.contactNo,
        { required: true },
        { placeholder: "Contact Number" }
      ),
      email: new FormControl(
        address.email,
        { required: true },
        { placeholder: "Email" }
      ),
    });
    return addressForm;
  }

  saveAddress(e) {
    e && e.stopPropagation();
    console.log(this.state.addressForm.values);
  }

  handleChange(e) {
    let addressForm = this.state.addressForm;
    addressForm.controls[e.target.name].value = e.target.value;
    this.setState({ addressForm: addressForm });
    //this.props.updateAddress({ [e.target.name]: e.target.value });
  }

  handleCheckBoxChange(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  componentWillUnmount() {
    let address = this.state.addressForm.values;
    this.props.updateAddress({ ...this.props.address, address });
  }

  render() {
    let map = this.state.showMap;
    let classMap = map
      ? "col-md-6 col-sm-6 col-xs-12"
      : "col-md-12 col-sm-12 col-xs-12";
    let colMap = map
      ? "col-md-12 col-sm-12 col-xs-12"
      : "col-md-6 col-sm-6 col-xs-12";
    return (
      <div className="row address">
        <div
          className="col-md-12 col-sm-12 col-xs-12"
          style={{ textAlign: "right" }}
        >
          <label>Show Map {this.state.showMap}</label>
          <Switch
            checked={this.state.showMap}
            onChange={this.handleCheckBoxChange}
            name="showMap"
          />
        </div>
        <div className={`${classMap}`}>
          <div className="row">{this.createAddressForm()}</div>
        </div>
        {map ? (
          <div className={`${classMap} map`}>
            <FreeMap markers={[this.props.address]} />
          </div>
        ) : null}
        <div
          className="col-md-12 col-sm-12 col-xs-12"
          style={{ textAlign: "center" }}
        >
          <Button onClick={this.saveAddress}> Save Address </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    address: getAddress(state),
  };
};

const mapPropsToDispatch = (dispatch) => {
  return {
    updateAddress: (payload) => dispatch(updateAddress(payload)),
  };
};

export default connect(mapStateToProps, mapPropsToDispatch)(Address);
