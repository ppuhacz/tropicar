import React from "react";
// importing map styles
import "./styles/map-styles.scss";
// importing React Leaflet to create a map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapDisplay = () => {
  return (
    <div className='location-wrapper'>
      <div className='location-info'>
        <div className='location-info-title'>
          <a
            href='https://en.wikipedia.org/wiki/Koszalin'
            target='_blank'
            rel='noreferrer'
            className='location-link'
          >
            <h4>Koszalin, Poland</h4>
          </a>
          <hr className='location-horizontal-line' />
        </div>
        <p>
          Located in the picturesque city of Koszalin, Poland, this coastal
          destination boasts beautiful green spaces and stunning seaside views.
          With a car rental service available in the city, visitors can easily
          explore the surrounding area and discover all that Koszalin has to
          offer. From the sandy beaches to the thriving arts scene, there's
          something for everyone in this charming city.
        </p>
        <p id='info-desktop'>
          <br />
          The best highlight of Koszalin is its stunning seaside views. The city
          is located just a short distance from the Baltic Sea, providing
          visitors with easy access to some of the most beautiful beaches in
          Europe. The sandy beaches are perfect for sunbathing and swimming,
          while the coastline is dotted with charming fishing villages and
          historic landmarks.
        </p>
        <p id='info-desktop-large'>
          <br />
          For those seeking a more urban experience, Koszalin also offers a
          thriving arts scene. The city is home to several museums and
          galleries, showcasing everything from classical art to contemporary
          installations. The city's cultural institutions also host a range of
          performances, including concerts, theater productions, and dance
          performances.
        </p>
      </div>
      <div className='map-wrapper'>
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
            <Popup>TropiCar Koszalin</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default React.memo(MapDisplay);
