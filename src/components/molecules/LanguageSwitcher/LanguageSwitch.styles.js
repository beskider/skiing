  import styled from 'styled-components';
  
  export const LangSwitchButton = styled.button`
    background: none;
    border: none;
    border: 0;
    margin: 0;
    cursor: pointer;
    color: ${({ theme, $disabled  }) => $disabled ? theme.color.white : theme.color.lighterBlue};
    font-size: 16px;
  `;