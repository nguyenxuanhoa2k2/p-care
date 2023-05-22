
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
import "../../index.css";
import "leaflet/dist/leaflet.css";
import { useState } from 'react';
import React from "react";
import L from "leaflet"


const markerIcon = new L.Icon({
  iconUrl: ("https://cdn-icons-png.flaticon.com/512/447/447031.png"),
  iconSize: [35,45],
  iconAnchor:[17,46],



});


const Map = () => {
const [center, setCenter] = useState({lng:105.78737106544159, lat:20.98091894538311});
const ZOOM_LEVEL = 18;
  


return(


  <MapContainer 
    center ={center} 
    zoom ={ZOOM_LEVEL}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker position={center} icon={markerIcon}>
        <Popup> 
          <b> Current location </b>
        </Popup>
    </Marker>
  </MapContainer>
)
}

export default Map