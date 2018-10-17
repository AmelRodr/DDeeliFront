import React, {Component} from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Mapa extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC-aYnEloGmYbFsDo04dLnuPtJdA-6V36c"
})(Mapa);
