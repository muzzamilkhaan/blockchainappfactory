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
    /* padding-top: 220px; */
    padding-top: 50px;
    @media (max-width: 767px) {
      /* padding-top: 0; */
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
    /* background-image: url("https://www.blockchainappfactory.com/images/nft_wallet/banner.webp"); */
    background-size: cover;
    position: relative;
    /* padding-top: 110px; */
    background-size: cover;
    height: 100vh;
  }
  .large-header {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    &::before {
      position: absolute;
      content: "";
      background: rgb(0 0 0 / 63%) !important;
      z-index: 10;
      left: 0;
      top: auto;
      width: 100%;
      height: 100%;
    }
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
    margin-top: 140px;
    @media (max-width: 767px) {
      margin-top: 20px;
      margin-bottom: 100px;
    }
  }

  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 35px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0 !important;
    letter-spacing: 1.4px !important;
    padding-top: 28px;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
      /* margin-bottom: -10px; */
    }
  }

  /* .container p {
    color: #fff !important;
    font-weight: 800;
    line-height: 1.6;
    font-size: 21px;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 20px; */
  /* padding-top: 20px; */
  /* @media (max-width: 768px) {
      text-align: center !important;
      margin-bottom: 20px;
    }
  } */
  .para {
    font-size: 18px;
    text-align: center !important;
    color: #fff;
    padding-bottom: 40px;
    max-width: 800px;
    margin: 0 auto !important;
    line-height: 1.6;
    font-weight: 500;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
    margin-top: 10px !important;
  }
  @media screen and (max-width: 768px) {
    .magic {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .banner_content .contentall {
      /* margin-top: 50px; */
      text-align: center;
    }
  }
`;

export const SecTwo = styled.div``;
export const SecThree = styled.div``;
export const SecFour = styled.div``;
export const SecFive = styled.div`
  .feature-box-3 {
    border: 1px dashed #a6a6a6;
    border-top: 3px solid #47b475;
    text-align: center;
    min-height: 170px !important;
    &:hover {
      background: #4caf5061;
      color: #333;
    }
  }
  .feature-box-3 .icon {
    background: #f2f2f2;
    padding: 0px;
    width: 90px;
    height: 90px;
    line-height: 80px;
  }
  .feature-box-3 .feature-title {
    margin-bottom: 20px;
    margin: 0;
    padding: 0;
    color: #2b2c2d;
    font-weight: 500;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
  }
`;
export const SecSix = styled.div``;
export const SecSeven = styled.div``;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
