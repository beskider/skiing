import { resorts } from "data/resorts"
import { Button } from "components/Button/Button"
import { Wrapper } from "./MainTemplate.styles"

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <h1>Witaj w apce</h1>
    { resorts.map( ( resort ) => (
      <div key={resort.id}>
        <h1>{resort.name}</h1>
        <p>{resort.place}</p>
        <a href={resort.www}>{resort.www}</a>
      </div>
    ))}
    <Button/>
  </Wrapper>
)