import { Button } from "components/atoms/Button/Button";
import { Wrapper, StyledResortList, StyledButtons, StyledLink } from "./ResortsList.styles";
import { Title } from "components/atoms/Title/Title";
import { ResortsListItem } from "components/molecules/ResortsListItem/ResortsListItem";
import { useContext, useState } from "react";
import { ResortContext } from "providers/ResortsProvider";
import { FormFieldInput } from 'components/molecules/FormFieldInput/FormFieldInput';
import { FaSearch } from "react-icons/fa"
export const ResortsList = () => {

  const { isLoading, resorts, error } = useContext(ResortContext);

  const [ inputSearch, setInputSerach ] = useState('')
  const [ searchedResorts, setSearchedResorts ] = useState(resorts)

  const handleSearchChange = e => {
    const searchText = e.target.value
    setInputSerach(searchText)
    const searchedResorts = 
      resorts.filter( resort => 
          resort
            .name.toLowerCase()
            .includes(searchText.toLowerCase())
          ||
          resort
            .place.toLowerCase()
            .includes(searchText.toLowerCase())
      )
    setSearchedResorts(searchedResorts)
  }


  const renderResorts = () => {
    if ( error ) return <h2>{error}</h2> 
    if ( isLoading ) return <h2>Loading...</h2>
    if ( !searchedResorts.length ) return <h2>No resorts</h2>
    return (      
      <StyledResortList>
        { searchedResorts.map( resort => (
            <ResortsListItem 
              key={resort.id}
              resort={resort} 
            />
        ))}
      </StyledResortList>
    )
  }  

  return (
    <Wrapper>
      <Title>Ski resorts</Title>     
      <FormFieldInput
        value={inputSearch}
        onChange={handleSearchChange}
        placeholder="Szukaj..."
        icon={<FaSearch />}   
      />
      { renderResorts() }
      <StyledButtons>
        <StyledLink to="/resort/add">
          <Button>Add resort</Button>              
        </StyledLink>
      </StyledButtons>      
    </Wrapper>
  );
};
