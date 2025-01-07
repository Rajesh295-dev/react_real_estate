import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

function ResizeHandler({ isMapView }) {
  const map = useMap();

  useEffect(() => {
    if (isMapView) {
      setTimeout(() => {
        map.invalidateSize(); // Trigger Leaflet to recalculate dimensions
      }, 0); // Ensure DOM updates first
    }
  }, [isMapView, map]);

  return null;
}

export default ResizeHandler;
