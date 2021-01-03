import React from "react";
import ContactUs from "../libs/contactus/contactus";
import "../css/contact.scss";
import FreeMap from "../libs/map/FreeMap";
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="contactus">
        <ContactUs showMap={true} />
      </div>
    );
  }
}

export default Contact;
