import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { IconLocation } from './IconLocation';
import 'leaflet/dist/leaflet.css';
import './MapView.css';


const MapView = ({lat, lng}) => {

    const position = {
        lat: lat,
        lng: lng
    } 

    const zoom = 20

    return (
        <Map center={position} zoom={zoom} dragging={false} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
             <Marker position={position} icon={IconLocation}>
           {/*  <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
             </Marker> 
          {/*   <Circle center={position} radius={200} /> */}
            
        </Map>
    );
}

export default MapView;
