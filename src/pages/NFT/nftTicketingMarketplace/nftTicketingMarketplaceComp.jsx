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
    background-image: url("https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/banner_nft_ticket.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 66px;
    height: auto;
    background-position: center;
    height: 100vh;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #0000000d, #10143b00);
    opacity: 0.95;
    background-color: rgb(0 0 0 / 0%);
  }
  .cta_mine {
    text-align: start;
  }
  @media (max-width: 991px) {
    .cta_mine {
      text-align: center;
    }
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 40px !important;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
    }
  }

  .container .para {
    @media (max-width: 768px) {
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
export const SecFour = styled.div`
  .fa-hand-point-right {
    color: #47b475;
    /* margin-right: 10px; */
    font-size: 18px;
    text-indent: -30px;
  }
  @media (max-width: 767px) {
    .fa-hand-point-right {
      margin-top: 20px;
    }
    .mobile {
      margin-inline-start: 8vw;
    }
  }
`;
export const SecFive = styled.div`
  .feature-items {
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 15px -6px rgb(0 0 0 / 31%);
    background: #fff;
    min-height: 290px;
    text-align: center;
    margin-top: 20px;
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      .feature_icon {
        transform: rotateY(360deg);
      }
    }
  }

  .feature_icon {
    padding: 15px;
    transition: all 0.3s ease 0s;
  }
  .feature-items img {
    width: 75px;
    padding: 10px;
    text-align: center;
    border-radius: 10px 20px 10px 20px;
    border: 2px solid #47b4759c;
    margin: 0 auto !important;
  }
  .feature-items h4 {
    font-size: 18px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
`;
export const SecSix = styled.div`
  .box-shade {
    padding: 25px;
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
      rgb(60 64 67 / 15%) 0px 2px 6px 2px;
    background: #ffffff;
  }
  @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  }
`;
export const SecSeven = styled.div`
  .list1 {
    font-size: 14px;
    line-height: 35px;
    list-style: none;
    @media (max-width: 767px) {
      margin: 12px;
    }
  }
  .fa-caret-right {
    color: #47b475 !important;
    font-size: 18px;
    text-indent: -20px;
  }
`;
export const SecEight = styled.div`
  @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  }
`;
export const SecNine = styled.div`
  .primary-list li {
    position: relative;
    padding: 4px 12px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 30px;
    border-bottom: 2px solid #e9e9e9;
    color: #000000;
    font-size: 14px;
    text-align: justify;
  }

  .fa-circle {
    position: absolute;
    left: 4px;
    top: 4px;
    font-size: 15px;
    line-height: 1;
    color: #47b475 !important;
    border-radius: 5px;
    padding: 4px;
  }
`;
export const SecTen = styled.div`
  @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  }
`;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
