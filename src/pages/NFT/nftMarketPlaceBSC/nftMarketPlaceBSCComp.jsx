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
`;
