import styled from "styled-components";
import { Section } from "../../../components/sections/section";
import { layout } from "../../../helpers/constant";
const { mobile, tablet, laptop, desktop } = layout;

export const BannerContainer = styled.div`
  background: url("https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/banner_bg.webp");
  background-size: cover;
  padding-top: 100px;
  /* padding-block: 100px; */
  /* padding-bottom: 100px; */

  background-repeat: no-repeat;

  background-position: center;

  @media only screen and (min-width: ${mobile}) {
    padding-inline-start: 4vw;
    padding-top: 150px;
    padding-bottom: 0;
    height: max-content;
  }
  @media only screen and (min-width: ${tablet}) {
    /* padding-top: 20%; */
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
    padding-inline-start: 8vw;
    height: 100vh;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0 0 0 / 30%);
  /* background-color: #000000b8; */
`;
export const BannerLayout = styled.div`
  @media only screen and (min-width: ${mobile}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    display: flex;
    flex-direction: row;
  }
  @media only screen and (min-width: ${desktop}) {
    display: flex;
    flex-direction: row;
  }
`;
export const LeftLayout = styled.div`
  width: 50%;
  /* padding-top: 80px; */
  .h1 {
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 700;
    font-size: clamp(20px, 4vw, 30px);
    color: #ffffff;
    font-family: Lato, sans-serif;
  }
  .p1 {
    font-weight: 400;
    line-height: 1.6;
    font-size: clamp(14px, 3vw, 21px);
    display: block;
    color: #ffffff;
    max-width: 560px;
    font-family: "Open Sans", sans-serif;
  }
  @media (max-width: 480px) {
    width: 100%;
    .p1 {
      text-align: center;
    }
    .h1 {
      text-align: center;
    }
  }
  @media (max-width: 1001px) {
    width: 100%;
  }
  @media (min-width: 1100px) {
    padding-top: 60px;
  }
`;
export const RightLayout = styled.div`
  width: 50%;
  @media (max-width: 480px) {
    width: 100%;
  }
  @media (max-width: 1001px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  margin-top: 30px;
  gap: 15px;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    /* justify-content: center; */
    /* align-items: center; */
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
  }
`;
export const Button = styled.button`
  background-color: #47b475;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  padding: 12px 30px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 30px;
  font-size: 12px;
  transition: all 0.3s ease-out 0s;
  border: none;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const Sec2 = styled(Section)`
  padding-inline: 9vw;
  .p1 {
    margin-bottom: 0;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.5px;
    font-size: 14px;
  }
  .sec2-h2 {
    font-size: clamp(20px, 4vw, 25px);
    font-weight: 700;
    color: #000000;
    line-height: 1.4;
    font-family: "Lato", sans-serif;
  }
  @media (max-width: 440px) {
    .p1 {
      text-align: justify;
    }
  }
`;
export const Sec3 = styled(Section)`
  padding-inline: 7vw;
  .sec3-h2 {
    margin-bottom: 3vw;
    text-align: justify;
  }
`;
export const LayoutSec3 = styled.div`
  display: flex;

  @media only screen and (min-width: ${mobile}) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const LeftSec3 = styled.div`
  /* width: 50%; */
  .p1,
  .p2 {
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.5px;
    font-size: 14px;
  }
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
  }
  @media only screen and (min-width: ${laptop}) {
    width: 50%;
  }
`;
export const RightSec3 = styled.div`
  /* width: 50%; */
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
    .sec3-img {
      width: 100%;
    }
  }
  @media only screen and (min-width: ${laptop}) {
    width: 50%;
  }
`;
export const Sec4 = styled(Section)`
  padding-inline: 7vw;
  .p1-sec4 {
    text-align: center;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
  }
`;
export const LayoutSec4 = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2vw;
  @media only screen and (min-width: ${mobile}) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const LeftSec4 = styled.div`
  width: 50%;
  .sec4-img {
    width: 100%;
  }
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const RightSec4 = styled.div`
  /* width: 50%; */

  .primary-list li {
    position: relative;
    padding: 4px 12px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 30px;
    border-bottom: 2px solid #e9e9e9;
    color: #000000;
    font-size: 14px;
    text-align: justify;
  }
  .primary-list li:before {
    position: absolute;
    content: "\uf10c"; /* FontAwesome Unicode */
    font-family: "Font Awesome";
    font-weight: 900;
    left: 4px;
    top: 4px;
    font-size: 16px;
    line-height: 1;
    color: #47b475;
    /* border-radius: 5px; */
    padding: 4px;
  }
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
  }
`;
export const ButtonSec4 = styled.div`
  background-color: #47b475;
  padding: 12px 30px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 30px;
  font-size: 12px;
  transition: all 0.3s ease-out 0s;
  border: none;

  &:hover {
    transform: scale(1.1, 1.1);
    /* color: #47b475; */
    background-color: #337ab7;
  }
`;
export const Sec5 = styled(Section)`
padding-inline:7vw;
`;
