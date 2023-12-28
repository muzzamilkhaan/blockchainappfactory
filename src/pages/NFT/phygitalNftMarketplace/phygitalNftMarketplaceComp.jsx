import styled from "styled-components";

export const SecOne = styled.div`
  .nec-btn {
    position: relative !important;
    color: #fff !important;
    border-radius: 30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transform: scale(1.1, 1.1) !important;
    transition: all 0.3s ease-out 0s !important;
    background: #47b475 !important;
  }
  .nec-btn:hover {
    transform: scale(1, 1) !important;
    color: #fff !important;
    background: #00a9e2 !important;
  }
  a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px !important;
    display: inline-block;
    margin-right: 26px !important;
  }
  .contentall {
    padding-top: 300px;
    @media (max-width: 767px) {
      padding-top: 0;
    }
  }
  .contentall a,
  a.home-talk-experts {
    padding: 10px 20px !important;
  }
  .contentall .para {
    text-align: start;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/phygital-nft-marketplace/banner.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 66px;
    height: auto;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.95;
    background-color: rgb(0 0 0 / 70%);
  }
  .txt {
    text-align: start;
    margin-top: 20px !important;
    @media (max-width: 991px) {
      text-align: center;
      margin-top: 30px;
    }
  }
  .img-container img {
    margin-top: 220px;
  }

  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 32px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: start;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
      margin-bottom: -10px;
    }
  }

  .container p {
    color: #fff !important;
    font-weight: 800;
    line-height: 1.6;
    font-size: 21px;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 20px;
    @media (max-width: 768px) {
      text-align: center !important;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .magic {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .banner_content .contentall {
      margin-top: 50px;
      text-align: center;
    }
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div``;
export const SecFour = styled.div``;
export const SecFive = styled.div`
  .serviceBox1.red {
    color: #47b475;
  }
  .serviceBox1 {
    color: #696969;
    background: radial-gradient(transparent, #eee);
    text-align: center;
    padding: 95px 15px 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    min-height: 344px;
    &::before {
      content: "";
      background: #47b475;
      width: 150px;
      height: 150px;
      box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
      transform: rotate(45deg);
      position: absolute;
      top: -85px;
      left: -85px;
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .serviceBox1 .title {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0 0 10px;
    font-family: "Lato", sans-serif;
    line-height: 1.3;

    &::after {
      content: "";
      border-top: 3px dotted #47b475;
      height: 3px;
      width: 100px;
      margin: 11px auto 0;
      display: block;
      clear: both;
    }
  }
`;
export const SecSix = styled.div``;
export const SecSeven = styled.div`
  .serviceBox2 {
    text-align: center;
    padding: 20px 15px;
    border: 5px solid #eee;
    min-height: 333px;
    margin-bottom: 30px;
  }
  .serviceBox2 .service-icon {
    color: #fff;
    background-color: #fff;
    font-size: 35px;
    line-height: 100px;
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    border-radius: 50% 50% 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
  }
  .serviceBox2.pink .service-icon {
    &::before {
      background: linear-gradient(#47b475, #2098d1);
      content: "";
      /* background: linear-gradient(#fa8b50, #ff5f55); */
      border-radius: 50%;
      position: absolute;
      left: 10px;
      right: 10px;
      top: 10px;
      bottom: 10px;
      z-index: -1;
    }
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .serviceBox2.pink .title {
    color: #000;
  }
  .serviceBox2 .title {
    color: #ff5f55;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 7px;
    font-family: "Lato", sans-serif;
  }
  .description {
    color: #555555;
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
