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
  .contentall a,
  a.home-talk-experts {
    padding: 10px 20px !important;
  }
  .contentall .para {
    text-align: start;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/carbon-credits-development/banner-bg.webp");
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
    margin-top: 150px;
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
export const SecFour = styled.div`
  .awesome-features-wrapper1 {
    border: 1px solid #cdcdcd;
    padding-top: 40px;
    padding-bottom: 20px;
    min-height: 380px;
    transition: 0.3s;
    position: relative;
    margin-bottom: 30px;
    border-radius: 10px;
    &::before {
      background: #47b475;
      height: 20px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 65px;
    }
    &::after {
      background: #47b475;
      height: 50px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 94px;
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }

  .awesome-features-icon-img {
    margin-bottom: 22px;
  }
  .awesome-features-text p {
    margin-bottom: 0;
    padding: 0 41px;
  }
  p strong {
    display: block;
    font-size: 18px;
    padding-bottom: 5px;
  }
`;
export const SecFive = styled.div`
  .perfect-script-items1 .icon img {
    width: 45px;
    margin-top: -8px;
  }
  .perfect-script-items1 strong {
    color: #47b475;
    font-size: 18px;
  }
  .perfect-script-items1 p {
    text-align: left;
  }
  .content p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 0px !important;
    /* margin-top: 10px; */
  }
  .perfect-script-items1 .content {
    display: block;
    float: left;
    width: 80%;
    padding-left: 30px;
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
