import { useParams } from "react-router-dom";
import { Wrapper } from './Resort.styles';
import { useContext, useState } from "react";
import { ResortContext } from "providers/ResortsProvider";

export const Resort = () => {

  const { name } = useParams()
  const { findResort } = useContext(ResortContext)
    
  const [ resort ] = useState(() => findResort(name));

  return (   
    <Wrapper>      
      <h1>{resort?.name}</h1>



      <img src={process.env.PUBLIC_URL + "/images/resorts/jurasowka-map.jpg"} alt="Resort map" />
      <img src={process.env.PUBLIC_URL + "/images/resorts/jurasowka-logo.jpg"} alt="Resort logo" />
      <img src={process.env.PUBLIC_URL + "/images/resorts/jurasowka-view.jpg"} alt="Resort view" />
      
      
      <h1>2{resort?.lat}</h1>
      <h1>3{resort?.name}</h1>
      <h2>About</h2>
      <p>Poland</p>
      <p>Siemiechów</p>
      <h2>Contact</h2>


<p>


    country: 'Poland',
    place: 'Siemiechów',
    lat: 49.872,
    long: 20.898,  
    liftCount: 2,
    liftTypes: [ 'chairs', 'button' ],
    trailRatings: [ 'green', 'blue', 'red' ],
    bunnySlope: true,
    www: 'https://jurasowka.pl',
</p>


    </Wrapper>     
  )
}