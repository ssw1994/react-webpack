import React from "react";
class FreeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2FjaG4iLCJhIjoiY2tlZm9nb2JtMGFpajJ3bHA1YjVhbWNxdSJ9.GBkYretSsvSro_jHtmBsxA";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
    });
  }

  render() {
    return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
  }
}

export default FreeMap;
