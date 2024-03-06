import { Wrapper, ArticleWrapper, StyledDate, ContentWrapper } from "./News.styles"
import { truncateStringCompleteWords } from "helpers"
import { ReactComponent as CalendarIcon } from "assets/icons/calendar-icon.svg";
import { news } from "data/news";

export const News = () => {

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
