import React from "react";
import {
  Container,
  CardContainer,
  CardContent,
  ImageContainer,
  ImageCardSec2,
  ContainerCard2,
  MainContainer,
  CardSec4Left,
  CardSec4Right,
  Check,
} from "./cardComp";
import styled from "styled-components";

export const Card = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => {
        return (
          <CardContainer key={index}>
            <CardContent>
              <ImageContainer className="img">
                <img src={item.img} alt="" className="img" />
              </ImageContainer>
              <h5 className="h5">{item.title}</h5>
              <p className="p">{item.desc}</p>
            </CardContent>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export const ExchangeCardSec4 = ({ data }) => {
  let length = data.length - 1;
  return (
    <>
      <MainContainer>
        {data.map((item, index) => {
          return (
            <ContainerCard2 key={index}>
              {" "}
              <CardSec4Left>
                <ImageCardSec2 className="img">
                  <img src={item.img} alt="" className="imgCard2" />
                </ImageCardSec2>
                <p className="p-card2">{item.title}</p>
              </CardSec4Left>
              {index !== length && (
                <CardSec4Right>
                  <img
                    src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                    alt=""
                    className="arrowCard2"
                    key={index}
                  />
                </CardSec4Right>
              )}
            </ContainerCard2>
          );
        })}
      </MainContainer>
    </>
  );
};

const MainContainer1 = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

const CardContainer1 = styled.div`
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
  border: 1px solid #ccc;
  padding: 10px;
`;

const LeftCard1 = styled(CardContainer1)`
  background-color: #aaffaa; /* Adjust the background color as needed */
`;

const RightCard1 = styled(CardContainer1)`
  background-color: #aaaaff; /* Adjust the background color as needed */
  margin-top: 60px;
`;

export const YourComponent = () => {
  // Assuming you have an array of card data
  const cardData = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
    { id: 6, content: "Card 6" },
  ];

  return (
    <MainContainer1>
      <LeftCard1>{cardData[0].content}</LeftCard1>
      <RightCard1>{cardData[1].content}</RightCard1>
      <LeftCard1>{cardData[2].content}</LeftCard1>
      <RightCard1>{cardData[3].content}</RightCard1>
      <LeftCard1>{cardData[4].content}</LeftCard1>
      <RightCard1>{cardData[5].content}</RightCard1>
    </MainContainer1>
  );
};
