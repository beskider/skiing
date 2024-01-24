import { StyledButton } from "./Button.styles";

export const Button = (props) => {
  
  const { isRound, children } = props;

  return (
    <StyledButton 
      isround={isRound} 
      {...props}
    >
      {children}
    </StyledButton>
  )  
}


