import styled from "styled-components";
import { Section } from "../../../components/sections/section";
export const Container = styled.div`
  padding-top: 100px;
`;
export const Banner = styled.div`
  background-image: url("https://www.blockchainappfactory.com/images/p2p/p2p_banner_bg.webp");
  height: 100vh;
`;
export const Sec = styled(Section)`
  background-image: linear-gradient(to right, #00add8fa, #00c0b0d9);
  height: 100vh;
  padding-inline: 0;
`;
export const Layout = styled.div`
  display: flex;
  color: #ffffff;
`;
export const Image = styled.image`
  padding-block-start: 5vw;
`;
export const Content = styled.div`
  padding-inline-start: 7vw;
  padding-block-start: 5vw;
  .h1 {
    margin-bottom: 25px;
    line-height: 1.3;
    font-weight: 700;
    font-size: 40px;
  }
  .p1 {
    font-size: 18px;
    display: inline-block;
    width: 100%;
    color: #fff;
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
  padding: 10px 35px;
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
`;
export const Sec3CardContainer = styled.div`
`;
