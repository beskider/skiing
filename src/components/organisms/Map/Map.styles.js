import { Marker } from 'react-leaflet';
import styled from "styled-components";

export const MapWrapper = styled.div`   
  .leaflet-layer:first-child {
    filter: ${({ $colorMap }) => ($colorMap ? 'grayscale(0)': 'grayscale(1)')};
  }
`;
