import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'

import { Title } from "components/atoms/Title/Title"
import { FormWrapper } from "./AddResort.styles"
import { FormFieldInput } from "components/molecules/FormFieldInput/FormFieldInput"

import { v4 as uuidv4 } from 'uuid';
import { Button } from "components/atoms/Button/Button";
import { FormFieldSelect } from "components/molecules/FormFieldSelect/FormFieldSelect";
import { ResortContext } from "providers/ResortsProvider";
import { LIFT_TYPES, TRAIL_RATINGS } from "types/resort";

const initialResortFormData = {
  id: '',
  name: '',
  country: '',
  place: '',
  lat: 0,
  long: 0,  
  lifts: [],  
  trailRatings: [],    
  bunnySlope: false,    
  www: '',
}

export const AddResort = () => {

  const [ formData, setFormData ] = useState(initialResortFormData)
  const { addResort } = useContext(ResortContext);
  
  const navigate = useNavigate()

  const handleCheckboxChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    })
  }

  const handleInputChange = e => {    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })   
  }

  const handleSelectChange = e => {    
    const options = [ ...e.target.selectedOptions ]
    const values = options.map(option => option.value)
    setFormData({
      ...formData,
      [e.target.id]: values
    })
  }

  const handleAddResort = e => {
    e.preventDefault();
    formData.id = uuidv4();
    addResort(formData);
    setFormData(initialResortFormData);    
    navigate('/');
  } 
  
  return (
    <FormWrapper as="form" onSubmit={handleAddResort}>
      <Title>New ski resort</Title>
      <FormFieldInput
        id="name"
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="country"
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="place"
        label="Place"
        name="place"
        value={formData.place}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="lat"
        label="Latitude"
        name="lat"
        value={formData.lat}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="long"
        label="Longitude"
        name="long"
        value={formData.long}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="liftCount"
        type="number"
        label="No of lifts"
        name="liftCount"
        value={formData.liftCount}
        onChange={handleInputChange}
      />
      <FormFieldSelect 
        id="liftTypes"
        label="Lift types"
        name="liftTypes"
        value={formData.liftTypes}
        onChange={handleSelectChange}
        options={Object.values(LIFT_TYPES)}
        multiple
      />
      <FormFieldSelect 
        id="trailRatings"
        label="Trail ratings"
        name="trailRatings"
        value={formData.trailRatings}
        onChange={handleSelectChange}
        options={Object.values(TRAIL_RATINGS)}
        multiple
      />
      <FormFieldInput 
        id="bunnySlope"
        label="Bunny slope"
        type="checkbox"
        name="bunnySlope"
        value={formData.bunnySlope}
        onChange={handleCheckboxChange}
      />
      <FormFieldInput 
        id="www"
        label="www"        
        name="www"
        value={formData.www}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </FormWrapper>
  )
};
