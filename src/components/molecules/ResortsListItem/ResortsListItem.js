import { ResortDifficultyBar } from "components/atoms/ResortDifficultyBar/ResortDifficultyBar";
import { Wrapper } from "./ResortsListItem.styles";
import {  ResortIcon } from "components/atoms/ResortIcon/ResortIcon";
import { Button } from "components/atoms/Button/Button";
import { getMaxTrailDifficulty } from "helpers";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import PropTypes from 'prop-types';

export const ResortsListItem = ({ resort: { name, place, liftCount, trailRatings = [], www } }) => {
    
  return (
    <Wrapper>
      <ResortIcon value={getMaxTrailDifficulty(trailRatings)}>{liftCount}</ResortIcon>
      <div>
        <h1>{name}</h1>
        <ResortDifficultyBar trailRatings={trailRatings}/>   
        <p>{place}</p>
        <a href={www}>{www}</a>
      </div>
      <Button isRound><DeleteIcon /></Button>
    </Wrapper>
  )
}

ResortsListItem.propTypes = {
  resort: PropTypes.shape({
    name: PropTypes.string.isRequired,
    place: PropTypes.string, 
    liftCount: PropTypes.number, 
    trailRatings: PropTypes.arrayOf(PropTypes.string), 
    www: PropTypes.string,
  }),
};
