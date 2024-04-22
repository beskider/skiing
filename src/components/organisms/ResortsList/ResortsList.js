import { Button } from "components/atoms/Button/Button";
import { Wrapper, StyledList, StyledLink } from "./ResortsList.styles";
import { Title } from "components/atoms/Title/Title";
import { ResortsListItem } from "components/molecules/ResortsListItem/ResortsListItem";
import { useContext } from "react";
import { ResortContext } from "providers/ResortsProvider";

export const ResortsList = () => {

  const { isLoading, resorts, error } = useContext(ResortContext);

  const renderResorts = () => {
    if ( error ) return <h2>{error}</h2> 
    if ( isLoading ) return <h1>Loading...</h1>
    if ( !resorts.length ) return <h2>No resorts</h2>
    return (
      <StyledList>
        { resorts.map( resort => (
            <ResortsListItem 
              key={resort.id}
              resort={resort} 
            />
        ))}
      </StyledList>
    )
  }  

  return (
    <Wrapper>
      <Title>Ski resorts</Title>     
      { renderResorts() }
      <StyledLink to="/add-resort">
        <Button>New resort</Button>              
      </StyledLink>
    </Wrapper>
  );
};
