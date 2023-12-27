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
    background-image: url("https://www.blockchainappfactory.com/images/cross_chain/banner.webp");
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
    /* background-image: linear-gradient(to right, #11091766, #20132a)a; */
    background-color: rgb(0 0 0 / 67%);
    opacity: 0.95;
    @media (max-width: 767px) {
      background-color: #023c5100;
    }
  }
  .cta_mine {
    text-align: start;
  }
  .img-container img {
    margin-top: 150px;
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
  @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  }
`;
export const SecThree = styled.div`
  .single-promo-card.single-promo-hover {
    /* -webkit-transition: all 300ms ease-in-out; */
    transition: all 300ms ease-in-out;
    overflow: hidden;
    z-index: 1;
    min-height: 300px;

    &:hover::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
      background-color: #47b475;
      transition: all 0.3s;
      z-index: -1;
    }
    &:hover {
      box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%);
      .para {
        color: #fff;
      }
      h5 {
        color: #fff;
      }
    }
    &::before {
      content: "";
      position: absolute;
      right: -55px;
      width: 95px;
      height: 95px;
      bottom: -50px;
      border-radius: 35px;
      background-color: #47b47575;
      transition: all 0.3s;
      z-index: -1;
    }
  }
  .card {
    position: relative;
    /* display: -webkit-box; */
    /* display: -ms-flexbox; */
    padding: 34px 10px 10px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    /* -ms-flex-direction: column; */
    flex-direction: column;
    min-width: 0;
    margin-top: 20px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box !important;
    /* border: 1px solid rgba(72, 94, 144, 0.16)!important; */
    border-radius: 10px !important;
  }
  .card-body img {
    width: 70px;
    height: auto;
  }
  .card h5 {
    font-size: 20px;
    font-weight: 600;
    color: #47b475;
    margin-bottom: 10px;
    font-family: "Lato", sans-serif;
  }
  .para {
    color: #555555;
  }
`;
export const SecFour = styled.div`
  .intro_cnt img {
    border-radius: 10px;
  }
`;
export const SecFive = styled.div`
  .why_choose_1 {
    text-align: center;
    margin-bottom: 60px;
    min-height: 280px;
  }
  .why_choose_1 .icon-wrap {
    position: relative;
    margin-bottom: 45px;
    display: inline-block;

    &::before {
      display: inline-block;
      content: "";
      position: absolute;
      padding: 35px;
      border-radius: 50%;
      background: #4e4d4d21;
      z-index: 1;

      right: 0;
      top: 0;
      /* -webkit-transform: translate(40%, -40%); */
      transform: translate(40%, -40%);
      text-align: center;
      transition: 0.5s;
    }
    &::after {
      display: inline-block;
      content: "";
      position: absolute;
      padding: 35px;
      border-radius: 50%;
      background: #4e4d4d21;
      z-index: 1;

      left: 0;
      bottom: 0;
      /* -webkit-transform: translate(-40%, 40%); */
      transform: translate(-40%, 40%);
      text-align: center;
      transition: 0.5s;
    }
  }
  .icon-wrap img {
    width: 70px;
    height: auto;
  }
  .why_choose_1 h4 {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    font-family: "Lato", sans-serif;
  }
  .para {
    color: #555555;
  }
`;
export const SecSix = styled.div`
  .fa-caret-right {
    font-size: 15px;
    line-height: 1;
    color: #47b475;
    text-indent: -20px;
  }
`;
export const SecSeven = styled.div`
  .underline1 {
    position: relative;
    padding-bottom: 10px;
    &::after {
      width: 4%;
      left: 48%;
      content: "";
      height: 3px;
      background: #47b475;
      position: absolute;
      bottom: 0;
    }
    @media (max-width: 767px) {
      &::after {
        left: 0%;
        width: 6%;
      }
    }
  }
`;
export const SecEight = styled.div`
  #base {
    /* padding: 50px 100px; */
  }
  .bdr {
    border-top: none !important;
  } 
  @media (max-width: 767px) {
    .data table tbody tr:first-child th:last-child {
      transform: scale(1);
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
    }
  }

  element.style {
  }
  #base {
    padding: 50px 100px;
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
  .section-title .hr {
    background: #47b475 !important;
    width: 50px;
    margin: 10px auto 15px;
    height: 3px;
  }
  .data table th {
    background: #368557 none repeat scroll 0 0;
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
  .data table td {
    text-align: center;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 25px;
  }
  ul {
    padding-left: 2rem !important;
  }
  .lyst li {
    list-style: disc;
    color: #555555;
  }

  .fa-check-circle {
    font-size: 22px;
    color: #91c645;
    font-weight: bold;
  }
  .fa-times-circle {
    font-size: 22px;
    color: #d90823;
  }
  a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px !important;
    display: inline-block;
    margin-right: 26px !important;
    width: 100px;
    @media (max-width: 550px) {
      width: 90% !important;
    }
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
    &:hover {
      transform: scale(1, 1) !important;
      color: #fff !important;
      background: #00a9e2 !important;
    }
  }
`;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
