import React from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import { Input } from "../formcontrols/formcontrol";
import Map from "../map/map";
import FreeMap from "../map/FreeMap";
class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "Sachin",
      lastname: "Waghmare",
      showMap: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckBoxChange(e) {
    this.setState({ [e.target.name]: e.target.checked });
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
          <div className="row">
            <div className={colMap}>
              <Input
                value={this.state.firstname}
                onChange={this.handleChange}
                placeholder="Firstname"
                name="firstname"
              ></Input>
            </div>
            <div className={colMap}>
              <Input
                value={this.state.lastname}
                onChange={this.handleChange}
                placeholder="Lastname"
                name="lastname"
              ></Input>
            </div>
            <div className={colMap}></div>
            <div className={colMap}></div>
            <div className={colMap}></div>
            <div className={colMap}></div>
          </div>
        </div>
        {map ? (
          <div className={`${classMap} map`}>
            <FreeMap />
          </div>
        ) : null}
        <div
          className="col-md-12 col-sm-12 col-xs-12"
          style={{ textAlign: "center" }}
        >
          <Button> Save Address </Button>
        </div>
      </div>
    );
  }
}

export default Address;
