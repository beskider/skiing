import { Wrapper, WebcamsTilesContainer } from './Webcams.styles';
import { useState, useContext, useEffect } from 'react';
import { ResortContext } from 'providers/ResortsProvider';

import { Title } from 'components/atoms/Title/Title';
import { FormFieldInput } from 'components/molecules/FormFieldInput/FormFieldInput';

import { FaSearch } from "react-icons/fa"
import { WebcamTile } from 'components/molecules/WebcamTile/WebcamTile';

export const Webcams = () => {

  const { resortsWithWebcams, findResortByTextFragmentInNameOrPlace, error, isLoading } = useContext(ResortContext);

  const [ inputSearch, setInputSerach ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  
  useEffect( () => {
    setSearchResults(resortsWithWebcams)
  }, [ isLoading, resortsWithWebcams ])

  // remove all props of iframe html element (in string format) except src
  const removePropsFromIframe = iframeEl => {
  
    let parser = new DOMParser();
    let parsedResult = parser.parseFromString(iframeEl, 'text/html');
    let iframeElSource = parsedResult.documentElement.getElementsByTagName('iframe')[0].getAttribute('src')

    let element = document.createElement('iframe');
    element.src = iframeElSource
    
    return element.outerHTML
  }

  const handleSearchChange = e => {
    const searchText = e.target.value
    setInputSerach(searchText)
    const searchedResorts = 
      findResortByTextFragmentInNameOrPlace(searchText)
      .filter(resort => resort.hasOwnProperty('webcams'))
    setSearchResults(searchedResorts)
  }

  const renderWebcamMinis = () => {

    if ( error ) return <><br/><h2>{error}</h2></>  
    if ( isLoading ) return <><br/><h2>Loading...</h2></> 
    if ( !searchResults.length ) return <><br/><h2>No webcams</h2></>
   
    return (
      <WebcamsTilesContainer>
        { searchResults.map( resort => {
           let iframes = []            
           resort.webcams.forEach( webcam => {
            let cleanCode = removePropsFromIframe(webcam.code)
            iframes.push(cleanCode)                     
           })
           return iframes.map(iframe => <WebcamTile 
                                          iframeEl={iframe} 
                                          resortName={resort.name} 
                                          resortPlace={resort.place}
                                        /> );
        })}
      </WebcamsTilesContainer>
    )    
  }

  return (
    <Wrapper>
      <Title>Webcams</Title> 
      <h4>Find the cam or select from the list below</h4> 
      <br/>   
      <FormFieldInput
        type="search"
        value={inputSearch}
        onChange={handleSearchChange}
        placeholder="enter the name or place..."
        icon={<FaSearch />}   
      />
      { renderWebcamMinis() }
    </Wrapper>
  );
}
