import styled from "styled-components";
import { layout } from "../../../helpers/constant";
import { Section } from "../../sections/section";
const { mobile, tablet, laptop, desktop } = layout;

export const MainContainer = styled.div`
  display: grid;
  gap: 20px;

  @media only screen and (min-width: ${mobile}) {
  }
  @media only screen and (min-width: ${tablet}) {
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: ${desktop}) {
  }
  /* gap: 10px; */
`;

export const CardSec5 = styled.div`
  display: flex;
  box-shadow: 0 5px 15px 0 rgb(21 10 82 / 20%);
  padding: 15px 10px 10px;
  border-radius: 16px;
  background-color: #fff;
  transition: 0.3s;
  /* min-height: 150px; */
  margin-bottom: 20px;

  /* width: 90%;
  height: 150px; */

  @media only screen and (min-width: ${mobile}) {
    flex-direction: column;
    gap: 10px;
  }
  @media only screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 20px;
  }
  @media only screen and (min-width: ${laptop}) {
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const IconBox = styled.div`
  width: 80px;
  height: 80px;
  line-height: 75px;
  position: relative;
  border-radius: 0 50% 50% 0;
  color: #fff;
  font-size: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  z-index: 9;
  float: left;
  background: #f2f2f2;
  margin-left: -15px;

  .nftCard-img {
    transition: transform 0.3s ease;
  }
  &:hover .nftCard-img {
    transform: rotate(360deg);
  }
`;
export const Content = styled.div`
  /* max-width: 400px; */

  .h3-nftCard {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    font-family: "Lato", "sans-serif";
    letter-spacing: 0;
    line-height: 1.3;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: ${mobile}) {
    /* max-width: 150px;   */
  }
  @media only screen and (min-width: ${tablet}) {
    max-width: max-content;
  }
  @media only screen and (min-width: ${laptop}) {
    max-width: 350px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;

