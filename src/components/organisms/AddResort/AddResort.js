import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'

import { Title } from "components/atoms/Title/Title"
import { FormWrapper } from "./AddResort.styles"
import { FormFieldInput } from "components/molecules/FormFieldInput/FormFieldInput"

import { FaMapMarkedAlt } from "react-icons/fa";

import { v4 as uuidv4 } from 'uuid';
import { Button } from "components/atoms/Button/Button";
import { FormFieldSelect } from "components/molecules/FormFieldSelect/FormFieldSelect";
import { ResortContext } from "providers/ResortsProvider";
import { LIFT_TYPES, TRAIL_RATINGS } from "types/resort";

import styled from 'styled-components'
import { SmallMapModal } from '../SmallMapWindow/SmallMapModal'

const initialResortFormData = {
  id: '',
  name: '',
  country: '',
  place: '',
  lat: 0,
  long: 0, 
  alt: 0, 
  lifts: [],  
  trailRatings: [],    
  bunnySlope: false,    
  www: '',
  phone: '',
  address: '',
  maplink: '',
  shortname: '',
  description:  '',
  webcams: []
}

export const GeoInputBlock = styled.div`
  display: flex;
  button {
    margin: 2rem;
  }
` 
export const InputBlock = styled.div`
  width: 100%;
`

export const AddResort = () => {

  const [ formData, setFormData ] = useState(initialResortFormData)
  const { addResort } = useContext(ResortContext);

  const [ miniMapModalOpen, setMiniMapModalOpen ] = useState(false)

  const openMiniMapModal = () => setMiniMapModalOpen(true)
  const closeMiniMapModal = (params) => {
    if (params !== null) {
      setFormData({
        lat: params[0],
        long: params[1]
      })
    }
    setMiniMapModalOpen(false)
  }

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

  const handlePointOnMapButton = e => {
    e.preventDefault()
    openMiniMapModal()
  }

  return (
    <FormWrapper as="form" onSubmit={handleAddResort}>
      <Title>New ski resort</Title>
      <FormFieldInput
        id="name"
        label="Name"
        name="name"
        maxLength="30"
        value={formData.name}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="country"
        label="Country"
        name="country"
        maxLength="30"
        value={formData.country}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="place"
        label="Place"
        name="place"
        maxLength="30"
        value={formData.place}
        onChange={handleInputChange}
      />

      <GeoInputBlock>
        <Button onClick={handlePointOnMapButton} title="Point on map">
          <FaMapMarkedAlt/>
        </Button>
        <InputBlock>
          <FormFieldInput 
            id="lat"
            label="Latitude"
            name="lat"
            maxLength="10"
            type="number"
            value={formData.lat}
            onChange={handleInputChange}
          />
          <FormFieldInput
            id="long"
            label="Longitude"
            name="long"
            maxLength="10"
            type="number"
            value={formData.long}
            onChange={handleInputChange}
          />
        </InputBlock>
      </GeoInputBlock>
      <FormFieldInput 
        id="alt"
        label="Altitude"
        name="alt"
        value={formData.alt}
        onChange={handleInputChange}
      />
      <FormFieldSelect 
        id="lifts"
        label="Lifts"
        name="lifts"
        value={formData.lifts}
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
      <FormFieldInput 
        id="phone"
        label="phone"        
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="address"
        label="Address"        
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="maplink"
        label="Maplink"        
        name="maplink"
        value={formData.maplink}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="shortname"
        label="Short name"        
        name="shortname"
        value={formData.mapshortnamelink}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="description"
        label="Description"        
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="webcams"
        label="Webcams"        
        name="webcams"
        value={formData.webcams}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>

      { miniMapModalOpen && <SmallMapModal 
          isOpen={miniMapModalOpen} 
          closeModal={closeMiniMapModal} 
          latFromForm={formData.lat} 
          longFromForm={formData.long} 
        />
      }



    </FormWrapper>
  )
};
