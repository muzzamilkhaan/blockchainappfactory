import React from "react";
import { CardSec5, Content, IconBox, MainContainer } from "./nftcardComp";
export const NftCard = ({ data }) => {
  return (
    <div>
      <MainContainer>
        {data.map((item, index) => {
          return (
            <CardSec5 key={index}>
              <IconBox>
                <img src={item.img} alt="" className="nftCard-img" />
              </IconBox>
              <Content>
                <h3 className="h3-nftCard">{item.title}</h3>
                <p>{item.desc}</p>
              </Content>
            </CardSec5>
          );
        })}
      </MainContainer>
    </div>
  );
};
