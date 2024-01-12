import styled from "styled-components";

export const Wrapper = styled.div`
  height: 15px;
  display: flex;
  flex-direction: row;  
`;

export const BarSegment = styled.div`
  width: 15px;  
  background-color: ${({ color, theme }) => {
    switch (color) {
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
  }
}
`;
