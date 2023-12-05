import React from "react";
import {
  Container,
  CardContainer,
  CardContent,
  ImageContainer,
  ImageCardSec2,
  ContainerCard2,
  MainContainer,
} from "./cardComp";

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
      <div class="col-md-3 col-sm-6 col-xs-6">
        <div class="equal-height work_pr work_pr_1">
          <div class="work_ic">
            {" "}
            <img
              class=""
              data-src="images/p2p/seo-and-web.webp"
              src="https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp"
            />{" "}
          </div>
          <div class="work_cnt">
            <p>User Registration</p>
          </div>{" "}
          <img
            class="arrr"
            data-src="images/p2p/arw.webp"
            src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
          />{" "}
        </div>
      </div>
      ;
      {/* <h1>hello</h1>
      <div>
        <div>
          <img
            className=""
            src="https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp"
            data-src="images/p2p/seo-and-web.webp"
          />
        </div>
      </div> */}
      {/* <div
        className="equal-height work_pr work_pr_1"
        style={{ minHeight: "141px" }}
      >
        <div
          className="work_ic"
          style={{
            background: "#fff",
            width: "100px",
            margin: "0 auto 18px",
            borderRadius: "50%",
            height: "100px",
            boxShadow: "0 0 10px #ccc",
          }}
        >
          <img
            className=""
            src="https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp"
            style={{
              height: "50px",
              marginTop: "30px",
              marginBottom: "15px",
            }}
          />
        </div>
        <div className="work_cnt">
          <p>User Registration</p>
        </div>
        <img
          className="arrr"
          src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
        />
      </div> */}
      {/* <MainContainer>
      {data.map((item, index) => {
        return (
          <ContainerCard2 key={index}>
            {" "}
            <div>
              <ImageCardSec2 className="img">
                <img src={item.img} alt="" className="imgCard2" />
              </ImageCardSec2>
              <p className="p-card2">{item.title}</p>
            </div>
            {index !== length && (
              <img
                src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                alt=""
                className="arrowCard2"
                key={index}
              />
            )}
          </ContainerCard2>
        );
      })}
      </MainContainer> */}
    </>
  );
};
