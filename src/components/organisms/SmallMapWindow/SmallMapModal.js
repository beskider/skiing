import { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import { Button } from 'components/atoms/Button/Button';
import Modal from 'react-modal'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { FormFieldInput } from 'components/molecules/FormFieldInput/FormFieldInput';

import 'leaflet-geosearch/assets/css/leaflet.css';

const SearchField = () => {

  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    showMarker: false,
    showPopup: true,
  });

  const map = useMap();

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [ map ]);

  return null;
};

export const SmallMapModal = ({ isOpen, closeModal, latFromForm, longFromForm }) => {
  Modal.setAppElement('#root');

  const getInitLat = () => latFromForm === 0 ? 51.505 : latFromForm
  const getInitLong = () => longFromForm === 0 ? -0.09 : longFromForm

  const [ lat, setLat ] = useState(getInitLat)
  const [ long, setLong ] = useState(getInitLong)

  const handleChangeLat = e => { 
    const parseLat = Number.parseFloat(e.target.value)
    if (isNaN(parseLat)) {
      setLat(0)
    } else {
      setLat(parseLat)
    }
  }

  const handleChangeLong = e => { 
    const parseLong = Number.parseFloat(e.target.value)
    if (isNaN(parseLong)) {
      setLong(0)
    } else {
      setLong(parseLong)
    }
  }

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setLat(Number.parseFloat(e.latlng.lat).toFixed(3))
        setLong(Number.parseFloat(e.latlng.lng).toFixed(3))
      },
    });
    return false;
  }

  const modalStyle = {
    overlay: {
      zIndex: 450,
    },
    content: {
      boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
      backgroundColor: 'white',
      border: '2px solid rgb(240, 240, 240)',
      borderRadius: '12px',
      position: 'absolute',
      width: '80%',
      height: '90%',
      margin: 'auto',
    }
  }

  const mapStyle = {
    height: "70%",
    width: "100%",
    margin: '1rem auto',
    cursor: 'crosshair'
  }

  const handleOkButton = () => {
    closeModal([ lat, long]);
  }

  const handleCancelButton = () => {
    closeModal(null);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
    >
      <h2>Mark a point on the map</h2>
      <MapContainer
        center={ [ lat, long ] }
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={true}
        style={mapStyle}
      >
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          opacity={0.5}
          />
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & ODbL, &copy; <a href="https://www.opensnowmap.org/iframes/data.html">www.opensnowmap.org</a> <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
          url="https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png"
        />   
        <SearchField />
        <MapEvents />

        <Marker
          position={[ lat, long ]}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        ></Marker>

      </MapContainer>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-1.2rem'}}>
        <FormFieldInput 
          type="number" 
          value={lat} 
          onChange={handleChangeLat} 
          label="Latitude" 

        />
        <FormFieldInput 
          type="number" 
          value={long} 
          label="Longitude" 
          onChange={handleChangeLong} 
          style={{ marginTop: '0' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <Button onClick={handleOkButton}>OK</Button>
        <Button onClick={handleCancelButton}>Anuluj</Button>
      </div>
    </Modal>
  )
}
