import { Button } from "components/atoms/Button/Button";
import { Wrapper, StyledList, StyledLink } from "./ResortsList.styles";
import { Title } from "components/atoms/Title/Title";
import { ResortsListItem } from "components/molecules/ResortsListItem/ResortsListItem";
import { useContext } from "react";
import { ResortContext } from "providers/ResortsProvider";

export const ResortsList = () => {

  const { isLoading, resorts } = useContext(ResortContext);

  return (
    <Wrapper>
      <Title>Ski resorts</Title>           
      { isLoading ? (
          <h1>Loading...</h1>
        ) : (
          !resorts.length ? (
            <h2>No resorts</h2>
          ) : (
            <StyledList>
              { resorts.map( resort => (
                  <ResortsListItem 
                    key={resort.id}
                    resort={resort} 
                  />
              ))}
            </StyledList>
          )
      )}
      <StyledLink to="/add-resort">
        <Button>Add</Button>              
      </StyledLink>
    </Wrapper>
  );
};


