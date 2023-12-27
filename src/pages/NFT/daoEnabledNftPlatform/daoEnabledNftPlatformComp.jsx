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
    background-image: url("https://www.blockchainappfactory.com/images/dao-enabled-nft-platform/banner.webp");
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
    background-image: linear-gradient(to right, #b1d7f575, #c5e1f8);
    opacity: 0.95;
    background-color: rgb(0 0 0 / 0%);
  }
  .cta_mine {
    text-align: center;
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
    font-size: 40px !important;
    color: #000 !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 25px !important;
    }
  }

  .container p {
    color: #000000 !important;
    font-weight: 400;
    line-height: 1.6;
    font-size: 18px;
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
export const SecThree = styled.div`
  /* @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  } */
`;
export const SecFour = styled.div``;
export const SecFive = styled.div`
  .tri-topright {
    width: auto !important;
    height: auto !important;
    border-top: 50px solid #47b4755e !important;
    border-left: 65px solid transparent !important;
    min-height: 380px !important;
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .itm1 {
    border-radius: 6px;
    border: 0;
    border-color: lightgray;
    padding-left: 15px !important;
    padding-right: 15px !important;
    border-width: 3px;
    margin-bottom: 25px;
    transition: 0.3s linear all;
    padding: 30px 0;
    background: #fff;
    box-shadow: 0 0px 25px rgb(0 0 0 / 7%);
    /* min-height: 450px; */
  }
  #cont-align {
    margin-left: -65px !important;
  }
  #divtwo {
    margin: 0 auto !important;
    width: 70px;
    height: 70px;
    border: 1px solid #e9ddddcc;
    /* z-index: 1; */
    padding: 10px;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }

  .paddg {
    padding: 10px 0px !important;
    padding-bottom: 5px !important;
    color: #000000;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.3;
    font-family: "Lato", sans-serif;
  }
  .paddg_content {
    margin-left: -55px;
  }
`;
export const SecSix = styled.div`
  .data table th {
    color: #fff !important;
  }
  @media (max-width: 767px) {
    .data table tbody tr:first-child th:last-child {
      transform: scale(1);
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
    }
  }
  @media (max-width: 767px) {
    .data table th:last-child {
      margin: 10px 0 0;
      display: table-cell;
      width: 100%;
    }
  }
`;
export const SecSeven = styled.div`
  .itm {
    min-height: 350px;
    border-radius: 6px;
    border: 0;
    border-color: lightgray;
    padding-left: 10px !important;
    padding-right: 10px !important;
    border-width: 3px;
    margin-bottom: 25px;
    transition: 0.3s linear all;
    padding: 15px 0;
    background: #fff;
    box-shadow: 0 0px 25px rgb(0 0 0 / 7%);

    &:hover {
      img {
        transform: rotateY(360deg);
      }
    }
  }
  @media only screen and (min-width: 426px) and (max-width: 1440px) {
    .para-pad {
      padding: 15px;
    }
  }
  #mydiv1 {
    position: absolute;
    width: 0;
    height: 0;
    top: 0px;
    left: 14px;
    border-top: 160px solid #bbe3cc;
    border-right: 50px solid transparent;
  }
  .itm img {
    transform: rotateY(0deg);
    transition: all 3s ease 0s;
  }
  #mydiv {
    position: absolute;
    width: 0;
    height: 0;
    top: 190px;
    left: 325px;
    border-bottom: 160px solid #bbe3cc;
    border-left: 40px solid transparent;
  }
  .paddg {
    padding: 10px 0px !important;
    color: #000000;
    font-weight: 700;
    padding-bottom: 5px !important;
    font-family: "Lato", sans-serif;
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
