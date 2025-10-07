import { useState, useContext } from 'react';
import { ResortContext } from "providers/ResortsProvider";
import { StyledNavigationSearchButton, NavigationSearchButtonWithIcon, NavigationSearchInput } from './NavigationSearchButton.styles';
import { SearchResultsList } from '../SearchResultsList/SearchResultsList';
import { FaSearch } from 'react-icons/fa';

import { useEffect, useRef } from 'react';

export const NavigationSearchButton = () => {
  
  const [ isOpen, setIsOpen ] = useState(false)
  const [ seachText, setSearchText ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  
  const { resorts } = useContext(ResortContext);
  
  const wrapperRef = useRef(null);
  
  const closeSearch = () => {
    setSearchText('')
    setSearchResults([])
    setIsOpen(false)
  }

  const useOutsideAlerter = ref => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeSearch();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const toggleOpen = () => ( isOpen ? closeSearch() : setIsOpen(true) ) 
  
  const handleSearchChange = e => {
    const searchText = e.target.value
    setSearchText(searchText)    
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
      setSearchResults(searchedResorts)
  }

  useOutsideAlerter(wrapperRef)

  return (
    <>
      <StyledNavigationSearchButton $isOpen={isOpen} ref={wrapperRef}>
        <NavigationSearchButtonWithIcon onClick={toggleOpen}>
          <FaSearch/>
        </NavigationSearchButtonWithIcon>
        { 
          isOpen && 
          <NavigationSearchInput $isOpen={isOpen}
            type="search"
            value={seachText} 
            onChange={handleSearchChange} 
            placeholder="Szukaj ośrodka..."
          />
        }
        { 
          searchResults && 
          searchResults.length > 0 && 
          <SearchResultsList 
            results={searchResults} 
            closeSearch={() => closeSearch()}
          />
        }
      </StyledNavigationSearchButton>

    </>
  )
}
