import { Wrapper, ArticleWrapper, StyledDate, ContentWrapper } from "./News.styles"
import { truncateStringCompleteWords } from "helpers"
import { ReactComponent as CalendarIcon } from "assets/icons/calendar-icon.svg";
import { useContext } from "react";
import { NewsContext } from "providers/NewsProvider";

export const News = () => {

  const { isLoading, news, error } = useContext(NewsContext)  

  const renderNews = () => {
    if (error) return <h3>{error}</h3>
    if (isLoading) return <h3>Loading news...</h3> 
    if (!news.length) return <h2>No news</h2>
    return (
      news.map( ({ id, title, date, content, image }) => (
        <ArticleWrapper key={id}>
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
  }

  return (
    <Wrapper> 
      { renderNews() }
    </Wrapper>
  )
}
