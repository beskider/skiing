import { resorts } from "data.js/resorts";
import { Wrapper } from "./Root.styles";
import { Button } from "components/Button/Button";

const Root = () => {
  return (
    <Wrapper>
      <h1>Witaj w apce</h1>
      { resorts.map( ( resort ) => (
        <div key={resort.id}>
          <h1>{resort.name}</h1>
          <p>{resort.place}</p>
          <a href={resort.www}>{resort.www}</a>
        </div>
      ))}
      
      <Button />
    </Wrapper>
  );
}

export default Root;
