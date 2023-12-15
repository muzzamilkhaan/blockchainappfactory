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
  .ban_tirt h1 {
    font-family: "Lato", sans-serif;
    color: #fff;
    font-size: 32px;
    @media (max-width: 1001px) {
      padding-top: 250px;
      text-align: center !important;
      font-size: 30px;
    }
    @media (max-width: 768px) {
      padding-top: 0;
      font-size: 25px;
    }
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/art/banner.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 80px;
    height: 100vh;
  }
  .banner-overlay {
    background-color: rgb(0 0 0 / 63%);
  }
  .contentall {
    padding-top: 100px;
    @media (max-width: 1001px) {
      padding-top: 0;
      text-align: center;
    }
  }
  .cta_mine {
    @media (max-width: 1001px) {
      text-align: center !important;
    }
  }
`;

export const SecTwo = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecThree = styled.div``;
export const SecFour = styled.div``;
export const SecFive = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecSix = styled.div`
  .strategies-items,
  .strategies-items1 {
    background: linear-gradient(90deg, #fff, #f1f1f1);
    padding: 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px;
    border-radius: 15px;

    @media (max-width: 768px) {
      display: block !important;
    }
  }

  .strategies-items .icons {
    border: 1px solid #eee;
  }
  .icons img {
    border-radius: 15px;
  }
  .strategies-items .icons,
  .strategies-items1 .icons {
    /* border: 1px solid #eee !important; */
  }
  .strategies-items p,
  .strategies-items1 p {
    text-align: justify;
    padding: 15px;
  }
  .strategies-items p strong,
  .strategies-items1 p strong {
    margin-top: 5px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 23px;
    font-family: "Open Sans", sans-serif;
    border-bottom: 1px solid #eee;
    background: linear-gradient(#47b475, #47b475);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .strategies-items1 {
    background: linear-gradient(90deg, #f1f1f1, #fff);
    padding: 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px;
    border-radius: 15px;
  }

  .strategies-items1 .icons {
    order: 2;
    margin-right: 15px;
  }
`;
export const SecSeven = styled.div``;
export const SecEight = styled.div`
  .eto-exchange-flip .flip-box {
    min-height: 360px;

    &:hover {
      transition: 0.5s all ease-in-out;
      transform: translateY(-10px);
      background: #47b475;
      .flip-tit,
      .flip-txt {
        color: #fff;
      }
    }
  }
`;
export const SecNine = styled.div`
  .app-overview .media {
    min-height: 150px;
  }
  .media:first-child {
    margin-top: 0;
  }
  .media,
  .media-body {
    overflow: hidden;
    zoom: 1;
  }
  .app-overview .media .media-body {
    padding-left: 33px;
  }
  .app-overview .media .media-left {
    padding-right: 0px;
    overflow: hidden;
  }
  .app-overview .media .media-left .app-icon {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    left: 12px;
    background: #47b475;
    position: relative;
    text-align: center;
    transition: all 0.3s linear;
  }
  .app-icon img {
    width: 50px;
    margin-top: 25px;
    filter: brightness(0) invert(1);
  }
`;
export const SecTen = styled.div`
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0px;
  }
`;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
