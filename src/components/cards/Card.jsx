import React from "react";
import {
  Container,
  CardContainer,
  CardContent,
  ImageContainer,
} from "./cardComp";

const Card = ({}) => {
  return (
    <Container>
      <CardContainer>
        <CardContent>
          <ImageContainer className="img">
            <img
              src="https://www.blockchainappfactory.com/images/p2p/cryptocurrencies.webp"
              alt=""
              className="img"
            />
          </ImageContainer>
          <h5 className="h5">Multiple Cryptocurrencies</h5>
          <p className="p">
            Our platform is integrated with multiple cryptocurrency support like
            BTC, LTC, ETH, USDT, etc.
          </p>
        </CardContent>
      </CardContainer>
    </Container>
  );
};

export default Card;
