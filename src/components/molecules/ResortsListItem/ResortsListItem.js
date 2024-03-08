import { ResortDifficultyBar } from "components/atoms/ResortDifficultyBar/ResortDifficultyBar";
import { Wrapper, FigureWrapper, StyledItem } from "./ResortsListItem.styles";
import {  ResortIcon } from "components/atoms/ResortIcon/ResortIcon";
import { Button } from "components/atoms/Button/Button";
import { getMaxTrailDifficulty, removeHttp } from "helpers";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ResortContext } from "providers/ResortsProvider";

export const ResortsListItem = ({ resort: { id, name, place, liftCount, trailRatings = [], www } }) => {
  
  const { deleteResort } = useContext(ResortContext);

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
      <Button $isround onClick={() => deleteResort(id)}><DeleteIcon /></Button>
    </Wrapper>
  )
}

ResortsListItem.propTypes = {
  resort: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    place: PropTypes.string, 
    liftCount: PropTypes.number, 
    trailRatings: PropTypes.arrayOf(PropTypes.string), 
    www: PropTypes.string,
  }),
};
