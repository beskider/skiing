import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { StyledNavigationSearchButton, NavigationSearchButtonWithIcon, NavigationSearchInput } from './NavigationSearchButton.styles';

export const NavigationSearchButton = () => {
  
  const [ isOpen, setIsOpen ] = useState(false)
  const [ seachText, setSearchText ] = useState('')

  const toggleOpen = () => setIsOpen(!isOpen)
  
  return (
    <StyledNavigationSearchButton $isOpen={isOpen}>
      <NavigationSearchButtonWithIcon onClick={toggleOpen}>
        <FaSearch/>
      </NavigationSearchButtonWithIcon>
      { isOpen && 
        <NavigationSearchInput $isOpen={isOpen}
          value={seachText} 
          onChange={e => setSearchText(e.target.value)} 
          placeholder="Szukaj ośrodka..."
        />
      }
    </StyledNavigationSearchButton>
  )
}
