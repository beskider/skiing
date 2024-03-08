import { Wrapper, ArticleWrapper, StyledDate, ContentWrapper } from "./News.styles"
import { truncateStringCompleteWords } from "helpers"
import { ReactComponent as CalendarIcon } from "assets/icons/calendar-icon.svg";
import { useContext } from "react";
import { NewsContext } from "providers/NewsProvider";

export const News = () => {

  const { isLoading, news } = useContext(NewsContext)
  
  return (
    <Wrapper>         
      {
        isLoading ? (
          <h3>Loading news...</h3> 
        ) : (
          !news.length ? (
            <h2>No news</h2>
          ) : (
            news.map( ({ title, date, content, image }) => (
              <ArticleWrapper key={title}>
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
          )         
        )
      }      
    </Wrapper>
  )
}
