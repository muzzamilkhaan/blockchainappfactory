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
            <>
              <ContainerCard2 key={index}>
                {" "}
                <CardSec4Left>
                  <ImageCardSec2 className="img">
                    <img src={item.img} alt="" className="imgCard2" />
                  </ImageCardSec2>
                  <div>
                    <p className="p-card2">{item.title}</p>
                  </div>
                </CardSec4Left>
              </ContainerCard2>
              {/* {index !== length && ( */}
              <CardSec4Right>
                <img
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                  alt=""
                  className="arrowCard2"
                  key={index}
                />
              </CardSec4Right>
              {/* )} */}
            </>
          );
        })}
      </MainContainer>
    </>
  );
};

const MainContainer1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const CardContainer1 = styled.div`
  width: 50%; /* Adjust the width as needed */
  height: max-content; /* Adjust the height as needed */
  border: 1px solid #ccc;
  padding: 10px;
  position: relative;
`;

const LeftCard1 = styled(CardContainer1)`
  background-color: #aaffaa; /* Adjust the background color as needed */
`;

const RightCard1 = styled(CardContainer1)`
  background-color: #aaaaff; /* Adjust the background color as needed */
  margin-top: 60px;
`;
const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      <LeftCard1>
        {/* {cardData[0].content} */}
        {/* <div class="tm-detail tm-det tm-det-left"> */}
        <h4 class="common_h4 mb10 tm-det-tit">Step 1</h4>
        <ul class="process-list">
          <li>
            <p>
              Research, requirements gathering, and exchange preparation that
              suits your business model.
            </p>
          </li>
        </ul>
        {/* </div> */}
      </LeftCard1>
      <VerticalLine />
      <RightCard1>
        {/* {cardData[1].content} */}
        <h4 class="mb10 common_h4 tm-det-tit">Step 2</h4>
        <ul class="process-list">
          <li>
            <p>
              {" "}
              Essential technology integrations such as UX/UI enhanced security
              with legal compliance based on the geography of exchange
              corporation.{" "}
            </p>
          </li>
        </ul>
      </RightCard1>
      <LeftCard1>{cardData[2].content}</LeftCard1>
      <RightCard1>{cardData[3].content}</RightCard1>
      <LeftCard1>{cardData[4].content}</LeftCard1>
      <RightCard1>{cardData[5].content}</RightCard1>
    </MainContainer1>
  );
};

{
  /* <div class="timeline-center">
<div class="timeline-row row m-0">
  <div class="tm-detail tm-det tm-det-left">
    <h4 class="common_h4 mb10 tm-det-tit">Step 1</h4>
    <ul class="process-list">
      <li>
        <p>
          Research, requirements gathering, and exchange preparation that
          suits your business model.
        </p>
      </li>
    </ul>
  </div>
  <div class="tm-icon roadmap-icon-outer">
    {" "}
    <i class="fa fa-search-plus" aria-hidden="true"></i>{" "}
  </div>
</div>
<div class="timeline-row row m-0">
  <div class="tm-detail tm-det tm-det-right">
    <h4 class="mb10 common_h4 tm-det-tit">Step 2</h4>
    <ul class="process-list">
      <li>
        <p>
          {" "}
          Essential technology integrations such as UX/UI enhanced
          security with legal compliance based on the geography of
          exchange corporation.{" "}
        </p>
      </li>
    </ul>
  </div>
  <div class="tm-icon roadmap-icon-outer">
    {" "}
    <i class="fa fa-desktop" aria-hidden="true"></i>{" "}
  </div>
</div>
<div class="timeline-row row m-0">
  <div class="tm-detail tm-det tm-det-left">
    <h4 class="common_h4 mb10 tm-det-tit">Step 3</h4>
    <ul class="process-list">
      <li>
        <p>Trading engine installation.</p>
      </li>
    </ul>
  </div>
  <div class="tm-icon roadmap-icon-outer">
    {" "}
    <i class="fa fa-cogs" aria-hidden="true"></i>{" "}
  </div>
</div>
<div class="timeline-row row m-0">
  <div class="tm-detail tm-det tm-det-right">
    <h4 class="mb10 common_h4 tm-det-tit">Step 4</h4>
    <ul class="process-list">
      <li>
        <p>Integration of various blockchains into the platform. </p>
      </li>
    </ul>
  </div>
  <div class="tm-icon roadmap-icon-outer">
    {" "}
    <i class="fa fa-btc" aria-hidden="true"></i>{" "}
  </div>
</div>
<div class="timeline-row row m-0">
  <div class="tm-detail tm-det tm-det-left">
    <h4 class="common_h4 mb10 tm-det-tit">Step 5</h4>
    <ul class="process-list">
      <li>
        <p>Listing of tokens/ coins. </p>
      </li>
    </ul>
  </div>
  <div class="tm-icon roadmap-icon-outer">
    {" "}
    <i class="fa fa-list" aria-hidden="true"></i>{" "}
  </div>
</div>
<div class="timeline-row row m-0">
  <div class="tm-detail tm-det tm-det-right">
    <h4 class="mb10 common_h4 tm-det-tit">Step 6</h4>
    <ul class="process-list">
      <li>
        <p>Delivery of exchange platform.</p>
      </li>
    </ul>
  </div>
  <div class="tm-icon roadmap-icon-outer">
    {" "}
    <i class="fa fa-exchange" aria-hidden="true"></i>{" "}
  </div>
</div>
</div> */
}
