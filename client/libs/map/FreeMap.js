import React from "react";

const mapStyle = {
  street: "mapbox://styles/mapbox/streets-v11",
  outdoors: "mapbox://styles/mapbox/outdoors-v11",
  light: "mapbox://styles/mapbox/light-v10",
  dark: "mapbox://styles/mapbox/dark-v10",
  satelite: "mapbox://styles/mapbox/satellite-v9",
  satelite_street: "mapbox://styles/mapbox/satellite-streets-v11",
  navigation_day: "mapbox://styles/mapbox/navigation-preview-day-v4",
  navigatio_night: "mapbox://styles/mapbox/navigation-preview-night-v4",
  navigation_guide: "mapbox://styles/mapbox/navigation-guidance-day-v4",
  navigatio_night: "mapbox://styles/mapbox/navigation-guidance-night-v4",
};
class FreeMap extends React.Component {
  map = null;
  constructor(props) {
    super(props);
    this.state = {};
    this.setState(this.state,)
  }

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2FjaG4iLCJhIjoiY2tlZm9nb2JtMGFpajJ3bHA1YjVhbWNxdSJ9.GBkYretSsvSro_jHtmBsxA";
    this.map = new mapboxgl.Map({
      container: "map",
      style: mapStyle.street,
    });
    this.updateMarkers();
  }

  updateMarkers() {
    const validLatitude = (latitude) =>
      latitude && parseFloat(latitude) > -90 && parseFloat(latitude) < 90;
    const validLongitude = (longitude) =>
      longitude && parseFloat(longitude) > -180 && parseFloat(longitude) < 180;
    if (this.props.markers) {
      this.props.markers
        .filter(
          (marker) =>
            validLatitude(marker.latitude) && validLongitude(marker.longitude)
        )
        .forEach((marker) =>
          new mapboxgl.Marker()
            .setLngLat([
              parseFloat(marker.longitude),
              parseFloat(marker.latitude),
            ])
            .addTo(this.map)
        );
    }
  }

  componentDidUpdate() {}

  render() {
    return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
  }
}

export default FreeMap;
