import styled from "styled-components";

export const SecOne = styled.div`
  .contentall {
    padding-top: 165px;
    @media (max-width: 1001px) {
      padding-top: 300px;
      .ban_tirt h1 {
        text-align: center;
        font-size: 30px;
      }
    }
    @media (max-width: 768px) {
      padding-top: 100px;
    }
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/chatgpt-applications-development/bg.webp");
    background-size: cover;
    /* padding-top: 165px;
    padding-bottom: 66px; */
    /* height: auto; */
    background-position: center;
    height: 100vh;
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
  .text-center img {
    padding-top: 130px;
    @media (max-width: 768px) {
      padding-top: 0;
    }
  }
  .ban_tirt h1 {
    font-family: "Lato", sans-serif;
    color: #fff;
    font-size: 32px;
  }
  .contentall {
    @media (max-width: 768px) {
      .ban_tirt h1 {
        text-align: center;
        font-size: 25px;
      }
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
  .awesome-features-wrapper {
    border: 1px solid #cdcdcd;
    background: none;
    padding-top: 40px;
    padding-bottom: 20px;
    min-height: 250px;
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
      z-index: 1;
    }
  }
`;
export const SecFour = styled.div`
  .parent-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 1001px) {
      flex-direction: column;
    }
  }
  .leftImg {
    width: 50%;
    margin: auto;
    @media (max-width: 1001px) {
      /* width: 100%; */
      img {
        margin: auto;
        /* width: 100%; */
      }
      /* margin: auto; */
    }
    /* display: flex;
    align-items: center; */
  }
  .right {
    width: 50%;
    @media (max-width: 1001px) {
      width: 100%;
    }
  }
  .fa-caret-right {
    position: relative;
    top: 4px;
    color: #5a0431;
    font-size: 20px;
    text-indent: -20px;
  }
  .right li {
    margin-bottom: 10px;
  }
`;
export const SecFive = styled.div`
  .nectar-button,
  .home-talk-experts a {
    border-radius: 30px;
    padding: 13px 20px;
    transition: all 0.3s ease-out 0s !important;
    &:hover {
      background: #00acdc;
      /* transform: scale(1.2); */
    }
  }
`;
export const SecSix = styled.div`
  .perfect-script-items1 .icon img {
    width: 45px;
    margin-top: -8px;
  }
`;
export const SecSeven = styled.div`
  .timeline-center .timeline-row:nth-of-type(even) {
    margin-left: 50% !important;
  }
  .timeline-center::before {
    background: #cdcdcd !important;
  }
  .nectar-button {
    padding: 15px 25px;
    border-radius: 30px;
    transition: transform 0.3s ease-in-out;
  }
  .nectar-button:hover {
    transform: scale(1.08, 1.08);
  }
  @media (min-width: 1200px) {
    .container {
      width: 850px;
    }
  }
  @media (min-width: 768px) {
    .container {
      /* width: 100%; */
    }
  }
  @media (max-width: 1001px) {
    .tm-detail {
      margin-left: -18%;
    }
  }
`;
export const SecEight = styled.div`
  .icon-text-1 {
    display: -webkit-box;
  }
  .icon-text-1 .icon-text-icon {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: #ffffff;
    margin-bottom: 20px;
    line-height: 75px;
    /* padding-left: 6px; */
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
  }
  .icon-text-1 img {
    width: 84px;
    height: auto;
    margin-right: 20px;
    /* margin: auto 20px; */
    background: #fff;
    padding: 14px;
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
`;
export const SecNine = styled.div`
  .flip-box {
    min-height: 365px;

    &:hover {
      background: #47b775;
      .flip-txt {
        color: #fff;
      }
      .flip-tit .h3 {
        color: #fff;
      }
    }
  }
`;
export const SecTen = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecEleven = styled.div``;
