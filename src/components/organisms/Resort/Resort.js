import { Wrapper, HeaderWrapper, Logo, TitleWrapper, Alt, ContentWrapper, Content, ResortImage, ResortView, ResortMap } from './Resort.styles';

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ResortContext } from "providers/ResortsProvider";
import { LiftsPanel } from "components/molecules/LiftsPanel/LiftsPanel";

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Resort = () => {

  const { name } = useParams()
  const { findResort } = useContext(ResortContext)
    
  const [ resort, setResort ] = useState({});

  useEffect( () => {
    setResort(findResort(name))
  }, [])

  if (!resort) return <h3>No data</h3>;

  return (   
    <Wrapper>      
      <HeaderWrapper>
        <Logo>
          <img src={process.env.PUBLIC_URL + "/images/resorts/jurasowka-logo.jpg"} alt="Resort logo" />
        </Logo>
        <TitleWrapper>
          <h1>{resort?.name}</h1>
          <h3>{resort?.place}{ resort?.country === 'Poland' || `, ${resort?.country}` }</h3>
        </TitleWrapper>
        <Alt>{resort?.alt} <small>m n.p.m.</small></Alt>
      </HeaderWrapper>
      <ContentWrapper>
        <Zoom>
          <ResortView 
            alt="View"
            src={process.env.PUBLIC_URL + "/images/resorts/jurasowka-view.jpg"}  
          />      
        </Zoom>
        <Zoom>
          <ResortImage 
            alt="Photo"
            src={process.env.PUBLIC_URL + "/images/resorts/jurasowka-image.jpg"}  
          />      
        </Zoom>
        <LiftsPanel lifts={resort.liftTypes} />
        <Content>





          <h2>About</h2>
          <FontAwesomeIcon icon={faPenNib} />
          <FontAwesomeIcon icon={faEnvelope} />


          
          <p>lat: {resort?.lat}</p>
          <p>long: {resort?.long}</p>

          <p>liftCount: 2</p>
          <p>liftTypes: [ 'chairs', 'button' ]</p>
          <p>trailRatings: [ 'green', 'blue', 'red' ]</p>
          <p>bunnySlope: true</p>


          <h2>Contact</h2>          
          <h3>
            <p>{resort?.country === 'Poland' || resort?.country}</p>
            <p>{resort?.address}</p>
            <p>{resort?.phone}</p>
          </h3>
          <h3>{resort?.www}</h3>
          
          




          <h2>Map</h2>
          <ResortMap 
            title="Map" 
            src="https://pl.frame.mapy.cz/s/cozupugovu" 
            width="300" heigh="250"
            frameborder="0"
          />
        </Content>
      </ContentWrapper>












    </Wrapper>     
  )
}