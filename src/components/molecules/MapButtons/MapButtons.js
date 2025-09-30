import { MapButton } from "components/atoms/MapButton/MapButton";
import { MapButtonSpace } from "components/atoms/MapButtonSpace/MapButtonSpace";
import { ButtonsWrapper } from "./MapButtons.styles";
import { ReactComponent as ColorPaletteIcon } from 'assets/icons/color-palette-icon.svg'

const MapButtons = ({changeMapColorMode, zoomIn, zoomOut}) => {
  return (
    <ButtonsWrapper>
      <MapButton 
        description='Zoom out' 
        text='-' 
        action={zoomOut} 
      />           
      <MapButton 
        description='Zoom in' 
        text='+' 
        action={zoomIn}
      />   
      <MapButtonSpace />
      <MapButton 
        description='Change color mode' 
        icon={<ColorPaletteIcon/>}
        action={changeMapColorMode}
      />
      <MapButton 
        description='Help' 
        text='?'         
      />           
    </ButtonsWrapper>
  )
}

export { MapButtons };