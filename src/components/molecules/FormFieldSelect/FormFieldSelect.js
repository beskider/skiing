import { SelectForm } from "components/atoms/SelectForm/SelectForm";
import { StyledFormField } from "./FormFieldSelect.styles";
import { LabelForm } from "components/atoms/LabelForm/LabelForm";
import PropTypes from 'prop-types';

export const FormFieldSelect = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
  multiple = false,
}) => (
  <StyledFormField>
    <LabelForm>
      {label}
      <SelectForm
        id={id}
        name={name}
        multiple={multiple}
        options={options}
        value={value}
        onChange={onChange}
      />
    </LabelForm>
  </StyledFormField>
);

FormFieldSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
  options: PropTypes.array,
  multiple: PropTypes.bool,
};
