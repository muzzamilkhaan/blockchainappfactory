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
    padding-top: 120px;
    /* padding-top: 50px; */
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
    background-image: url("https://www.blockchainappfactory.com/images/nftmi/nft-ban.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 50;
    background-repeat: no-repeat;
    /* height: auto; */
    /* background-position: center; */
    height: 100vh;
    @media (max-width: 767px) {
      height: 1200px;
    }
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.95;
    background-color: #000000ba;
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
    font-size: 37px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: left;
    margin-bottom: 0 !important;
    padding-top: 100px;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
      padding-top: 0px !important;
      /* padding-top: 350px; */
      /* margin-bottom: -10px; */
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
    margin-bottom: 20px;
    /* padding-top: 20px; */
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
      /* margin-top: 50px; */
      text-align: center;
    }
  }

  /*  */
  .ban_form {
    background: #29292999;
    box-shadow: 0 0 10px #fff;
    max-width: 500px;
    margin: 0 auto;
    padding: 30px 30px 10px;
    border-radius: 5px;
    margin-top: 100px;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
  .banner_content h4 {
    font-size: 45px;
    color: #fff;
    line-height: 60px;
    font-family: "Lato", sans-serif;
  }
  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .ban_form .form-group {
    margin-bottom: 20px;
  }
  .ban_form label {
    display: none;
    font-size: 14px;
    margin-bottom: 7px;
    padding-left: 0 !important;
  }
  .form-group .Phone-custom {
    /* padding: 20px 192px; */
    max-width: 100%;
    width: 100%;
    padding: 20px 50px;
  }
  .submit_btn_b button.common_send_btn {
    display: inline-block;
    margin-top: 10px;
    background: #000;
    border-radius: 4px;
    border: 1px solid #fff;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .card-content {
    background: #ffffff;
    border: 4px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    margin-bottom: 30px;
    border-radius: 7px;
    position: relative;
    min-height: 460px;
    /* width: 70%; */
    &:hover {
      box-shadow: 5px 5px 20px 7px #00000030;
      transition: all 0.5s ease-in-out;
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .card-img {
    position: relative;
    overflow: hidden;
    border-radius: 0;
    z-index: 1;
    box-shadow: -1px 5px 13px 4px #0000002e;
    border-radius: 7px;
  }
  .card-img img {
    width: 100%;
    height: auto;
    display: block;
  }
  .card-desc {
    padding: 1.25rem;
  }
  .card-desc h3 {
    color: #000000;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 5px;
    padding: 0;
    font-family: "Lato", sans-serif;
  }
  .card-desc p {
    color: #747373;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.6;
    margin: 0px;
    margin-bottom: 20px;
    padding: 0;
    text-align: justify;
    font-family: "Raleway", sans-serif;
    /* width: 200px; */
  }
`;
export const SecFour = styled.div`
  .eto-exchange-flip .flip-box {
    min-height: 385px;
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .flip-tit {
    font-size: 20px;
    color: #000000;
    line-height: 1.6;
    margin-bottom: 11px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
  .flip-box {
    border-bottom: none;
  }
`;
export const SecFive = styled.div`
  #pre-ico-services .technicalbox {
    background: #ffffff;
    min-height: 400px;
  }
  .technicalbox h3 {
    font-size: 18px;
    color: #000000;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
`;
export const SecSix = styled.div`
  ul.f_point {
    position: relative;
    padding: 0px;
    padding-left: 80px;
    margin-top: 15px;
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: #00cb99;
      left: 42px;
    }
  }

  ul.f_point {
    position: relative;
    padding: 0px;
    padding-left: 80px;
    margin-top: 15px;
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: #00cb99;
      left: 42px;
    }
  }
  ul.f_point li {
    position: relative;
    padding-left: 25px;
    padding-bottom: 15px;
    &::before {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      background: #00cf92;
      left: 0px;
      top: 11px;
      border-radius: 100%;
      border: 3px solid #fff;
    }
  }
  ul.f_point li .icon {
    width: 55px;
    height: 55px;
    background: #00cf92;
    transform: rotate(45deg);
    position: absolute;
    left: -65px;
    top: 1px;
    padding-bottom: 48px;
    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 2px;
      background: #00cf92;
      transform: rotate(-45deg) translateX(48px);
      top: 29px;
    }
  }
  ul.f_point li .icon img {
    width: 40px;
    height: 40px;
    margin-top: 12px;
    margin-left: 10px;
    transform: rotate(-45deg) translate(0px, -2px);
    padding: 4px;
    filter: brightness(0) invert(1);
  }
  ul.f_point h4 {
    font-size: 18px;
    color: #000;
    text-shadow: 0px 0px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecSeven = styled.div`
  .serv_box {
    background: #fff;
    padding: 15px 15px 0 15px;
    text-align: center;
    border: 4px solid #eee;
    min-height: 295px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .serv_box_ic {
    margin: 10px auto 10px;
  }
  .serv_box_ic img {
    height: 70px;
  }
  .serv_box_cnt h4 {
    font-weight: 700;
    font-size: 18px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
