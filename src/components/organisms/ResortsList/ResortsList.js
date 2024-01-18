import { resorts as resortsData } from "data/resorts";
import { Button } from "components/atoms/Button/Button";
import { Wrapper, StyledList } from "./ResortsList.styles";
import { Title } from "components/atoms/Title/Title";
import { ResortsListItem } from "components/molecules/ResortsListItem/ResortsListItem";
import { useState, useEffect } from "react";

const mockResortsAPI = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resortsData) {
        resolve([...resortsData]);
      } else {
        reject({ message: "data load error" });
      }
    }, timeout);
  }); 
};

export const ResortsList = () => {

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

  return (
    <Wrapper>
      <Title>Ski resorts</Title>
      { isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <StyledList>
            { resorts.map( resort => (
                <ResortsListItem 
                  key={resort.id}
                  resort={resort} 
                />
            ))}
          </StyledList>
      )}
      <Button>Add</Button>
    </Wrapper>
  );
};