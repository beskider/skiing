import { useState, useEffect, useContext } from "react"
import { useNavigate } from 'react-router-dom'

import { Title } from "components/atoms/Title/Title"
import { FormWrapper, GeoInputBlock, DoubleInputBlock, TripleInputBlock } from "./AddResort.styles"
import { FormFieldInput } from "components/molecules/FormFieldInput/FormFieldInput"

import { ReactComponent as CableCarIcon } from "assets/icons/cable-car-icon.svg";
import { ReactComponent as ButtonIcon } from "assets/icons/button-icon.svg";
import { ReactComponent as ChairsIcon } from "assets/icons/chairs-icon.svg";

import { FaMapMarkedAlt } from "react-icons/fa";

import { v4 as uuidv4 } from 'uuid';
import { Button } from "components/atoms/Button/Button";
import { FormFieldSelect } from "components/molecules/FormFieldSelect/FormFieldSelect";
import { ResortContext } from "providers/ResortsProvider";
import { TRAIL_RATINGS } from "types/resort";

import { SmallMapModal } from '../SmallMapWindow/SmallMapModal'

const initialResortFormData = {
  id: '',
  name: '',
  country: '',
  place: '',
  lat: 52.191,
  long: 19.355, 
  alt: '', 
  lifts: [],  
  trailRatings: [],    
  bunnySlope: false,    
  www: '',
  phone: '',
  address: '',
  maplink: '',
  shortname: '',
  description:  '',
  webcams: [ { type: '', code: ''} ]
}

export const AddResort = () => {

  const [ formData, setFormData ] = useState(initialResortFormData)
  const { addResort, findResortByName} = useContext(ResortContext);

  const [ sampleResort, setSampleResort ] = useState(initialResortFormData)

  const [ miniMapModalOpen, setMiniMapModalOpen ] = useState(false)

  useEffect( () => {
    setSampleResort(findResortByName("Jurasówka"))
  }, [ findResortByName ])

  const openMiniMapModal = () => setMiniMapModalOpen(true)
  const closeMiniMapModal = (params) => {
    if (params !== null) {
      setFormData({
        ...formData,
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
    console.log(e.target.value)  
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })   
  }

   const handleInputWebcamTypeChange = e => { 
    setFormData({
      ...formData,
      webcams: [{ type: e.target.value, code: formData.webcams[0].code } ],
    })   
  }
   const handleInputWebcamCodeChange = e => { 
    setFormData({
      ...formData,
      webcams: [{ type: formData.webcams[0].type, code: e.target.value }]
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
        placeholder={sampleResort?.name}
        value={formData.name}
        onChange={handleInputChange}
      />
      <DoubleInputBlock>
        <FormFieldInput 
          id="country"
          label="Country"
          name="country"
          maxLength="30"
          placeholder={sampleResort?.country}
          value={formData.country}
          onChange={handleInputChange}
        />
        <FormFieldInput 
          id="place"
          label="Place"
          name="place"
          maxLength="30"
          placeholder={sampleResort?.place}
          value={formData.place}
          onChange={handleInputChange}
        />
      </DoubleInputBlock>      
      <GeoInputBlock>
        <Button onClick={handlePointOnMapButton} title="Point on map">
          <FaMapMarkedAlt/>
        </Button>      
        <div>      
          <FormFieldInput 
            id="lat"
            label="Latitude"
            name="lat"
            maxLength="10"
            type="number"
            placeholder={sampleResort?.lat}
            value={formData.lat}
            onChange={handleInputChange}
          />
          <FormFieldInput
            id="long"
            label="Longitude"
            name="long"
            maxLength="10"
            type="number"
            placeholder={sampleResort?.long}
            value={formData.long}
            onChange={handleInputChange}
          />
        </div>
      </GeoInputBlock>
      <FormFieldInput 
        id="alt"
        label="Altitude (AMSL, above sea level)"
        name="alt"
        placeholder={sampleResort?.alt}
        value={formData.alt}
        onChange={handleInputChange}
      />   
      <TripleInputBlock>
        <FormFieldInput 
          id="cablecar"
          label="No of cablecars"
          name="cablecar"
          type="number"
          min="0"
          max="20"
          placeholder={sampleResort?.lifts.find( x => x.type === "cablecar")?.count  || 0}
          value={formData.lifts?.cablecar}
          onChange={handleInputChange}
          icon={<CableCarIcon/>}
        />
        <FormFieldInput 
          id="chairs"
          label="No of chairs"
          name="chairs"
          type="number"
          min="0"
          max="20"
          placeholder={sampleResort?.lifts.find( x => x.type === "chairs")?.count || 0}
          value={formData.lifts?.chairs}
          onChange={handleInputChange}
          icon={<ChairsIcon/>}
        />
        <FormFieldInput 
          id="button"
          label="No of buttons"
          name="button"
          type="number"
          min="0"
          max="20"
          placeholder={sampleResort?.lifts.find( x => x.type === "button")?.count }
          value={formData.lifts?.button}
          onChange={handleInputChange}
          icon={<ButtonIcon/>}
        />
      </TripleInputBlock>
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
        label="Website"        
        name="www"
        placeholder={sampleResort?.www}
        value={formData.www}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="phone"
        label="Phone"        
        name="phone"
        placeholder={sampleResort?.phone}
        value={formData.phone}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="address"
        label="Address"        
        name="address"
        placeholder={sampleResort?.address}
        value={formData.address}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="maplink"
        label="Maplink"        
        name="maplink"
        placeholder={sampleResort?.maplink}
        value={formData.maplink}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="shortname"
        label="Short name"        
        name="shortname"
        placeholder={sampleResort?.shortname}
        value={formData.mapshortnamelink}
        onChange={handleInputChange}
      />
      <FormFieldInput 
        id="description"
        label="Description"        
        name="description"
        placeholder={sampleResort?.description}
        value={formData.description}
        onChange={handleInputChange}
        type="textarea"
      />
        <h3>Webcams</h3>
        <FormFieldInput 
          id="webcamtype"
          label="Webcam type"        
          name="webcamtype"
          placeholder={sampleResort?.webcams[0].type}
          value={formData.webcams[0].type}
          onChange={handleInputWebcamTypeChange}
        />
        <FormFieldInput 
          id="webcamcode"
          label="Webcam code"        
          name="webcamcode"
          placeholder={sampleResort?.webcams[0].code}
          value={formData.webcams[0].code}
          onChange={handleInputWebcamCodeChange}
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
