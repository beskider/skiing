import { InputForm } from "components/atoms/InputForm/InputForm";
import { StyledFormField } from "./FormFieldInput.styles";
import { LabelForm } from "components/atoms/LabelForm/LabelForm";
import PropTypes from "prop-types";
import { CheckBoxForm } from "components/atoms/CheckBoxForm/CheckBoxForm";

export const FormFieldInput = ({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
}) => {
  
  const inputElement = (type) => {
    switch (type) {
      default:
      case 'input': 
        return (
          <InputForm
            id={id}
            name={name}
            type="text"
            value={value}
            onChange={onChange}
          />
        );
      case 'checkbox':
        return (
          <CheckBoxForm
            id={id}
            name={name}
            type="checkbox"
            value={value}
            onChange={onChange}
          />
        );
    }
  }
  
  return (
    <StyledFormField>
      <LabelForm htmlFor={id}>{label}</LabelForm>
      { inputElement(type) }    
  </StyledFormField>
  )
}
  

FormFieldInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  type: PropTypes.string,
};
