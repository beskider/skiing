import { InputForm } from "components/atoms/InputForm/InputForm";
import { StyledFormField } from "./FormFieldInput.styles";
import { LabelForm } from "components/atoms/LabelForm/LabelForm";
import PropTypes from 'prop-types';

export const FormFieldInput = ({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
}) => (
  <StyledFormField>
    <LabelForm htmlFor={id}>{label}</LabelForm>
    <InputForm id={id} name={name} type={type} value={value} onChange={onChange} />
  </StyledFormField>
);

FormFieldInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
