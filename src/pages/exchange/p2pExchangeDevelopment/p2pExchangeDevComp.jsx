import styled from "styled-components";
import { Section } from "../../../components/sections/section";
import { layout } from "../../../helpers/constant";
const { mobile, tablet, laptop, desktop } = layout;

export const Container = styled.div`
  padding-top: 100px;
`;
export const Banner = styled.div`
  background-image: url("https://www.blockchainappfactory.com/images/p2p/p2p_banner_bg.webp");
  /* height: 100vh; */
  background-size: cover;
`;
export const Sec = styled(Section)`
  background-image: linear-gradient(to right, #00add8fa, #00c0b0d9);
  padding-inline: 0;
  padding-block: 0;
  @media only screen and (min-width: ${mobile}) {
    /* height: 100vh; */
    padding-block: 8vw;
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    height: 100vh;
  }
`;
export const Layout = styled.div`
  display: flex;
  color: #ffffff;

  @media only screen and (min-width: ${mobile}) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
    gap: 40px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const Image = styled.image`
  /* padding-block-start: 6vw; */

  @media (max-width: 880px) {
    width: 80%;
    position: relative;
    left: 25px;
  }
`;
export const Content = styled.div`
  padding-inline-start: 7vw;
  /* padding-block-start: 6vw; */
  .h1 {
    margin-bottom: 25px;
    line-height: 1.3;
    font-weight: 700;
    font-size: clamp(26px, 4vw, 40px);
  }
  .p1 {
    font-size: 18px;
    display: inline-block;
    width: 100%;
    color: #fff;
  }
  @media (max-width: 420px) {
    /* padding-block: 20vw; */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 15px;
`;
export const Button = styled.button`
  background-color: #47b475;
  padding: 12px 30px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 30px;
  font-size: 12px;
  transition: all 0.3s ease-out 0s;
  border: none;
`;
export const BannerContainer = styled.div``;

export const Sec2 = styled(Section)`
  display: flex;
  padding-block-start: 3vw;

  @media only screen and (min-width: ${mobile}) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
    padding-inline-start: 7vw;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const Content2 = styled.div`
  width: 100%;
  .h2 {
    /* font-size: clamp(25px, 4vw, 40px); */
    font-size: 25px;
    letter-spacing: 1.5px;
    font-weight: 700;
    color: #000000;
    line-height: 1.4;
    text-transform: capitalize;
  }
`;
export const UnderLine = styled.div`
  border-bottom: 2px solid #c2c2c2;
  width: 32px;
  height: 1px;
  margin-bottom: 20px;
`;
export const ImageSec2 = styled.div``;

export const Sec3 = styled(Section)`
  .sec3-h3 {
    text-align: center;
    /* font-size: clamp(25px, 4vw, 40px); */
    font-size: 25px;

    color: #000000;
    line-height: 1.4;
    letter-spacing: 1.5px !important;
    text-transform: capitalize;
  }

  @media only screen and (min-width: ${mobile}) {
    padding-inline: 3vw;
  }
  @media only screen and (min-width: ${tablet}) {
    padding-inline: 6vw;
  }
  @media only screen and (min-width: ${laptop}) {
    padding-inline: 80px;
  }
  @media only screen and (min-width: ${desktop}) {
    padding-inline: 122px;
  }
`;

export const Sec4 = styled(Section)`
  padding-inline: 8vw;
  .sec4-h3 {
    text-align: center;
    /* font-size: clamp(25px, 4vw, 40px); */
    font-size: 25px;
    color: #000000;
    line-height: 1.4;
    letter-spacing: 1.5px !important;
    text-transform: capitalize;
  }
`;
export const CardSec4 = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
  /* @media (max-width:991px){
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  } */
`;

export const Sec5 = styled(Section)`
  .sec5-h2 {
    text-align: center;
    /* font-size: clamp(25px, 4vw, 40px); */
    font-size: 25px;
    color: #000000;
    line-height: 1.4;
    letter-spacing: 1.5px !important;
    text-transform: capitalize;
  }
`;
export const Sec5Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px 20px;
  border: 5px solid #eee;
  border-radius: 15px;
  background-color: #f2f2f2;
  .img-sec5 {
    /* max-width: 100%; */
  }
`;
export const Sec5CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: space-around;
  /* align-items: center; */
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Sec5Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
  border-radius: 20px;
  padding: 5px 0 1px;
  margin: 15px auto;
  padding: 20px 80px;
  width: 100%;

  .sec5-btn {
    background-color: #47b475;
    padding: 10px 0;
    border-radius: 30px;
    border: none;
    /* color: #fff; */
  }
  @media (max-width: 480px) {
    .sec5-btn {
      position: relative;
      left: 65px;
      width: 60%;
    }
  }
  .sec5-h4 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 1.5px;
    font-size: 16.57px;
    font-family: Lato, sans-serif;
    text-align: center;
    transition: all 0.3s ease-out 0s;
  }
  @media (max-width: 440px) {
    padding: 20px 0;
  }
`;
export const Sec7 = styled(Section)`
  padding-inline: 0;

  @media only screen and (min-width: ${mobile}) {
    padding-inline: 4vw;
  }
  @media only screen and (min-width: ${tablet}) {
    padding-inline: 6vw;
  }
  @media only screen and (min-width: ${laptop}) {
    padding-inline: 8vw;
  }
  @media only screen and (min-width: ${desktop}) {
    padding-inline: 122px;
  }
`;
export const LayoutSec7 = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media only screen and (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
export const LeftSec7 = styled.div`
  width: 50%;
  .li {
    background: #04bdb70d;
    margin-bottom: 21px;
    border-left: 4px solid #17b5587a;
    font-weight: bold;
    font-size: 15px;
  }
  .font {
    color: #17b559;
    font-size: 24px;
    vertical-align: middle;
    margin-right: 17px;
    width: 50px;
    text-align: center;
    height: 50px;
    background: #f5f5f5;
    padding: 10px;
    line-height: 33px;
  }
  .sec7-h2 {
    font-size: 25px;
    font-family: Lato, sans-serif;
    font-weight: 700;
    color: #000000;
    line-height: 1.4;
    text-transform: capitalize;
    max-width: 500px;
    /* padding-inline-start: 1vw; */
  }
  @media only screen and (max-width: ${tablet}) {
    width: 100%;
  }
`;
export const RightSec7 = styled.div`
  width: 50%;
  margin-top: 45px;
  @media only screen and (max-width: ${tablet}) {
    width: 80%;
    position: relative;
    left: 50px;
  }
  /* .img-sec7 {
    width: 50%;
  } */
`;

export const Sec8 = styled(Section)`
  .sec8-h2 {
    font-size: 25px;
    font-weight: 500;
    color: #000000;
    line-height: 1.4;
    text-transform: capitalize;
    letter-spacing: 10px;
  }
`;
export const LayoutSec8 = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
export const LeftSec8 = styled.div`
  width: 50%;
  @media only screen and (max-width: ${tablet}) {
    width: 100%;
    /* position: relative;
    left: 50px; */
  }
`;
export const RightSec8 = styled.div`
  width: 50%;
  @media only screen and (max-width: ${tablet}) {
    width: 100%;
  }
`;
export const Sec9 = styled(Section)``;
