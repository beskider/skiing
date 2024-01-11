import { resorts } from "data/resorts";
import { Button } from "components/atoms/Button/Button";
import { Wrapper, StyledList } from "./ResortsList.styles";
import { Title } from "components/atoms/Title/Title";
import { ResortsListItem } from "components/molecules/ResortsListItem/ResortsListItem";

export const ResortsList = () => {

  return (
    <Wrapper>
      <Title>Ski resorts</Title>
      <StyledList>
        { resorts.map( ( resort ) => (
            <ResortsListItem 
              resort={resort} 
              key={resort.id}
            />
        ))}
      </StyledList>
      <Button>Add</Button>
    </Wrapper>
  );
};