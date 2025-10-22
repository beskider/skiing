import { Icon } from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { getMaxTypeOfLifts } from 'helpers';

import buttonIconImage from 'assets/icons/button-icon.svg';
import cableCarIconImage from 'assets/icons/cable-car-icon.svg';
import chairsIconImage from 'assets/icons/chairs-icon.svg';

import { useState, useContext } from "react";
import { ResortContext } from 'providers/ResortsProvider';

import { MapWrapper } from "./Map.styles";
import { MapButtons } from "components/molecules/MapButtons/MapButtons";

let handleZoomIn = () => {}  
let handleZoomOut = () => {}

export const Map = () => {

  const { resorts } = useContext(ResortContext);

  const MapControl = () => {  
    const map = useMap();
    handleZoomIn = () =>  map.zoomIn()
    handleZoomOut = () => map.zoomOut()    
  }

  const SetMapBounds = () => {
    const plBounds = [
      [54.500, 14.200],
      [48.800, 24.500],
    ];
    const map = useMap();
    map.fitBounds(plBounds);
  };

  const [ colorMap, setColorMap ] = useState(false)

  const toggleMapColor = () => setColorMap(!colorMap)

  const getLiftIcon = lifts => {
    
    let icon = null;

    switch(getMaxTypeOfLifts(lifts)) {
      case 'cablecar':
        icon = cableCarIconImage;
        break;
      case 'chairs':
        icon = chairsIconImage;
        break;
      case 'button':
        icon = buttonIconImage;
        break;
      default:
        icon = buttonIconImage;
    }

    return new Icon({
      iconUrl: icon,
      iconSize: [24, 24]
    })

  }
   
  return (
    <MapWrapper $colorMap={colorMap}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
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
        <MapButtons         
          zoomIn={handleZoomIn}
          zoomOut={handleZoomOut}
          changeMapColorMode={toggleMapColor}        
        />
        <SetMapBounds/>
        <MapControl/>

        { resorts.map( (resort) => (
          <Marker
            position={[ resort.lat, resort.long ]}
            icon={getLiftIcon(resort.lifts)} 
            key={resort.id}
          >
            <Popup>
              <h2>{resort.name}</h2>
              <h4>{resort.alt}m</h4> 
              <small>{resort.place}</small>
            </Popup>
          </Marker>
        ))}      

      </MapContainer>

    </MapWrapper>

  );
}
