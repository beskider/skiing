import styled from 'styled-components'

export const StyledSearchResultsList = styled.div`  
  position: absolute;
  top: 3.5rem;
  left: 0;  
  width: 100%;  
  line-height: 1.5rem;
  background-color: ${({ theme }) => theme.color.white };
  max-height: 20rem;
  overflow-y: auto;
  z-index: 500;
  padding: 0.2rem 1rem;
  p {
    cursor: pointer;
    line-height: 200%;
    font-weight: 600;
  }
`