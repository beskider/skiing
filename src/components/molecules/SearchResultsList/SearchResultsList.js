import { NavLink, redirect } from 'react-router-dom';
import { StyledSearchResultsList } from './SearchResultsList.styles';
// import { NavLink } from 'react-router-dom';

export const SearchResultsList = ({ results, closeSearch }) => {


  const handleClickLink = name => {    
    // redirect(`/resort/${name}`)
    closeSearch()   
  }

  return (
    <StyledSearchResultsList>
      {/* { results.map( (result, id) => <p key={id} onClick={() => handleClickLink(result.name)}>{result.name}</p>) }                */}
      { results.map( (result, id) => <NavLink key={id} onClick={() => handleClickLink(result.name)} to={`/resort/${result.name}`}>{result.name}</NavLink>) }               
    </StyledSearchResultsList>
  )

}