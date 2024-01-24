import PropTypes from 'prop-types';
import { sortTrailsFromHardest } from "helpers"
import { BarSegment, Wrapper } from "./ResortDifficultyBar.styles"

export const ResortDifficultyBar = ({ trailRatings }) => {
  
  const sortedTrailsRatings = sortTrailsFromHardest(trailRatings);

  return (
    <Wrapper>
      { sortedTrailsRatings.map( trail => (
         <BarSegment color={trail} key={trail} />
      )) }
    </Wrapper>
  )
};

ResortDifficultyBar.propTypes = {
  trailRatings: PropTypes.arrayOf(PropTypes.string)
};
