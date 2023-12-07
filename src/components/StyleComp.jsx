import styled from "styled-components";
import { layout } from "../helpers/constant";
import { Section } from "./sections/section";
const { mobile, tablet, laptop, desktop } = layout;

export const BannerContainer = styled(Section)`
  background: url(${({ bgImg }) => (bgImg ? bgImg : "")});
  /* background: url("https://www.blockchainappfactory.com/images/matic/banner.webp"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-inline: 7vw;
  height: 90vh;
  @media (max-width: 768px) {
    background: #222351;
    height: max-content;
  }
`;
export const BannerLayout = styled.div`
  @media only screen and (min-width: ${mobile}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 60px;
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    /* padding-top: 0px; */
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: center; */
    /* background-color: #ff000063; */
  }
  @media only screen and (min-width: ${desktop}) {
    display: flex;
    flex-direction: row;
  }
`;
export const LeftLayout = styled.div`
  .h1-banner {
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 700;
    font-family: "Lato", "sans-serif";
    text-transform: capitalize;
    color: #fff;
  }
  .p-banner {
    line-height: 1.6;
    font-size: 21px;
    max-width: 800px;
    font-weight: normal;
    font-family: "Open Sans", "sans-serif";
    color: #fff;
  }
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
    .h1-banner {
      font-size: 25px;
      text-align: center;
    }
    .p-banner {
      font-size: 14px;
      text-align: center;
    }
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    width: 50%;
    .h1-banner {
      font-size: 37px;
      text-align: left;
    }
    .p-banner {
      font-size: 21px;
      text-align: left;
    }
  }
`;
export const RightLayout = styled.div`
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
  }
  @media only screen and (min-width: ${laptop}) {
    width: 50%;
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

//BUTTON-STYLING
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 12px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
export const ButtonComp = styled.button`
  background-color: #47b475;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  padding: 12px 30px;
  font-weight: 550;
  cursor: pointer;
  border-radius: 30px;
  font-size: 14px;
  transition: all 0.3s ease-out 0s;
  border: none;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
