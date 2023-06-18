import React from "react";
import BDMap from "./map/Bangladesh_divisions_english.svg"
const Map = () => {
  return (
    <div className="map-style">
      <img src={BDMap} alt="SVG Image" width="800px" height="800px" />
      {/* <BDMap  /> */}
    </div>
    // <svg>
    //    <image xlinkHref={BDMap} width="100%" height="100%" />
    // </svg>
  );
};

export default Map;
