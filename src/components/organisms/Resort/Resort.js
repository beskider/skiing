import { Wrapper, HeaderWrapper, Logo, TitleWrapper, ResortIconWrapper, Alt, ContentWrapper, Content, TrailsBar, ResortImage, ResortView, ResortMap, ResortInfoEntry } from './Resort.styles';
import { ReactComponent as PersonSkiing } from "assets/icons/person-skiing.svg";

import { getMaxTrailDifficulty, countLifts } from 'helpers';
import { ResortIcon } from 'components/atoms/ResortIcon/ResortIcon';
import { ResortDifficultyBar } from 'components/atoms/ResortDifficultyBar/ResortDifficultyBar';

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ResortContext } from "providers/ResortsProvider";
import { LiftsPanel } from "components/molecules/LiftsPanel/LiftsPanel";

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faPhoneFlip, faGlobe, faMapPin } from '@fortawesome/free-solid-svg-icons'

export const Resort = () => {

  const { name } = useParams()
  const { findResortByName: findResort } = useContext(ResortContext)
   
  const [ resort, setResort ] = useState({});

  useEffect( () => {
    setResort(findResort(name))
  }, [findResort, name])

  if (!resort) return <h3>No data</h3>;

  return (   
    <Wrapper>   
      <HeaderWrapper>
        <Logo>
          <img src={process.env.PUBLIC_URL + `/images/resorts/${resort?.shortname}-logo.png`} alt="Resort logo" />
        </Logo>
        <TitleWrapper>
          <h1>{resort?.name}</h1>
          <h3>{resort?.place}{ resort?.country === 'Poland' || `, ${resort?.country}` }</h3>
        </TitleWrapper>
        <ResortIconWrapper>
          <ResortIcon $isBig value={getMaxTrailDifficulty(resort?.trailRatings)}>{countLifts(resort?.lifts)}</ResortIcon>
        </ResortIconWrapper>
        <Alt>{resort?.alt} <small>m n.p.m.</small></Alt>
      </HeaderWrapper>
      <ContentWrapper>
        <Zoom>
          <ResortView 
            alt="View"
            src={process.env.PUBLIC_URL + `/images/resorts/${resort?.shortname}-view.jpg`}  
          />      
        </Zoom>
        <Zoom>
          <ResortImage 
            alt="Photo"
            src={process.env.PUBLIC_URL + `/images/resorts/${resort?.shortname}-image.jpg`}  
          />      
        </Zoom>
        <LiftsPanel lifts={resort.lifts} />
        <Content>
          <h2>About</h2>
          <p>{resort?.description}</p>
          <TrailsBar>
            <PersonSkiing />
            <ResortDifficultyBar trailRatings={resort?.trailRatings}/>   
          </TrailsBar>
          <h2>Contact</h2>   
          <p><strong>{resort?.name}</strong></p>
          <p>{resort?.country === 'Poland' || resort?.country}</p>  
          <ResortInfoEntry>
            <FontAwesomeIcon icon={faAddressCard} />
            <span>{resort?.address}</span>
          </ResortInfoEntry>
          <ResortInfoEntry>
            <FontAwesomeIcon icon={faPhoneFlip} />
            <span>{resort?.phone}</span>
          </ResortInfoEntry>        
          <ResortInfoEntry>
            <FontAwesomeIcon icon={faGlobe} />
            <span>{resort?.www}</span>
          </ResortInfoEntry>   

          <h2>Localization</h2>
          <ResortInfoEntry>
            <FontAwesomeIcon icon={faMapPin} />
            <span>{resort?.lat} {resort?.long}</span>
          </ResortInfoEntry>   




    
    {/* 

    trailRatings: [ 'green', 'blue', 'red' ],
    bunnySlope: true,
    www: 'https://jurasowka.pl',
    phone: '14 625 80 91',
    address: '33-181 Siemiechów 359', 
    */}
    
    















          

       

          
          




          <h2>Map</h2>
          <ResortMap 
            title="Map" 
            src={resort?.maplink} 
            width="300" height="200"
          />
        </Content>
      </ContentWrapper>











  
    </Wrapper>     
  )
}