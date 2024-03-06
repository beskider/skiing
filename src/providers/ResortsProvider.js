import { resorts as resortsData } from "data/resorts";

import { createContext } from "react";
import { useState, useEffect } from "react";

export const ResortContext = createContext({
  resorts: [],
  addResort: () => {},
  deleteResort: () => {},
  isLoading: true,
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
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    setIsLoading(true);
    mockResortsAPI(2000)
      .then((data) => {
        setIsLoading(false);
        setResorts(data);
      })
      .catch((err) => console.log(err));
  }, [])

  const addResort = (data) => {    
    setResorts([ data, ...resorts ])
  }

  const deleteResort = id => {
    const filteredResorts = resorts.filter( resort => resort.id !== id);
    setResorts(filteredResorts);
  }

  return (
    <ResortContext.Provider 
      value={{
        resorts,
        addResort,
        deleteResort,
        isLoading,
    }}>
      {children}
    </ResortContext.Provider>
  )
}
