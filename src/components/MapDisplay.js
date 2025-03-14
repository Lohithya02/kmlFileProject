import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapDisplay = ({ geoJsonData }) => {
  return (
    <div>
      <h3></h3>
      <div style={{ height: "500px" }}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {geoJsonData && <GeoJSON data={geoJsonData} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapDisplay;
