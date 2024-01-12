import { ResortDifficultyBar } from "components/atoms/ResortDifficultyBar/ResortDifficultyBar";
import { Wrapper, FigureWrapper, StyledItem, StyledDetails } from "./ResortsListItem.styles";
import {  ResortIcon } from "components/atoms/ResortIcon/ResortIcon";
import { Button } from "components/atoms/Button/Button";
import { getMaxTrailDifficulty, removeHttp } from "helpers";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import PropTypes from 'prop-types';

export const ResortsListItem = ({ resort: { name, place, liftCount, trailRatings = [], www } }) => {
  return (
    <Wrapper>
      <FigureWrapper>
        <ResortIcon value={getMaxTrailDifficulty(trailRatings)}>{liftCount}</ResortIcon>
        <ResortDifficultyBar trailRatings={trailRatings}/>   
      </FigureWrapper>      
      <StyledItem>        
          <p>{name}</p>
          <p>{place}</p>
          <a href={www}>{removeHttp(www)}</a>      
      </StyledItem>
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
