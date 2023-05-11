import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  return (
    <MapContainer
      center={[54.190969845456394, 16.181931754895576]}
      zoom={15}
      scrollWheelZoom={false}
      id='map'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[54.190969845456394, 16.181931754895576]}>
        <Popup>
          TropiCar Koszalin, {<br />}
          Rynek Staromiejski 6/7, {<br />}
          75-007 Koszalin
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
