import PropTypes from 'prop-types';

export const LIFT_TYPES = {
  CABLECAR: 'cablecar',
  CHAIRS: 'chairs',
  BUTTON: 'button'
};

export const TRAIL_RATINGS = {
  GREEN: 'green',
  BLUE: 'blue',
  RED: 'red',
  BLACK: 'black',
};

export const ResortShape = {
    id: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    place: PropTypes.string,
    lat: PropTypes.number,
    long: PropTypes.number,  
    lifts: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      count: PropTypes.number,
    })),
    trailRatings: PropTypes.arrayOf(PropTypes.string),    
    bunnySlope: PropTypes.bool,    
    www: PropTypes.string,
};
