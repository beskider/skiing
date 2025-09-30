import { StyledMapButton } from "./MapButton.styles"

const MapButton = ({text, icon, description, action}) => {
  return (
    <StyledMapButton title={description} onClick={action}>
      { icon ? (
          icon
        ) : (
          <p>{text}</p>
        ) 
      }      
    </StyledMapButton>
  )
}

export { MapButton}