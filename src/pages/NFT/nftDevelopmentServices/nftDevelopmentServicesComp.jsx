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
    padding-top: 220px;
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
    background-image: url("https://www.blockchainappfactory.com/images/demo/banner-bg.webp");
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
    background-color: rgb(0 0 0 / 62%);
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
    font-size: 32px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: start;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
      /* margin-bottom: -10px; */
    }
  }

  .container p {
    color: #fff !important;
    font-weight: 800;
    line-height: 1.6;
    font-size: 19px;
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
export const SecTwo = styled.div`
  .stats {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    padding: 1rem 0;
  }
  @media (max-width: 767px) {
    .stats {
      min-height: 0px;
      padding: 20px;
    }
  }
`;
export const SecThree = styled.div``;
export const SecFour = styled.div``;
export const SecFive = styled.div``;
export const SecSix = styled.div``;
export const SecSeven = styled.div``;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
