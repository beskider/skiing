import { Icon } from "leaflet";
import { MapContainer, TileLayer, useMap, useMapEvent, useMapEvents, ZoomControl} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import towerIconImage from 'assets/icons/tower-icon.svg';
import { resorts as resortsData } from "data/resorts";
import { useState } from "react";

import { MapWrapper } from "./Map.styles";
import { MapButtons } from "components/molecules/MapButtons/MapButtons";



let handleZoomIn = () => {}  
let handleZoomOut = () => {}

export const Map = () => {
  


  




  const MapControl = () => {  
    const map = useMap();
    handleZoomIn = () =>  map.zoomIn()
    handleZoomOut = () => map.zoomOut()    
  }
  

  // const towerIcon = new Icon({
  //   iconUrl: towerIconImage,
  //   iconSize: [48, 48]
  // })

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
        <SetMapBounds/>
        <MapControl/>


      


        {/* { resortsData.map( (resort) => (
          <Marker 
            position={resort.geometry.coordinates}
            icon={towerIcon} 
            key={resort.properties.shortname}
          >
            <Popup>
              <h2>{resort.properties.name}</h2>
              <h4>{resort.properties.alt}+{resort.properties.height}m</h4> 
              <p>{resort.properties.description}</p>
              <small>{resort.properties.place}</small>
            </Popup>
          </Marker>
        ))}      */}



        <MapButtons         
          zoomIn={handleZoomIn}
          zoomOut={handleZoomOut}
          changeMapColorMode={toggleMapColor}
        
        />



      </MapContainer>


    </MapWrapper>

  );
}
