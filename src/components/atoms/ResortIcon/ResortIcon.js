import styled from "styled-components";

export const ResortIcon = styled.div`
  width: ${({ isBig }) => isBig ? '60px' : '30px' };
  height: ${({ isBig }) => isBig ? '60px' : '30px' };
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: ${({ isBig, theme: { fontSize } }) => isBig ? fontSize.xl : fontSize.large };
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ value, theme }) => {
    switch (value) {
      case 'green':
        return theme.trailColor.green;
      case 'blue':
        return theme.trailColor.blue;
      case 'red':
        return theme.trailColor.red;
      case 'black':
        return theme.trailColor.black;
      default: 
        return theme.color.grey;  
    }
  }};
`;
