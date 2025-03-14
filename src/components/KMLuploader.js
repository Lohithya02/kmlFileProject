import React, { useState } from "react";
import * as toGeoJSON from "@mapbox/togeojson";

const KMLUploader = ({ onUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const parser = new DOMParser();
      const kmlDoc = parser.parseFromString(e.target.result, "text/xml");
      const geoJson = toGeoJSON.kml(kmlDoc);
      onUpload(geoJson);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2 className="upload">Upload KML File</h2>
      <input type="file" accept=".kml" onChange={handleFileUpload} />
      
    </div>
  );
};

export default KMLUploader;
