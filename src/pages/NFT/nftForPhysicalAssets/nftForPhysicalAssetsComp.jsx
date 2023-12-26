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
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/physical/banner.webp");
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
    background: #00000057 !important;
    opacity: 0.95;
  }
  @media (max-width: 991px) {
    .cta_mine {
      text-align: center;
    }
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 32px;
    @media (max-width: 768px) {
      font-size: 25px;
      text-align: center;
    }
  }

  .container .para {
    @media (max-width: 768px) {
      text-align: center !important;
    }
  }
  .ban_tirt h1 {
    text-align: center !important;
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
  .tik {
    background-image: linear-gradient(45deg, #0000007a, #00000094),
      url("https://www.blockchainappfactory.com/images/physical/cta-bg.webp");
    background-size: cover;
    height: auto;
    background-position: center;
    background-color: black;
    /* padding: 30px 0px; */
    padding: 80px 0px;
    transition: transform 0.7s ease-in-out !important;

    &:hover {
      .tik1 {
        transform: scale(1.1);
        transition: transform 0.7s ease-in-out !important;
      }
    }
  }
  .tik1 {
    color: white;
    font-size: 28px;
    line-height: 1.3;
  }
  .tik2 {
    color: white;
    margin-top: -30px;
    font-family: "lato", sans-serif;
    margin-bottom: 40px;
  }
`;
export const SecFive = styled.div`
  .serviceBox {
    padding: 30px;
    background: #f2f2f2;
    border: 1px solid #eee;
    border-bottom-color: #47b475;
    text-align: center;
    position: relative;
    min-height: 406px;
    margin-bottom: 30px;
    transition: all 0.5s ease 0s;

    &:hover {
      border: 1px solid #47b475;
      .title {
        color: #47b475 !important;
        transition: all 0.5s ease 0s;
      }
    }
    &:hover::before {
      opacity: 1;
      left: 50%;
    }
    &::before {
      content: "";
      width: 70%;
      height: 5px;
      background: #47b475;
      opacity: 0;
      position: absolute;
      top: -3px;
      left: 35%;
      transform: translateX(-50%);
      transition: all 0.5s ease 0s;
    }

    &:hover::after {
      opacity: 1;
      left: 50%;
    }
    &::after {
      content: "";
      width: 70%;
      height: 5px;
      background: #47b475;
      position: absolute;
      top: -3px;
      opacity: 0;
      left: 35%;
      bottom: -3px;
      transform: translateX(-50%);
      transition: all 0.5s ease 0s;
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .serviceBox .service-icon {
    width: 65px;
    height: 65px;
    line-height: 62px;
    border-radius: 50%;
    background: #47b475;
    margin: 0 auto 20px;
    font-size: 36px;
    color: #fff;
  }

  .serviceBox .title {
    font-size: 20px;
    font-weight: bold;
    color: #252525;
    margin: 0 0 10px 0;
    transition: all 0.5s ease 0s;
    font-family: "lato", sans-serif;
  }
  .serviceBox .description {
    font-size: 14px;
    line-height: 25px;
    margin: 0;
    transition: all 0.5s ease 0s;
  }
`;
export const SecSix = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecSeven = styled.div`
  .strategies-items {
    padding: 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px;
    border-radius: 15px;

    @media (max-width: 767px) {
      display: block;
      padding: 0;
    }
  }
  .icons img {
    border-radius: 15px;
  }
  .mt20 {
    margin-top: 20px !important;
  }
  .strategies-items p {
    text-align: justify;
    padding: 15px;
    @media (max-width: 767px) {
      padding: 0;
    }
  }
  .strategies-items p strong {
    margin-top: 5px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 23px;
    border-bottom: 1px solid #eee;
    background: linear-gradient(#47b475, #47b475);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .strategies-items1 {
    /* background: linear-gradient( 90deg, #fcfcfc00, #fcfcfc)!important; */
    padding: 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px;
    border-radius: 15px;
    @media (max-width: 767px) {
      display: block;
      padding: 0;
    }
  }
  .strategies-items1 .icons {
    order: 2;
    margin-right: 15px;
  }
  .strategies-items p strong,
  .strategies-items1 p strong {
    margin-top: 5px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 23px;
    border-bottom: 1px solid #eee;
    background: linear-gradient(#47b475, #47b475);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const SecEight = styled.div`
  .pt40 {
    padding-top: 40px;
  }
  .main-timeline2 .timeline2 {
    padding: 0 2px;
    position: relative;
  }

  .main-timeline2 .timeline2-icon {
    display: block;
    text-align: center;
    padding: 20px 0 55px 0;
    z-index: 1;
    position: relative;

    &::before {
      content: "";
      width: 1px;
      height: 75%;
      background: #39ae99;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      transition: all 0.3s ease 0s;
    }
    &:hover::before {
      background-color: #555;
    }
  }

  .main-timeline2 .timeline2-icon i {
    width: 45px;
    height: 45px;
    line-height: 45px;
    border-radius: 50%;
    background: #47b475;
    font-size: 22px;
    color: #fff;
    padding: 10px;
    transition: all 0.3s ease 0s;

    &:hover {
      background: #000;
      animation: icon-load 2.5s ease 0s infinite;
    }
  }
  .main-timeline2 .timeline2:first-child .border {
    border-radius: 4px 0 0 4px;
  }
  .main-timeline2 .border {
    height: 15px;
    background: #47b475;
    /* margin-bottom: 20px; */
    margin-bottom: 43px;
    transition: all 0.3s ease 0s;
  }
  .main-timeline2 .timeline2:nth-child(2n) .border {
    /* margin: 18px 0 0 0; */
    margin: 39px 0 0 0;
  }
  .main-timeline2 .timeline2-content {
    padding: 15px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 3px;
    transition: all 0.3s ease 0s;

    &:hover {
      background-color: #47b475;
      .description {
        color: #fff;
      }
    }
  }
  .timeline2-content .description {
    /* font-size: 14px; */
    font-size: 18px;
    color: #888;
    margin: 0;
    transition: all 0.3s ease 0s;
  }
  @media (max-width: 767px) {
    .text-left p {
      text-align: start !important;
    }
  }
`;
export const SecNine = styled.div``;

export const SecTen = styled.div`
  .main-timeline1 {
    font-family: "Roboto", sans-serif;
    position: relative;
  }
  .main-timeline1 .timeline1 {
    width: 50%;
    margin: 0 10px 30px 0;
    float: left;
    @media (max-width: 767px) {
      width: 100%;
      float: 0;
      /* width: 100%;
      float: none;
      margin: 0 0 30px; */
    }
  }
  .main-timeline1 .timeline1-content {
    color: #222;
    background: #47b475;
    text-align: center;
    padding: 75px 30px 30px;
    display: block;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      background: #fff;
      border-radius: 40px 0 60px 0;
      position: absolute;
      left: 10px;
      top: 10px;
      bottom: 10px;
      right: 10px;
      z-index: -1;
    }
  }
  .main-timeline1 .timeline1-icon {
    color: #fff;
    background: #47b475;
    font-size: 25px;
    line-height: 50px;
    height: 60px;
    width: 60px;
    position: absolute;
    top: 10px;
    left: 30px;
    z-index: 1;
    clip-path: polygon(100% 0, 100% 100%, 50% 80%, 0 100%, 0 0);
  }
  .main-timeline1 .title {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 7px;
    letter-spacing: 0;
    line-height: 1.3;
    font-family: "Lato", sans-serif;
  }
  .main-timeline1 .description {
    font-size: 14px;
    letter-spacing: 1px;
    margin: 0;
  }

  /*  */
  .main-timeline1 .timeline1:nth-child(even) {
    float: right;
    margin: 0 0 30px 10px;
  }
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecEleven = styled.div`
  .perfect-script-items1 {
    -webkit-box-shadow: 0px 5px 15px 0px rgb(21 10 82 / 20%);
    box-shadow: 0px 5px 15px 0px rgb(21 10 82 / 20%);
    padding: 30px 15px 10px;
    border-radius: 16px;
    background-color: #fff;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    min-height: 300px;
    margin-bottom: 20px;
    transition: all 0.3s ease 0s;

    &:hover {
      background-color: #f5f5f5;
      .icon {
        background-color: #23c284;
      }
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .perfect-script-items1 .icon {
    width: 70px;
    height: 70px;
    line-height: 75px;
    position: relative;
    border-radius: 0px 50% 50% 0px;
    color: #fff;
    font-size: 40px;
    box-shadow: 3px 14px 13px 0px #0000003b;
    z-index: 9;
    float: left;
    background: #f5f5f5;
    margin-left: -15px;
  }
  .perfect-script-items1 .icon {
    width: 70px;
    height: 70px;
    line-height: 75px;
    position: relative;
    border-radius: 0px 50% 50% 0px;
    color: #fff;
    font-size: 40px;
    box-shadow: 3px 14px 13px 0px #0000003b;
    z-index: 9;
    float: left;
    background: #f5f5f5;
    margin-left: -15px;
  }
  .perfect-script-items1 .icon img {
    width: 45px;
    margin-top: -8px;
  }
  .perfect-script-items1 .content {
    display: block;
    float: left;
    width: 80%;
    padding-left: 30px;
    margin-bottom: 20px;
  }
  .content p {
    margin-bottom: 1.75em !important;
  }
  .perfect-script-items1 strong {
    color: #47b475;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const SecTwelve = styled.div`
  .features-area.style-two .image-box {
    position: relative;
    -webkit-box-shadow: 0 3px 20px 0px #0000001f;
    box-shadow: 0 3px 20px 0px #0000001f;
    border-radius: 9px;
    -webkit-transition: -webkit-transform 0.3s ease 0s;
    transition: -webkit-transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
    margin-bottom: 30px;
    min-height: 420px;
    background: #fff;
    &:hover {
      /* -webkit-transform: translateY(-10px); */
      transform: translateY(-10px) !important;
      /* -webkit-box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%) !important; */
      box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%) !important;
      background-color: #f9f9f9;
      .normal-img {
        /* border-radius: 65% 40% 40% 58%/70% 70% 40% 40%; */
        border-radius: 40% 75% 40% 70%/80% 80% 35% 40%;
        box-shadow: 0 25px 98px rgb(0 0 0 / 10%);
        transition: 0.4s all ease-in-out;
      }
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .normal-img {
    background: linear-gradient(45deg, #47b475, #00cf92);
    width: 24%;
    padding: 5%;
    margin: 0 auto;
    box-shadow: 0 25px 98px rgb(0 0 0 / 10%);
    border-radius: 70% 30% 30% 70%/70% 70% 30% 30%;
    transition: 0.5s all ease-in-out;
  }
  .avatar-sm {
    height: 3rem;
    width: 3rem;
    filter: brightness(0) invert(1);
  }
  .icon-text h4 {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    margin: 10px 0px;
    letter-spacing: 1.3;
  }
`;
export const SecThirteen = styled.div``;
