import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
import "../../index.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import React from "react";
import L from "leaflet"
import { ref, child, get } from "firebase/database";
import { database } from '../../utils/firebaseConfig';
import Navbar from '../Navbar/Navbar';


const markerIcon = new L.Icon({
  iconUrl: ("https://cdn-icons-png.flaticon.com/512/447/447031.png"),
  iconSize: [35,45],
  iconAnchor:[17,46],
});


const Map = () => {
  const dbRef = ref(database);
  const [center, setCenter] = useState({lng:105.78737106, lat:20.98091894});
  const ZOOM_LEVEL = 20;
  
  const [Latitude, setLatitude] = useState(0);
  const [Longitude, setLongitude] = useState(0);

      useEffect(() => {
        const id = setInterval(() => {
          get(child(dbRef, 'Latitude'))
        .then((data) => {
          if (data.exists()) {
            setLatitude(data.val())
          }
        })
        .catch((err) => {
          console.log(err);
        });

        get(child(dbRef, 'Longitude'))
        .then((data) => {
          if (data.exists()) {
            setLongitude(data.val())
          }
        })
        .catch((err) => {
          console.log(err);
        });


          if (Longitude === 0 && Latitude === 0) {
            return <div>Loading...</div>
          } else {
              setCenter({lng:Longitude,lat:Latitude})
              
            }



  // get(child(dbRef, `gps_data`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {

  //     console.log(snapshot.child("Latitude").val())
  //     console.log(snapshot.child("Longitude").val())

  //       const lat = snapshot.child("Latitude").val()
  //       const lng = snapshot.child("Longitude").val()

  //       while (lat == null && lng == null) {
  //         return <div>Loading...</div>
  //       }
  //         //setCenter(lng,lat);
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  // get(child(dbRef, `ObjectTempC`)).then((snapshot) => {
    
  //   if (snapshot.exists()) {
  //     console.log(snapshot.child("ObjectTempC").val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  // get(child(dbRef, `AmbientTempC`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.child("AmbientTempC").val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

    }, 1000);
  
  
    return () => clearInterval(id);
  }, );

  
  //const [center, setCenter] = useState({lng:Longitude, lat:Latitude});

  
  return(
<div>
  <Navbar></Navbar>

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
  </div>  
);
};

export default Map