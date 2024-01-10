import styled from "styled-components";

export const ResortIcon = styled.div`
  width: 30px;  
  height: 30px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ value }) => {
    switch (value) {
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      case 'red':
        return 'red';
      case 'black':
        return 'black';
      default: 
        return 'gray';
    }
  }};
`