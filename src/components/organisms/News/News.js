import { Wrapper, ArticleWrapper, StyledDate, ContentWrapper } from "./News.styles"
import { truncateStringCompleteWords } from "helpers"
import { ReactComponent as CalendarIcon } from "assets/icons/calendar-icon.svg";
import { news as mockedNews } from "data/news";
import { useEffect, useState } from "react";
import axios from "axios";

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

export const News = () => {

  const [ news, setNews ] = useState([])

  const fetchNews = async () => {
    let response = []
    try {   
      response = await axios.post(
        'https://graphql.datocms.com', 
        { 
          query 
        }, { 
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`          
        }
      })      
    }  catch (error) {
      console.log(error.message)
    }
    setNews(response.data.data.allArticles)    
  }
 
  useEffect( () => {
    fetchNews()
  }, [])
  
  return (
    <Wrapper>
      {
        news.map( ({ title, date, content, image }) => (
          <ArticleWrapper>
            <h3>{title}</h3>
            <StyledDate>
              <CalendarIcon/>
              {date}
            </StyledDate>
            <ContentWrapper>
              {image ? <img src={image.url} alt="article"/> : null}
              <p>{truncateStringCompleteWords(content,200)}</p>
            </ContentWrapper>
          </ArticleWrapper>
        ))
      }
    </Wrapper>
  )
}
