import PropTypes from 'prop-types';

export const LIFT_TYPES = {
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
    liftCount: PropTypes.number,
    liftTypes: PropTypes.arrayOf(LIFT_TYPES),
    trailRatings: PropTypes.arrayOf(TRAIL_RATINGS),    
    bunnySlope: PropTypes.bool,    
    www: PropTypes.string,
};
