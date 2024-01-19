import { StyledSelectForm } from "./SelectForm.styles";

export const SelectForm = ({ id, name, multiple, options, value, onChange }) => {
  return (
    <StyledSelectForm 
      id={id}
      name={name}
      multiple={multiple}
      value={value}
      onChange={onChange}
    >
      { options.map( option => <option value={option}>{option}</option>) }
    </StyledSelectForm>
  )
}