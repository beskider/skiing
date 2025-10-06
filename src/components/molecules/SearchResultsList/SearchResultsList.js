import { useNavigate } from 'react-router-dom';
import { StyledSearchResultsList } from './SearchResultsList.styles';

export const SearchResultsList = ({ results, closeSearch }) => {

  let navigate = useNavigate()

  const handleClickLink = name => {
    closeSearch()   
    navigate(`/resort/${name}`) 
  }

  return (
    <StyledSearchResultsList>
      { results.map( result => <p onClick={() => handleClickLink(result.name)}>{result.name}</p>) }               
    </StyledSearchResultsList>
  )

}