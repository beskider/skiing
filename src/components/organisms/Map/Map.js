import { useState, useContext, useEffect } from "react";

import { Icon } from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import resortIconBlackSvg from "assets/icons/resort-icon-black.svg"
import resortIconRedSvg from "assets/icons/resort-icon-red.svg"
import resortIconBlueSvg from "assets/icons/resort-icon-blue.svg"
import resortIconGreenSvg from "assets/icons/resort-icon-green.svg"

import { ResortContext } from 'providers/ResortsProvider';

import { MapWrapper } from "./Map.styles";
import { MapButtons } from "components/molecules/MapButtons/MapButtons";

import "leaflet/dist/leaflet.css";
import 'leaflet-geosearch/assets/css/leaflet.css';
import { getMaxTrailDifficulty } from 'helpers';
import { TRAIL_RATINGS } from 'types/resort';

let handleZoomIn = () => {}  
let handleZoomOut = () => {}

const SearchField = () => {
  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    style: 'bar',
    showMarker: false,
    showPopup: true,
  });
  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [ map, searchControl ]);
}

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

  const getResortIcon = trails => {
    const iconColor = getMaxTrailDifficulty(trails)
    switch (iconColor) {
      case TRAIL_RATINGS.BLACK:
        return resortIconBlackSvg;
      case TRAIL_RATINGS.RED:
        return resortIconRedSvg;
      case TRAIL_RATINGS.BLUE:
        return resortIconBlueSvg;
      case TRAIL_RATINGS.GREEN:
        return resortIconGreenSvg;
      default:
        return resortIconGreenSvg;
    }
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
        <SearchField/>
        { resorts.map( (resort) => (
          <Marker
            position={[ resort.lat, resort.long ]}
            icon={new Icon({
                    iconUrl: getResortIcon(resort.trailRatings),
                    iconSize: [24, 24],
                    iconAnchor: [12, 40]
                  })}
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
