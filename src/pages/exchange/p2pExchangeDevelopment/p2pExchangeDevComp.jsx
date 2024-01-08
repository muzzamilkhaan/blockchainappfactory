import React from "react";
import "./p2pExchangeDevelopment.css";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
import Sec7 from "./Sec7";
import Sec8 from "./Sec8.jsx";
import Sec9 from "./Sec9.jsx";
import Sec10 from "./Sec10.jsx";
import WeSpotlightedIn from "../../../components/shared/WeSpotlightedIn.jsx";
import styled from "styled-components";
import { Section } from "../../../components/sections/section.jsx";

export const SecSeven = styled.div``;
export const Sec6Comp = styled(Section)`
  .sec_tit {
    font-family: "Lato", "sans-serif";
    color: #000;
    text-transform: capitalize;
    font-size: 25px;
  }
  .timeline-row i {
    color: #47b474;
    font-size: 30px;
    line-height: 1;
  }
  .timeline-center .timeline-row:nth-of-type(even) {
    margin-left: 50% !important;
  }
  .timeline-center::before {
    background: #47b475 !important;
  }
  .nectar-button {
    padding: 15px 25px;
    border-radius: 30px;
    transition: transform 0.3s ease-in-out;
  }
  .nectar-button:hover {
    transform: scale(1.08, 1.08);
  }
  @media (min-width: 1200px) {
    .container {
      width: 850px;
    }
  }
  @media (min-width: 768px) {
    .container {
      /* width: 100%; */
    }
  }
  @media (max-width: 1001px) {
    .tm-detail {
      margin-left: -18%;
    }
  }
  .timeline-center h4 {
    font-family: "Lato", sans-serif;
  }
`;
const p2pExchangeDevComp = () => {
  return (
    <div id="p2p-exchange-development">
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7 />
      <Sec8 />
      <Sec9 />
      <Sec10 />
      <WeSpotlightedIn />
    </div>
  );
};

export default p2pExchangeDevComp;

// import styled from "styled-components";
// import { Section } from "../../../components/sections/section";
// import { layout } from "../../../helpers/constant";
// import { H1, H2 } from "../../../components/index";
// const { mobile, tablet, laptop, desktop } = layout;

// export const Heading1 = styled(H1)`
//   color: #fff;
// `;
// export const Container = styled.div`
//   padding-top: 100px;
// `;
// export const Banner = styled.div`
//   background-image: url("https://www.blockchainappfactory.com/images/p2p/p2p_banner_bg.webp");
//   /* height: 100vh; */
//   background-size: cover;
// `;
// export const Sec = styled(Section)`
//   background-image: linear-gradient(to right, #00add8fa, #00c0b0d9);
//   padding-inline: 0;
//   padding-block: 0;
//   @media only screen and (min-width: ${mobile}) {
//     /* height: 100vh; */
//     padding-block: 8vw;
//   }
//   @media only screen and (min-width: ${tablet}) {
//   }
//   @media only screen and (min-width: ${laptop}) {
//     height: 100vh;
//   }
// `;
// export const Layout = styled.div`
//   display: flex;
//   color: #ffffff;

//   @media only screen and (min-width: ${mobile}) {
//     display: flex;
//     flex-direction: column;
//   }
//   @media only screen and (min-width: ${tablet}) {
//     flex-direction: row;
//   }
//   @media only screen and (min-width: ${laptop}) {
//     flex-direction: row;
//     gap: 40px;
//   }
//   @media only screen and (min-width: ${desktop}) {
//   }
// `;
// export const Image = styled.image`
//   /* padding-block-start: 6vw; */

//   @media (max-width: 880px) {
//     width: 80%;
//     position: relative;
//     left: 25px;
//   }
// `;
// export const Content = styled.div`
//   padding-inline-start: 7vw;
//   /* padding-block-start: 6vw; */
//   .h1 {
//     margin-bottom: 25px;
//     line-height: 1.3;
//     font-weight: 700;
//     font-size: clamp(26px, 4vw, 40px);
//   }
//   .p1 {
//     font-size: 18px;
//     display: inline-block;
//     width: 100%;
//     color: #fff;
//   }
//   @media (max-width: 768px) {
//     /* padding-block: 20vw; */
//     .h1 {
//       text-align: center;
//     }
//     .p1 {
//       text-align: center;
//     }
//   }
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 15px;
// `;
// export const Button = styled.button`
//   background-color: #47b475;
//   padding: 12px 30px;
//   font-weight: 700;
//   cursor: pointer;
//   border-radius: 30px;
//   font-size: 12px;
//   transition: all 0.3s ease-out 0s;
//   border: none;
//   .banner-sec {
//     color: #fff;
//   }
//   &:hover {
//     transform: scale(1.1, 1.1);
//     /* color: #47b475; */
//     background-color: #00a9e2;
//   }
//   &:hover.sec5-btn {
//     transform: scale(1.1, 1.1);
//     /* color: #47b475; */
//     background-color: #00a9e2;
//     color: #fff;
//   }
// `;
// export const BannerContainer = styled.div``;

// export const Sec2 = styled(Section)`
//   display: flex;
//   padding-block-start: 3vw;

//   @media only screen and (min-width: ${mobile}) {
//     display: flex;
//     flex-direction: column-reverse;
//   }
//   @media only screen and (min-width: ${tablet}) {
//   }
//   @media only screen and (min-width: ${laptop}) {
//     flex-direction: row;
//     padding-inline-start: 7vw;
//   }
//   @media only screen and (min-width: ${desktop}) {
//   }
// `;
// export const Content2 = styled.div`
//   width: 100%;
//   .h2 {
//     /* font-size: clamp(25px, 4vw, 40px); */
//     font-size: 25px;
//     letter-spacing: 1.5px;
//     font-weight: 700;
//     color: #000000;
//     line-height: 1.4;
//     text-transform: capitalize;
//   }
// `;
// export const UnderLine = styled.div`
//   border-bottom: 2px solid #c2c2c2;
//   width: 32px;
//   height: 1px;
//   margin-bottom: 20px;
// `;
// export const ImageSec2 = styled.div``;

// export const Sec3 = styled(Section)`
//   .sec3-h3 {
//     text-align: center;
//     /* font-size: clamp(25px, 4vw, 40px); */
//     font-size: 25px;

//     color: #000000;
//     line-height: 1.4;
//     letter-spacing: 1.5px !important;
//     text-transform: capitalize;
//   }

//   @media only screen and (min-width: ${mobile}) {
//     padding-inline: 3vw;
//   }
//   @media only screen and (min-width: ${tablet}) {
//     padding-inline: 6vw;
//   }
//   @media only screen and (min-width: ${laptop}) {
//     padding-inline: 80px;
//   }
//   @media only screen and (min-width: ${desktop}) {
//     padding-inline: 122px;
//   }
// `;

// export const Sec4 = styled(Section)`
//   padding-inline: 0;
//   .sec4-h3 {
//     text-align: center;
//     /* font-size: clamp(25px, 4vw, 40px); */
//     font-size: 25px;
//     color: #000000;
//     line-height: 1.4;
//     letter-spacing: 1.5px !important;
//     text-transform: capitalize;
//   }
//   @media only screen and (min-width: ${mobile}) {
//     padding-inline: 3vw;
//   }
//   @media only screen and (min-width: ${tablet}) {
//     padding-inline: 6vw;
//   }
//   @media only screen and (min-width: ${laptop}) {
//     padding-inline: 12vw;
//   }
//   @media only screen and (min-width: ${desktop}) {
//   }
// `;
// export const ButtonSec4 = styled.button`
//   margin: 0 auto;
//   border: none;
//   border-radius: 30px;
//   background-color: #47b475;
//   padding: 12px 30px;
//   transition: all 0.3s ease-out 0s;

//   .sec5-anchor {
//     color: #fff;
//   }
//   &:hover {
//     transform: scale(1.1, 1.1);
//     /* color: #47b475; */
//     background-color: #337ab7;
//   }
// `;
// export const CardSec4 = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 80px;
//   flex-wrap: wrap;
//   /* @media (max-width:991px){
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//   } */
// `;

// export const Sec5 = styled(Section)`
//   .sec5-h2 {
//     text-align: center;
//     /* font-size: clamp(25px, 4vw, 40px); */
//     font-size: 25px;
//     color: #000000;
//     line-height: 1.4;
//     letter-spacing: 1.5px !important;
//     text-transform: capitalize;
//   }
// `;
// export const Sec5Layout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   padding: 40px 20px;
//   border: 5px solid #eee;
//   border-radius: 15px;
//   background-color: #f2f2f2;
//   .img-sec5 {
//     /* max-width: 100%; */
//   }
// `;
// export const Sec5CardContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   /* flex-direction: column; */
//   justify-content: space-around;
//   /* align-items: center; */
// `;
// export const InnerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
// export const Sec5Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #000;
//   border-radius: 20px;
//   padding: 5px 0 1px;
//   margin: 15px auto;
//   padding: 20px 80px;
//   width: 100%;

//   .sec5-btn {
//     background-color: #47b475;
//     padding: 10px 0;
//     border-radius: 30px;
//     border: none;
//     /* color: #fff; */
//   }

//   @media (max-width: 480px) {
//     .sec5-btn {
//       position: relative;
//       left: 65px;
//       width: 60%;
//     }
//   }
//   .sec5-h4 {
//     color: #fff;
//     font-weight: 500;
//     letter-spacing: 1.5px;
//     font-size: 16.57px;
//     font-family: Lato, sans-serif;
//     text-align: center;
//     transition: all 0.3s ease-out 0s;
//   }
//   @media (max-width: 440px) {
//     padding: 20px 0;
//   }
// `;

// export const Sec7 = styled(Section)`
//   padding-inline: 0;

//   @media only screen and (min-width: ${mobile}) {
//     padding-inline: 4vw;
//   }
//   @media only screen and (min-width: ${tablet}) {
//     padding-inline: 6vw;
//   }
//   @media only screen and (min-width: ${laptop}) {
//     padding-inline: 8vw;
//   }
//   @media only screen and (min-width: ${desktop}) {
//     padding-inline: 122px;
//   }
// `;
// export const LayoutSec7 = styled.div`
//   display: flex;
//   justify-content: space-around;
//   gap: 20px;

//   @media only screen and (max-width: ${tablet}) {
//     display: flex;
//     flex-direction: column;
//   }
// `;
// export const LeftSec7 = styled.div`
//   width: 50%;
//   .li {
//     background: #04bdb70d;
//     margin-bottom: 21px;
//     border-left: 4px solid #17b5587a;
//     font-weight: bold;
//     font-size: 15px;
//   }
//   .font {
//     color: #17b559;
//     font-size: 24px;
//     vertical-align: middle;
//     margin-right: 17px;
//     width: 50px;
//     text-align: center;
//     height: 50px;
//     background: #f5f5f5;
//     padding: 10px;
//     line-height: 33px;
//   }
//   .sec7-h2 {
//     font-size: 25px;
//     font-family: Lato, sans-serif;
//     font-weight: 700;
//     color: #000000;
//     line-height: 1.4;
//     text-transform: capitalize;
//     max-width: 500px;
//     /* padding-inline-start: 1vw; */
//   }
//   @media only screen and (max-width: ${tablet}) {
//     width: 100%;
//   }
// `;
// export const RightSec7 = styled.div`
//   width: 50%;
//   margin-top: 45px;
//   @media only screen and (max-width: ${tablet}) {
//     width: 80%;
//     position: relative;
//     left: 50px;
//   }
//   /* .img-sec7 {
//     width: 50%;
//   } */
// `;

// export const Sec8 = styled(Section)`
//   .sec8-h2 {
//     font-size: 25px;
//     font-weight: 500;
//     color: #000000;
//     line-height: 1.4;
//     text-transform: capitalize;
//     letter-spacing: 10px;
//   }
// `;
// export const LayoutSec8 = styled.div`
//   display: flex;
//   justify-content: space-around;

//   @media only screen and (max-width: ${tablet}) {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//   }
// `;
// export const LeftSec8 = styled.div`
//   width: 50%;
//   @media only screen and (max-width: ${tablet}) {
//     width: 100%;
//     /* position: relative;
//     left: 50px; */
//   }
// `;
// export const RightSec8 = styled.div`
//   width: 50%;
//   @media only screen and (max-width: ${tablet}) {
//     width: 100%;
//   }
// `;
// export const Sec9 = styled(Section)``;

// export const SecOne = styled.div`
//   .banner {
//     /* height: auto; */
//     background-image: url("https://www.blockchainappfactory.com/images/p2p/p2p_banner_bg.webp");
//     background-size: cover;
//     padding-top: 180px;
//     padding-bottom: 0;
//     height: 100vh;
//     position: relative;
//     overflow: hidden;
//     &::after {
//       content: "";
//       width: 100%;
//       height: 100%;
//       position: absolute;
//       top: 0px;
//       left: 0px;
//       background-image: linear-gradient(to right, #00add8fa, #00c0b0d9);
//     }
//   }
//   #ico .banner_content {
//     text-align: left;
//     position: relative;
//     top: 0;
//     transform: none;
//     color: #fff;
//     left: 0;
//     right: 0;
//     display: block;
//     z-index: 1;
//   }
//   .banner_content .contental {
//     margin-top: 130px;
//     @media (max-width: 767px) {
//       margin-top: 300px;
//     }
//   }
//   .contental h1 {
//     margin-bottom: 25px;
//     line-height: 1.3;
//     font-weight: 700;
//     font-size: 40px;
//     color: #fff;
//     text-align: start;
//     font-family: "Lato", sans-serif;
//     @media (max-width: 767px) {
//       text-align: center;
//       font-size: 26px;
//     }
//   }
//   .contental p {
//     font-size: 18px;
//     display: inline-block;
//     width: 100%;
//     margin-bottom: 20px;
//     color: #fff;
//     text-align: start;
//     @media (max-width: 767px) {
//       text-align: center;
//     }
//   }

//   .p2b_ban img {
//     max-width: 125% !important;
//     padding-top: 100px;
//     @media (max-width: 767px) {
//       max-width: 80% !important;
//       padding-top: 0;
//     }
//   }
//   .d-flex {
//     @media (max-width: 767px) {
//       justify-content: center !important;
//     }
//   }
// `;
// export const SecTwo = styled.div``;
// export const SecThree = styled.div`
//   .flip-box {
//     min-height: 380px !important;
//     @media (max-width: 767px) {
//       min-height: max-content !important;
//     }
//   }
//   .flip-icon-outer {
//     padding: 0;
//     width: 100px;
//     height: 100px;
//     margin-bottom: 15px;
//   }
//   .flip-icon-outer img {
//     height: 60px;
//     position: relative;
//     top: 19px;
//   }
//   .flip-tit {
//     font-size: 18px;
//     margin-bottom: 10px;
//     color: #000000;
//     font-weight: 700;
//     font-family: "Lato", sans-serif;
//   }
//   .flip-txt {
//     font-size: 14px;
//     line-height: 1.7;
//     margin-bottom: 0;
//   }
// `;
// export const SecFour = styled.div`
//   .technologies1 {
//     background: #140050;
//     padding: 50px 0;
//   }
//   .technologies1 ul {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
//   .technologies1 ul li {
//     width: 26%;
//     text-align: center;
//     font-size: 16px;
//     padding: 15px;
//     margin: -1px;
//     border: 1px solid #fff;
//     @media (max-width:767px){
//       width: 49%;
//     }
//   }
//   img {
//     vertical-align: middle;
//     max-width: 100%;
//   }
//   .technologies1 ul li p {
//     margin-bottom: 0px;
//   }
// `;
// export const SecFive = styled.div`
//   .work_ic {
//     background: #fff;
//     width: 100px;
//     margin: 0 auto 18px;
//     border-radius: 50%;
//     height: 100px;
//     box-shadow: 0 0 10px #ccc;
//   }
//   .work_pr {
//     text-align: center;
//     font-weight: 700;
//     margin-bottom: 60px;
//     color: #000000;
//   }
//   .work_ic img {
//     height: 50px;
//     margin-top: 30px;
//     margin-bottom: 15px;
//   }
//   img.arrr {
//     width: 100px;
//     position: absolute;
//     right: -18%;
//     top: 40px;
//     height: 25px;
//   }
//   .lt_row {
//     position: relative;
//     margin-left: 13%;
//   }
// `;
// export const SecSix = styled.div`
//   .design {
//     background: #000;
//     border-radius: 20px;
//     padding: 5px 0 1px;
//     margin: 15px auto;
//   }

//   .design h5,
//   .design p {
//     color: #fff;
//     font-family: "Lato", sans-serif;
//     letter-spacing: 1.5px !important;
//   }
// `;

// export const SecEight = styled.div`
//   .ben_sec ul {
//     padding-left: 0;
//   }
//   .ben_sec li {
//     background: #04bdb70d;
//     margin-bottom: 21px;
//     border-left: 4px solid #17b5587a;
//     font-weight: bold;
//     font-size: 15px;
//   }
//   .ben_sec li i {
//     color: #17b559;
//     font-size: 24px;
//     vertical-align: middle;
//     margin-right: 17px;
//     width: 50px;
//     text-align: center;
//     height: 50px;
//     background: #f5f5f5;
//     padding: 10px;
//     line-height: 33px;
//   }
// `;
// export const SecNine = styled.div``;
// export const SecTen = styled.div``;
// export const SecEleven = styled.div``;
// export const SecTwelve = styled.div``;
// export const SecThirteen = styled.div``;
