import React, { useState } from "react";
import KMLUploader from "./components/KMLuploader";
import SummaryTable from "./components/SummaryTable";
import DetailsTable from "./components/DetailTable";
import MapDisplay from "./components/MapDisplay";
import './App.css';

const App = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [summary, setSummary] = useState(null);
  const [details, setDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("summary");

  const handleUpload = (geoJson) => {
    setGeoJsonData(geoJson);

    const elementCounts = {};
    const detailsData = [];

    geoJson.features.forEach((feature) => {
      const type = feature.geometry.type;
      elementCounts[type] = (elementCounts[type] || 0) + 1;

      if (type === "LineString" || type === "MultiLineString") {
        let length = 0;
        for (let i = 1; i < feature.geometry.coordinates.length; i++) {
          const [x1, y1] = feature.geometry.coordinates[i - 1];
          const [x2, y2] = feature.geometry.coordinates[i];
          length += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        }
        detailsData.push({ type, length: length.toFixed(2) });
      }
    });

    setSummary(elementCounts);
    setDetails(detailsData);
  };

  return (
    <div className="container">
      <div className="Kmlviewer1">
        <h2 className="kmlviewer">KML Viewer</h2>
        <KMLUploader onUpload={handleUpload} />
      </div>

      <div className="mapAndTables">
        
        
        <div className="map-container">Map View:-
          {geoJsonData && <MapDisplay geoJsonData={geoJsonData} />}
        </div>

        <div className="table-container">
        <div className="button-group">
            <button 
              className={activeTab === "summary" ? "active" : ""}
              onClick={() => setActiveTab("summary")}
            >
              Summary
            </button>
            <button 
              className={activeTab === "details" ? "active" : ""}
              onClick={() => setActiveTab("details")}
            >
              Details
            </button>
          </div>

          <div className="table">
            {activeTab === "summary" && summary && <SummaryTable summary={summary} />}
            {activeTab === "details" && details && <DetailsTable details={details} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
