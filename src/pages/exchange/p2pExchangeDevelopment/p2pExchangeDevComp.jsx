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
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
export const BannerContainer = styled.div``;

export const Sec2 = styled(Section)`
  display: flex;
  padding-block-start: 3vw;
`;
export const Content2 = styled.div`
  width: 100%;
  .h2 {
    font-size: 25px;
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
export const Image2 = styled.div``;

export const Sec3 = styled(Section)`
  .sec3-h3 {
    text-align: center;
    font-size: 25px;
    /* color: #000000; */
    line-height: 1.4;
    letter-spacing: 0.09rem !important;
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
