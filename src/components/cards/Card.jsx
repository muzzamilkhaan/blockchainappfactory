import React from "react";
import {
  Container,
  CardContainer,
  CardContent,
  ImageContainer,
} from "./cardComp";

const Card = ({ data }) => {
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

export default Card;
