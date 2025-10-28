import { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import { Button } from 'components/atoms/Button/Button';
import Modal from 'react-modal'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { FormFieldInput } from 'components/molecules/FormFieldInput/FormFieldInput';

import 'leaflet-geosearch/assets/css/leaflet.css';
import { ButtonContainer, InputContainer, mapStyle, modalStyle } from './SmallMapModal.styles';

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
  }, [ map, searchControl ]);

  return null;
};

export const SmallMapModal = ({ isOpen, closeModal, latFromForm, longFromForm }) => {
  Modal.setAppElement('#root');

  const getInitLat = () => latFromForm === 0 ? 52.191 : latFromForm
  const getInitLong = () => longFromForm === 0 ? 19.355 : longFromForm

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

  const handleOkButton = () => closeModal([ lat, long])
  const handleCancelButton = () => closeModal(null)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
    >
      <h2>Mark a point on the map</h2>
      <MapContainer
        center={ [ lat, long ] }
        zoom={7}
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
      <InputContainer>
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
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleCancelButton}>Anuluj</Button>
        <Button onClick={handleOkButton}>OK</Button>
      </ButtonContainer>
    </Modal>
  )
}
