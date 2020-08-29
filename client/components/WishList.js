import React from "react";
import { connect } from "react-redux";
class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>WishList</h1>;
  }
}

export default connect(null, null)(WishList);
