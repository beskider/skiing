import PropTypes from 'prop-types';
import { Wrapper, LiftLabel } from './LiftIcon.styles';

import { ReactComponent as CableCarIcon } from "assets/icons/cable-car-icon.svg";
import { ReactComponent as ButtonIcon } from "assets/icons/button-icon.svg";
import { ReactComponent as ChairsIcon } from "assets/icons/chairs-icon.svg";

import { LIFT_TYPES } from 'types/resort';

export const LiftIcon = ({ liftType, no = 0 }) => {

  if ( no === 0 ) return null;

  const renderIcon = liftType => {

    switch (liftType) {
      case LIFT_TYPES.CABLECAR:
        return <CableCarIcon />;
      case LIFT_TYPES.BUTTON:
        return <ButtonIcon />;
      case LIFT_TYPES.CHAIRS:
        return <ChairsIcon />;
      default:
        return null;
    }
  }

  return (
    <Wrapper>
      { renderIcon(liftType) }
      <LiftLabel>{no}</LiftLabel>
    </Wrapper>
  )
}

LiftIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(LIFT_TYPES)),
  no:  PropTypes.number
}
