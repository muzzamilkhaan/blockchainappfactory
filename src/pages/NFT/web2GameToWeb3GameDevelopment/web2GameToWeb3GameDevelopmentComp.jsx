import styled from "styled-components";

export const SecOne = styled.div`
  .cta_mine {
    text-align: start;
  }
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
    margin-right: 30px !important;
  }
  /* .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
  } */
  .contentall {
    padding-top: 0px;
  }
  .banner_content .contentall {
    /* margin-top: 30px; */
  }
  .banner_content {
    margin-top: 100px;
  }
  .contentall h1 {
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 700;
    font-size: 30px;
    font-family: "Lato", sans-serif;
    color: #fff !important;
    text-transform: uppercase;
    padding-top: 60px;

    @media (max-width: 767px) {
      font-size: 25px !important;
      text-align: center;
      padding-top: 0;
    }
  }
  .contentall p {
    color: #fff !important;
    text-align: start;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/web2-game-to-web3-game-development/banner-bg.webp");
    background-size: cover;
    /* padding-top: 138px; */
    /* padding-bottom: 50px; */
    background-position: center;
    @media (max-width: 991px) {
      height: 900px;
      .contentall {
        padding-top: 0;
      }
    }
    @media (max-width: 767px) {
      height: 100vh;
    }
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
  /* img {
    vertical-align: middle;
  } */
`;

export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .icon-text-1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .icon-text-1 {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .icon-text-1 img {
    width: 84px;
    height: auto;
    margin-right: 20px;
    /* margin: auto 20px; */
    background: #fff;
    padding: 7px;
    border-radius: 12px;
    box-shadow: 0 0 12px 6px #00000014;
  }
  .icon-text-1 > :nth-child(n + 2) {
    /* margin-top: 2.2rem; */
    margin-bottom: 20px;
  }

  .icon_content {
    padding-left: 20px;
    min-height: 100px;
    width: 80%;
  }
  .icon-text-1 p {
    margin: 0.6rem 0 0 0;
  }
  .icon-text-1 strong {
    color: #000;
    font-weight: 700;
  }
`;
export const SecFour = styled.div`
  .choose-wrapper {
    background: #f2f2f2;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
    min-height: 360px !important;

    &:hover {
      background: #47b775;
      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
  }
  .wrappwer-icon {
    width: 100px;
    height: 100px;
    background: #fff;
    margin: auto;
    margin-bottom: 25px;
    border-radius: 50px;
    box-shadow: 2px 4px #47b475;
    border: 3px solid #47b475;
  }
  .wrappwer-icon img {
    width: 65px;
    margin-top: 15px;
  }
  .choose-para h3 {
    font-weight: 700 !important;
    margin: 20px 0 5px 0;
    margin-bottom: 15px;
    color: #000000;
    font-family: "Lato", sans-serif;
  }
`;
export const SecFive = styled.div`
  .perfect-script-items1 .icon img {
    width: 45px;
    margin-top: -8px;
  }
`;
export const SecSix = styled.div`
  .data table th {
    color: #fff;
  }
  .bg_color {
    color: #000 !important;
  }
  @media (max-width: 767px) {
    .data.table-responsive {
      border: 0;
    }
  }
  @media (max-width: 767px) {
    .data table tbody tr:first-child th:last-child {
      transform: scale(1) !important;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%) !important;
    }
  }
  @media (max-width: 767px) {
    .data table tbody tr th {
      box-shadow: unset;
      transform: scale(1);
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
  .Package_list {
    display: inline-block;
    background: rgba(0, 0, 0, 0.6);
    padding: 30px 10px;
    /* max-width: 280px; */
    width: 16%;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 5px;
    margin: 2px;
    @media (max-width: 767px) {
      width: 49%;
    }
  }
  .Package_list img {
    height: 55px;
  }
  .Package_list span {
    display: block;
    font-size: 15px;
    margin-top: 12px;
    color: #fff;
  }
`;
export const SecEight = styled.div`
  .awesome-features-wrapper1 {
    border: 1px solid #e9e9e9;
    padding-top: 40px;
    padding-bottom: 20px;
    min-height: 340px;
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
  }
  .awesome-features-icon-img {
    margin-bottom: 22px;
  }
  .awesome-features-text h4 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 18px;
    font-family: "Lato", sans-serif;
  }
  .awesome-features-text p {
    margin-bottom: 0;
    padding: 0 41px;
  }
`;
export const SecNine = styled.div`
  .Package_list {
    display: inline-block;
    background: rgba(0, 0, 0, 0.6);
    padding: 30px 10px;
    /* max-width: 280px; */
    width: 16%;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 5px;
    margin: 2px;
    @media (max-width: 767px) {
      width: 49%;
    }
  }
  .Package_list img {
    height: 55px;
  }
  .Package_list span {
    display: block;
    font-size: 15px;
    margin-top: 12px;
    color: #fff;
  }
`;
export const SecTen = styled.div`
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 29px;
  }
  .fa-circle-arrow-right {
    /* padding-right: 10px; */
    font-size: 18px;
    position: relative;
    top: 5px;
    color: #03b787;
    text-indent: -30px;
  }
`;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
