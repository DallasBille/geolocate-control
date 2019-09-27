import React from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 40.7250863,
      longitude: -73.9773608,
      zoom: 12
    }
  };

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken="pk.eyJ1IjoiZGFsbGFzYmlsbGUiLCJhIjoiY2p6OHR1aGhoMDZnZDNjbXB2ZWZlcXFudCJ9.gjjYkOkTtA-Qe1jhbvF2gQ"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </ReactMapGL>
      </div>
    );
  }
}

export default App;
