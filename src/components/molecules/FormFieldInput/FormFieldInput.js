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
    const props = { id, label, name, value, onChange, type }
    switch (type) {
      default:
      case 'text': 
        return <InputForm type="text" {...props} />
      case 'checkbox':
        return <CheckBoxForm type="checkbox" {...props} />
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
