import styled from "styled-components";

export const SecOne = styled.div`
  .contentall {
    padding-top: 40px;
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;

    @media (max-width: 768px) {
      font-size: 25px;
      text-align: center;
    }
  }
  .contentall a {
    border-radius: 30px;
    transition: all 0.3s ease-out 0s !important;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px !important;
    display: inline-block;
    margin-right: 26px !important;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/harmony/banner-bg.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 66px;
    height: auto;
    background-position: center;
    height: 100vh;
  }
  .banner-overlay {
    background-color: rgb(0 0 0 / 0%) !important;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #11091700, #20132a00);
    opacity: 0.95;
  }
  .contentall p {
    @media (max-width: 768px) {
      text-align: center !important;
    }
  }
`;
export const SecTwo = styled.div`
  .container p {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecThree = styled.div`
  .single_feature_seven {
    text-align: center;
    padding: 20px 24px;
    border: 1px solid #e4ecf9;
    position: relative;
    z-index: 1;
    background: #fff;
    min-height: 279px;
    margin-bottom: 10px;
    border-radius: 10px;

    &::before {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 45px;
      height: 45px;
      content: "";
      background: #fff;
      transition: 0.3s;
      z-index: -1;
    }
    &:hover::before {
      width: 100%;
      height: 100%;
      background: #47b475;
      border-radius: 10px;
    }

    &:hover {
      .single_feature_seven_content h3 {
        color: white;
      }

      .single_feature_seven_content p {
        color: white;
      }
    }
    @media (max-width: 768px) {
      min-height: 0;
      margin-bottom: 0;
    }
  }

  .single_feature_six_seven_icon .icon img {
    width: 70px;
    height: auto;
    transition: 0.5s;
  }
`;
export const SecFour = styled.div`
  .intro_cnt img {
    border-radius: 10px;
  }
`;
export const SecFive = styled.div`
  .service-row {
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;

    /* padding-bottom: 10px; */
  }
`;
export const SecSix = styled.div`
  .service_style_one {
    background: #ffffff;
    border-radius: 10px;
    min-height: 322px;
    padding: 40px 40px 10px;
    box-shadow: 0 0 20px 0px #47b4754f;
    transition: 0.5s all ease-in-out;
    margin-bottom: 24px;

    &:hover {
      transform: translateY(10px);
      transition: 0.5s all ease-in-out;
      background: #7de9ab5c;
      box-shadow: #0131566e 0px 0px 0px 2px, #013156ab 0px 4px 6px -1px,
        #ffffff14 0px 1px 0px inset;
    }
  }
  .service_style_one_title .fnt_clr .h3 {
    margin-bottom: 20px;
    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 90px;
      height: 1px;
      width: 75px;
      background: #47b475;
      margin: 0 auto;
      right: 0;
    }
    @media (max-width: 767px) {
      &::before {
        display: none;
      }
    }
  }
  .container p {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecSeven = styled.div`
  .mt50 {
    margin-top: 50px !important;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .main-timeline .timeline {
    width: calc(50% + 120px) !important;
    margin: 0 5px 30px !important;
    float: left !important;
  }
  .timeline {
    &::before {
      background-color: #fff !important;
    }
  }
  .timeline:nth-child(even) {
    &::before {
      background-color: #fff !important;
    }
  }
  .main-timeline .timeline-content1 {
    color: #161515;
    background: #f5f5f5;
    text-align: center;
    padding: 20px 140px 20px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: block;
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      background: linear-gradient(to top right, #47b475 50%, #368e5b 51%);
      position: absolute;
      top: 0;
      left: calc(100% - 120px);
      right: 0;
      bottom: 0;
      z-index: -1;
    }
    &::after {
      content: "";
      background: linear-gradient(to top right, #47b475 50%, #368e5b 51%);
    }
  }

  .main-timeline .description {
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 20px;
    margin: 0;
  }
  .main-timeline .timeline:nth-child(even) {
    float: right !important;
    margin: 0 0 30px 5px !important;
    padding: 20px 20px 20px 140px !important;
  }

  /* .main-timeline .timeline:nth-child(even) .timeline-icon {
    right: auto; */
  /* left: 0; */
  /* }   */

  .main-timeline .timeline {
    width: calc(50% + 120px) !important;
  }
  .head {
    color: #47b475;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 8px;
    line-height: 1.3;
  }
  .main-timeline .icon-container {
    color: #fff;
    font-size: 55px;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 33px;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before {
      content: "\f0ac";
    }
  }
`;
export const SecEight = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecNine = styled.div`
  .fa-caret-right {
    color: #47b475;
    font-size: 14px;
    /* margin-right: 10px; */
    text-indent: -20px;
  }
`;
export const SecTen = styled.div``;
