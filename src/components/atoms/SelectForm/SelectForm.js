import { StyledSelectForm, StyledOption } from "./SelectForm.styles";
import PropTypes from 'prop-types';

export const SelectForm = ({ id, name, multiple, options, value, onChange }) => {
  return (
    <StyledSelectForm 
      id={id}
      name={name}
      multiple={multiple}
      value={value}
      onChange={onChange}
      data-testid={name}
    >
      { options.map( option => <StyledOption value={option} key={option}>{option}</StyledOption>) }
    </StyledSelectForm>
  )
};

SelectForm.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
};
