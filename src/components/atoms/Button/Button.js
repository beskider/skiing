import { StyledButton } from "./Button.styles";
import PropTypes from 'prop-types';

export const Button = (props) => {
  
  const { isround, children } = props;

  return (
    <StyledButton 
      isround={isround} 
      {...props}
    >
      {children}
    </StyledButton>
  )  
};

Button.propTypes = {
  isround: PropTypes.bool,
  children: PropTypes.oneOfType([ 
    PropTypes.arrayOf(PropTypes.node), 
    PropTypes.node
  ]),
};

