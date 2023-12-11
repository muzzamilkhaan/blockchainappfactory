import styled from "styled-components";
import { Section } from "../../../components/sections/section";

export const SECONE = styled.div`
  .blockchain-counsulting.banner {
    background: url("https://www.blockchainappfactory.com/images/nft-bsc/nft-bnr.webp")
      no-repeat scroll center center;
    background-size: cover;
  }
  .large-header {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    height: inherit !important;
  }

  .banner {
    position: relative;
    height: 650px;
    overflow: hidden;
  }
  .large-header:before {
    position: absolute;
    content: "";
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
    left: 0;
    top: auto;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 901px) {
    .banner-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(0 0 0 / 10%);
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .contentall {
    padding: 120px 10px 0 10px;
  }
  .banner_content {
    position: absolute;
    top: 50%;
    z-index: 10;
    color: #fff;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    transform: translateY(-50%);
  }
  .contentall h1 {
    color: #fff;
    font-size: 45px;
    margin-bottom: 5px;
    line-height: 60px;
    font-weight: 500;
    letter-spacing: 1.5px;
    font-family: "Lato", "sans-serif";
    text-align: center;
  }
  .banner_sub {
    line-height: 1.7;
    font-size: 18px;
    padding: 0px 100px;
    color: #fff;
    margin-bottom: 20px;
  }
  .btn_spc {
    padding: 15px;
  }
  a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px !important;
    display: inline-block;
    margin-right: 26px !important;
  }
  .nec-btn {
    position: relative !important;
    color: #fff !important;
    border-radius: 30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transition: all 0.3s ease-out 0s !important;
    background: #47b475 !important;
  }
  .nec-btn:hover {
    transform: scale(1.1, 1.1) !important;
    background-color: #00a9e2 !important;
  }
  @media (max-width: 480px) {
    .contentall h1 {
      font-size: 24px !important;
      line-height: 30px;
      margin-bottom: 1rem;
    }
    .banner_sub {
      padding: 0;
    }
  }
`;
export const SecTwo = styled.div`
  .h2-head {
    font-family: "Lato", "sans-serif";
    letter-spacing: 1.5px !important;
    color: #000000;
  }
  .section-title {
    text-align: center;
    margin-top: -5px;
    position: relative;
    z-index: 1;
  }
  .underline {
    margin-bottom: 0;
    padding-bottom: 0;
    color: #333;
  }
  .text-justify {
    text-align: center;
    color: #555555;
  }
`;
export const SecThree = styled.div``;
export const SecFour = styled.div`
  .partner-sec {
    background: #fff;
    padding: 40px 15px 10px;
    max-width: 450px;
    margin: 0 auto 30px;
    min-height: 286px;
    border-radius: 4px;

    &:hover {
      background: #47b475;
      color: #ffffff;

      h4 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
  }
  .common_h3 {
    letter-spacing: 1.5px !important;
    font-family: "Lato", "sans-serif";
    color: #000000;
    font-size: 25px !important;
  }
  .sec4-p {
    color: #555555;
  }
`;
export const SecFive = styled.div`
  .sec_tit h2 {
    font-family: "Lato", "sans-serif";
    font-weight: 500;
    letter-spacing: 1.5px !important;
    color: #000000 !important;
  }
  .lazy {
    border-radius: 10px;
  }
  .underline {
    padding: 0;
  }
`;
export const SecSix = styled.div`
  .lazy {
    border-radius: 10px;
  }
`;
export const SecSeven = styled.div`
  .section-title {
    font-family: "Lato", "sans-serif";
    color: #000000;
    letter-spacing: 1.5px !important;
  }
`;
export const SecEight = styled.div`
  .boxx {
    background: white;
    padding: 2% 1%;
    margin-bottom: 20px;
    box-shadow: -1px -4px 12px 2px #00000038;
    border-radius: 8px;
    text-align: left;
    padding: 25px 25px;
    min-height: 327px;

    &:hover {
      background-color: #f2f2f2;
    }
  }
  .leaf {
    font-family: "Lato", "sans-serif";
    letter-spacing: 1.5px !important;
    color: #000;
    margin-bottom: 1rem;
  }
  .common_h1 {
    color: #000000 !important;
    letter-spacing: 1.5px;
    font-family: "Lato", "sans-serif";
  }
`;
export const SecNine = styled.div`
  .why_binance {
    background: url("https://www.blockchainappfactory.com/images/nft-bsc/bin7.webp");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .bnr-box {
    background: #000000db;
    padding: 5% 5% 8%;
    border-radius: 9px;
    color: #fff;
    box-shadow: 6px 6px 11px 7px #00000096;
  }
  .common_h1 {
    font-family: "Lato", "sans-serif";
    letter-spacing: 1.5px !important;
  }
`;
export const SecTen = styled.div`
  .category-item {
    padding: 30px;
    text-align: center;
    width: 25%;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    position: relative;
    cursor: pointer;
    &:before {
      content: "";
      background: #ffffff;
      width: 110%;
      height: 110%;
      display: inline-block;
      position: absolute;
      left: -5%;
      top: -5%;
      z-index: 1;
      opacity: 0;
      transform: scale(0.96);
      transition: all 0.3s ease-in-out;
    }
  }
  .category-item .category-icon {
    color: #000000;
    font-size: 44px;
    line-height: 1;
    margin-bottom: 10px;
    position: relative;
    z-index: 2;
  }
  .category-grid-style-01 .category-item .category-title {
    color: #022d62;
    font-weight: bold;
    margin-bottom: 0;
    position: relative;
    z-index: 2;
    font-size: 16px;
  }
  .section-title {
    font-family: "Lato", "sans-serif";
    letter-spacing: 1.5px !important;
    color: #000000;
  }
  @media screen and (max-width: 426px) {
    .category-grid-style-01 .category-item {
      width: 49.6666%;
    }
  }
`;
export const SecEleven = styled.div`
  .sec_tit h2 {
    font-family: "Lato", "sans-serif";
    color: #000000 !important;
    letter-spacing: 1.5px !important;
  }
  .list li .fa-caret-right {
    color: #2e9107;
    padding-right: 10px;
  }
`;
export const SecTwelve = styled.div`
  .section-title {
    font-family: "Lato", "sans-serif" !important;
    letter-spacing: 1.5px !important;
    color: #000000 !important;
    font-weight: 500;
  }
`;

// background-color: #99cd321f;
// &::before {
//   content: "x";
//   font-family: "FontAwesome";
//   color: #2e9107;
//   margin-right: 10px;
//   font-size: 16px;
// }
