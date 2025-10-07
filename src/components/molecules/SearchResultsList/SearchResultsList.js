import { Link } from 'react-router-dom';
import { StyledSearchResultsList } from './SearchResultsList.styles';

export const SearchResultsList = ({ results, closeSearch }) => {

  const handleClickLink = () => closeSearch()   
  
  return (
    <StyledSearchResultsList>   
      { results.map( (result, id) => {
          return (
            <p key={id}>
              <Link
                to={`/resort/${result.name}`} 
                onClick={() => handleClickLink()}
              >
                <b>{result.name}</b> | {result.place}
              </Link>
            </p>
          )
      })}   
    </StyledSearchResultsList>
  )
}