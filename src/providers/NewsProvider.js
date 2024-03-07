import { useState, useEffect, useRef  } from "react";
import { createContext } from "react";
import axios from "axios";

import { news as mockedNews } from "data/news";
import { sortNewsByLatest } from "helpers";

export const query = `
{
  allArticles {
    id
    title
    date
    content
    image {
      url
    }
  }
}
`

export const NewsContext = createContext({
  news: [],
  isLoading: true,
})

export const NewsProvider = ({ children }) => {

  const newsLength = useRef(0)

  const [ news, setNews ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true);

  const fetchNews = async () => {    
    try {   
      const response = await axios.post(
        process.env.REACT_APP_DATOCMS_API_URL, 
        { query }, 
        { 
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`          
          }
        })              
        setNews(sortNewsByLatest(response.data.data.allArticles))      
        setIsLoading(false)  
    }  catch (error) {
      console.log(error.message)
    }
  }

  useEffect( () => {
    fetchNews()
    const checkLoadedNewsFromServer = setTimeout( () => {   
      if (!newsLength.current) {
        console.log('Loading mocked news from local file')
        setNews(sortNewsByLatest(mockedNews))
        setIsLoading(false)        
      }
    }, 4000)
     
    return () => clearTimeout(checkLoadedNewsFromServer)
  }, [])

  useEffect( () => {
    newsLength.current = news.length
  }, [ news ])

  return (
    <NewsContext.Provider
      value={{        
        news,
        isLoading
    }}>      
      {children}
    </NewsContext.Provider>
  )

}