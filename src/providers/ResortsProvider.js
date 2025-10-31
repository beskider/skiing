import { resorts as resortsData } from "data/resorts";

import { createContext } from "react";
import { useState, useEffect } from "react";

export const ResortContext = createContext({
  resorts: [],
  resortsWithWebcams: [],
  findResortByName: () => {},
  findResortByTextFragmentInNameOrPlace: () => {},
  addResort: () => {},
  deleteResort: () => {},
  getNewId: () => {},
  isLoading: true,
  error: '',
})

const mockResortsAPI = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resortsData) {
        resolve([...resortsData]);
      } else {
        reject({ message: "Data load error" });
      }
    }, timeout);
  }); 
};

export const ResortsProvider = ({ children }) => {

  const [ resorts, setResorts ] = useState([]);
  const [ resortsWithWebcams, setResortsWithWebcams ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState('');

  useEffect( () => {
    setIsLoading(true);
    mockResortsAPI(2000)
      .then((data) => {
        setIsLoading(false);
        setResorts(data);
        setResortsWithWebcams(getResortsWithWebcams(data))
      })
      .catch((err) => { 
        setError(err.message);
        console.log(err);
      })
  }, [])

  const findResortByName = name => {
    if (!name) return null;
    return resorts.find( resort => resort.name.toLowerCase() === name.toLowerCase())
  }

  const findResortByTextFragmentInNameOrPlace = text => {
    return resorts.filter( resort => 
              resort
                .name.toLowerCase()
                .includes(text.toLowerCase())
              ||
              resort
                .place.toLowerCase()
                .includes(text.toLowerCase())
          )
  }  

  const addResort = (data) => {        
    setResorts([ data, ...resorts ])
  }

  const deleteResort = id => {
    const filteredResorts = resorts.filter( resort => resort.id !== id);
    setResorts(filteredResorts);
  }

  const getResortsWithWebcams = resorts => {
    return resorts.filter(resort => resort.hasOwnProperty('webcams'))
  } 

  const getNewId = () => {
    return resorts.reduce( (prev, current) => ( 
      prev && Number(prev.id) > Number(current.id) ) ? prev.id : current.id )
  }

  return (
    <ResortContext.Provider 
      value={{
        resorts,
        resortsWithWebcams,
        findResortByName,
        findResortByTextFragmentInNameOrPlace,
        addResort,
        deleteResort,
        getNewId,
        isLoading,
        error
    }}>
      {children}
    </ResortContext.Provider>
  )
}
