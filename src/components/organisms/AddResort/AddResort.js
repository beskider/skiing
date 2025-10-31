import { useState, useEffect, useContext } from "react"
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup';

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
import { StyledButtons, StyledLink } from '../ResortsList/ResortsList.styles'
import { isObjectEmpty } from 'helpers';

const initialResortFormData = {
  id: '',
  name: '',
  country: '',
  place: '',
  lat: 52.191,
  long: 19.355, 
  alt: '', 
  lifts: [
    {
      type: 'cablecar',
      count: 0
    },
    {
      type: 'chairs',
      count: 0
    },
    {
      type: 'button',
      count: 0
    }
  ],  
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

const schema = yup.object().shape({
  name: yup.string().max(30).required(),
  country: yup.string().max(30).required(),
  place: yup.string().required().max(30),
  lat: yup.number().required().min(-91).max(91),
  long: yup.number().required().min(-181).max(181),
  alt: yup.string().required().max(30),
  lifts: yup.array().required().of(yup.object().shape({
      type: yup.string(),
      count: yup.number().min(0).max(20)
  })),
  /// trailRatings: yup.array().required().of(Object.values(TRAIL_RATINGS)),
  bunnySlope: yup.boolean().required(),
  www: yup.string().required().max(40),
  phone: yup.string().required().max(30),
  address: yup.string().required().max(30),
  maplink: yup.string().required().max(40),
  shortname: yup.string().required().max(20),
  description: yup.string().required().max(2000),
})

export const AddResort = () => {
  
  const [ formData, setFormData ] = useState(initialResortFormData)
  const [ formErrors, setFormErrors ] = useState({})
  const { addResort, getNewId, findResortByName} = useContext(ResortContext);

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

  const handleChangeLift = e => {
    const lifts = [ ...formData.lifts ]
    const foundIndex = lifts.findIndex(x => x.type == e.target.name)
    lifts[foundIndex] = { type: e.target.name, count: Number(e.target.value)  }
    setFormData({
      ...formData,
      lifts: lifts,
    })
  }

  const handleInputChange = e => {
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

  const validateForm = async () => {
    let errors = false;
    try {
      await schema.validate(formData, { abortEarly: false});
    } catch (err) {
      errors = err;
      const formErrors = errors.errors.reduce((a, v) => ({ ...a, [v.split(" ")[0]]: v}), {})
      console.log('Bledy: ', formErrors)
      setFormErrors(formErrors)
    }
    if (!errors) {setFormErrors({}) }
  }

  const onSubmit = e => {
    e.preventDefault()
    validateForm()

    if(isObjectEmpty(formErrors)) {
      // formData.id = uuidv4()
      formData.id = getNewId()
      console.log('Dodaje: ', formData)
      // addResort(formData);
      /// usun lisfts z liczba 0
      setFormData(initialResortFormData);    
      // navigate('/');
    }
  }    
  

  const onCancel = () => {
    navigate(-1)
  }
 
  const handlePointOnMapButton = e => {
    e.preventDefault()
    openMiniMapModal()
  }

  const generateJSON = () => {
    // formData.id = uuidv4()
    formData.id = getNewId()

    const fileName = formData.shortname !== '' ? `${formData.shortname}.json` : 'resort.json';
    const data = new Blob([JSON.stringify(formData)], { type: "text/json" });
    const jsonURL = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <FormWrapper as="form" onSubmit={onSubmit}>
      <Title>New ski resort</Title>
      <FormFieldInput
        id="name"
        label="Name"
        name="name"
        maxLength="30"
        placeholder={sampleResort?.name}
        value={formData.name}
        onChange={handleInputChange}
        error={formErrors.name}
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
          error={formErrors.country}
        />
        <FormFieldInput 
          id="place"
          label="Place"
          name="place"
          maxLength="30"
          placeholder={sampleResort?.place}
          value={formData.place}
          onChange={handleInputChange}
          error={formErrors.place}
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
            type="text"
            placeholder={sampleResort?.lat}
            value={formData.lat}
            onChange={handleInputChange}
            error={formErrors.lat}
          />
          <FormFieldInput
            id="long"
            label="Longitude"
            name="long"
            maxLength="10"
            type="text"
            placeholder={sampleResort?.long}
            value={formData.long}
            onChange={handleInputChange}
            error={formErrors.long}
          />
        </div>
      </GeoInputBlock>
      <FormFieldInput 
        id="alt"
        label="Altitude (AMSL, above sea level)"
        name="alt"
        maxLength="20"
        placeholder={sampleResort?.alt}
        value={formData.alt}
        onChange={handleInputChange}
        error={formErrors.alt}
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
          value={formData.lifts.find( x => x.type === "cablecar").count}
          onChange={handleChangeLift}
          icon={<CableCarIcon/>}
          error={formErrors.cablecar}
        />
        <FormFieldInput 
          id="chairs"
          label="No of chairs"
          name="chairs"
          type="number"
          min="0"
          max="20"
          placeholder={sampleResort?.lifts.find( x => x.type === "chairs")?.count || 0}
          value={formData.lifts.find( x => x.type === "chairs").count}
          onChange={handleChangeLift}
          icon={<ChairsIcon/>}
          error={formErrors.chairs}
        />
        <FormFieldInput 
          id="button"
          label="No of buttons"
          name="button"
          type="number"
          min="0"
          max="20"
          placeholder={sampleResort?.lifts.find( x => x.type === "button")?.count }
          value={formData.lifts.find( x => x.type === "button").count}
          onChange={handleChangeLift}
          icon={<ButtonIcon/>}
          error={formErrors.buttons}
        />
      </TripleInputBlock>
      <FormFieldSelect 
        id="trailRatings"
        label="Trail ratings"
        name="trailRatings"
        value={formData.trailRatings}
        onChange={handleSelectChange}
        options={Object.values(TRAIL_RATINGS)}
        error={formErrors.trailRatings}
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
        maxLength="40"
        placeholder={sampleResort?.www}
        value={formData.www}
        onChange={handleInputChange}
        error={formErrors.www}
      />
      <FormFieldInput 
        id="phone"
        label="Phone"        
        name="phone"
        maxLength="30"
        placeholder={sampleResort?.phone}
        value={formData.phone}
        onChange={handleInputChange}
        error={formErrors.phone}
      />
      <FormFieldInput 
        id="address"
        label="Address"        
        name="address"
        maxLength="30"
        placeholder={sampleResort?.address}
        value={formData.address}
        onChange={handleInputChange}
        error={formErrors.address}
      />
      <FormFieldInput 
        id="maplink"
        label="Maplink"        
        name="maplink"
        maxLength="40"
        placeholder={sampleResort?.maplink}
        value={formData.maplink}
        onChange={handleInputChange}
        error={formErrors.maplink}
      />
      <FormFieldInput 
        id="shortname"
        label="Short name"        
        name="shortname"
        maxLength="20"
        placeholder={sampleResort?.shortname}
        value={formData.shortname}
        onChange={handleInputChange}
        error={formErrors.shortname}
      />
      <FormFieldInput 
        id="description"
        label="Description"        
        name="description"
        maxLength="2000"
        placeholder={sampleResort?.description}
        value={formData.description}
        onChange={handleInputChange}
        type="textarea"
        error={formErrors.description}
      />
      <h3>Webcams</h3>
      <FormFieldInput 
        id="webcamtype"
        label="Webcam type"        
        name="webcamtype"
        placeholder={sampleResort?.webcams[0].type}
        value={formData.webcams[0].type}
        onChange={handleInputWebcamTypeChange}
        error={formErrors.webcamType}
      />
      <FormFieldInput 
        id="webcamcode"
        label="Webcam code"        
        name="webcamcode"
        placeholder={sampleResort?.webcams[0].code}
        value={formData.webcams[0].code}
        onChange={handleInputWebcamCodeChange}
        error={formErrors.webcamCode}
      />
      <StyledButtons>
        <Button onClick={onCancel}>Cancel</Button>              
        <Button onClick={generateJSON}>JSON</Button>              
        <Button type="submit">Add</Button>
      </StyledButtons>
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
