import { StyledButton } from "./Button.styles";
import PropTypes from 'prop-types';

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
};

Button.propTypes = {
  isRound: PropTypes.bool,
  children: PropTypes.oneOfType([ 
    PropTypes.arrayOf(PropTypes.node), 
    PropTypes.node
  ]),
};

