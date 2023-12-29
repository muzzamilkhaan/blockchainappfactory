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
export const SecFour = styled.div`
  .perfect-script-items .icon {
    width: 70px;
    height: 70px;
    margin: 20px auto 50px;
    line-height: 75px;
    position: relative;
    border-radius: 50%;
    /* background-image: linear-gradient(293deg, #47b475 0, #47b475 100%); */
    color: #fff;
    font-size: 40px;
    z-index: 9;
    float: left;
    margin-bottom: 0;
    background: #fff;
  }
  .perfect-script-items .icon img {
    width: 45px;
    margin-top: -7px;
  }

  .perfect-script-items h3 {
    font-size: 20px;
    line-height: 22px;
    text-align: left;
  }
  .content {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    -webkit-transition: -webkit-transform var(--d) var(--e);
    transition: -webkit-transform var(--d) var(--e);
    transition: transform var(--d) var(--e);
    transition: transform var(--d) var(--e), -webkit-transform var(--d) var(--e);
    z-index: 1;
  }
  .perfect-script-items .content {
    display: block;
    float: left;
    width: 80%;
    padding-left: 30px;
  }
  .perfect-script-items h3 {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    line-height: 22px;
    text-align: left;
  }
  .perfect-script-items p {
    text-align: left;
  }
`;
export const SecFive = styled.div`
  .awesome-features-text h3 {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    padding-bottom: 5px;
    color: #000;
  }
`;
export const SecSix = styled.div`
  .technologies1 {
    background: #140050;
    padding: 50px 0;
  }
  .technologies1 ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .technologies1 ul li {
    width: 26%;
    text-align: center;
    font-size: 16px;
    padding: 15px;
    margin: -1px;
    border: 1px solid #fff;
    @media only screen and (min-width: 320px) and (max-width: 767px) {
      margin: 0;
      width: 49%;
    }
  }

  .technologies1 ul li p {
    margin-bottom: 0 !important;
  }
`;
export const SecSeven = styled.div`
  .prom-icon {
    margin-bottom: 15px;
  }
  .prom-desp h4 {
    font-family: "Lato", sans-serif;
    color: #2b2c2d;
    font-weight: 500;
    line-height: 1.3;
  }
`;
export const SecEight = styled.div`
  .perfect-script-items {
    padding: 30px 15px 10px;
    border-radius: 4px;
    background-color: #f2f2f2;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    display: flex;
    min-height: 180px;
    box-shadow: 11px -1px 11px #00000030;
    margin-bottom: 20px;

    &:hover {
      background: #47b475;
      h3 {
        color: #fff !important;
      }
      p {
        color: #fff;
      }
    }
  }
  .perfect-script-items .icon {
    width: 70px;
    height: 70px;
    margin: 20px auto 50px;
    line-height: 75px;
    position: relative;
    border-radius: 50%;
    background-image: linear-gradient(293deg, #47b475 0, #47b475 100%);
    color: #fff;
    font-size: 40px;
    z-index: 9;
    float: left;
  }
  .perfect-script-items .icon img {
    width: 45px;
    margin-top: -7px;
  }
  .perfect-script-items .content {
    display: block;
    float: left;
    width: 80%;
    padding-left: 25px;
  }

  .perfect-script-items h3 {
    font-size: 20px;
    line-height: 22px;
    text-align: left;
    font-weight: 700;
    color: #000;
    font-family: "Lato", sans-serif;
    margin-bottom: 12px;
  }
  .perfect-script-items p {
    text-align: left;
    margin-bottom: 0 !important;
  }
  .shard_master-node {
    background: linear-gradient(rgba(0, 183, 194, 0.95), rgba(0, 44, 46, 0.85)),
      transparent
        url("https://www.blockchainappfactory.com/images/nftm/cta-bg1.png") top
        left/cover no-repeat scroll;
    padding-top: 60px;
    padding-bottom: 60px;
    padding: 40px 0;
  }
`;
export const SecNine = styled.div`
  .shard_master-node {
    background: linear-gradient(rgba(0, 183, 194, 0.95), rgba(0, 44, 46, 0.85)),
      transparent
        url("https://www.blockchainappfactory.com/images/nftm/cta-bg1.png") top
        left/cover no-repeat scroll;
    padding-top: 60px;
    padding-bottom: 60px;
    padding: 40px 0;
  }
`;
export const SecTen = styled.div`
  .bg-dark-half-md {
    background: #368b5a;
    width: 100%;
    display: inline-block;
    padding: 100px 0;
  }
  .category-grid-style-01 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #fff;
    -webkit-box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
    box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
    border-radius: 5px;
  }
  .teck .category-grid-style-01 .category-item1 {
    padding: 10px !important;
    text-align: center;
    width: 25%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      background: #fff;
      width: 110%;
      height: 110%;
      display: inline-block;
      position: absolute;
      left: -5%;
      top: -5%;
      z-index: 1;
      opacity: 0;
      -webkit-transform: scale(0.96);
      transform: scale(0.96);
      transition: all 0.3s ease-in-out;
    }

    &:hover::before {
      box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
      opacity: 1;
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
    &:hover .text-center {
      position: relative;
      z-index: 99;
      color: #000 !important;
    }
    @media (max-width: 767px) {
      width: 50%;
    }
  }
  .teck .category-grid-style-01 .category-item1 .category-icon {
    color: #333;
    font-size: 44px;
    line-height: 1;
    margin-bottom: 0px;
    position: relative;
    z-index: 2;
  }
  .teck .category-icon img {
    height: 80px !important;
  }
  .category-item1.aos-item .text-center {
    font-size: 12px !important;
    margin-bottom: 0px !important;
  }
`;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div`
  .data table th {
    color: #fff;
  }
  .fa-check-circle {
    font-size: 22px;
    color: #91c645;
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
  @media (max-width: 767px) {
    .data table tbody tr:first-child th:last-child {
      transform: scale(1);
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
    }
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
`;
export const SecThirteen = styled.div``;
export const SecFourTeen = styled.div`
  .container-center {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    justify-content: center;
  }
  .equalize {
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .d_card {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: end;
    /* align-items: flex-end; */
    overflow: hidden;
    /* padding: 1rem; */
    width: 100%;
    text-align: center;
    color: #000;
    background-color: #fff;
    /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1); */
    border-radius: 15px;
    border: 1px solid #eee;
    height: 100%;

    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
        0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
        0 16px 16px rgba(0, 0, 0, 0.1);
      background: #1e7a45 !important;
      color: #fff !important;

      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
  }
  .content {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    -webkit-transition: -webkit-transform var(--d) var(--e);
    transition: -webkit-transform var(--d) var(--e);
    transition: transform var(--d) var(--e);
    transition: transform var(--d) var(--e), -webkit-transform var(--d) var(--e);
    z-index: 1;
  }
  .content > * + * {
    margin-top: 1rem;
  }
  .heading {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.2;
    color: #000;
    font-family: "Lato", sans-serif;
    /* margin-bottom: 12px; */
  }
  a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px !important;
    display: inline-block;
    margin-right: 26px !important;
  }
  a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin: 0 14px 0 !important;
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
export const SecFiveTeen = styled.div``;
export const SecSixTeen = styled.div`
  .feature-box-1 {
    color: #000;
    text-align: center;
    padding: 10px 0 15px;
    position: relative;
    margin-bottom: 40px;
    &::before {
      content: "";
      background: #47b475;
      width: 150px;
      height: 10px;
      transform: translateX(-50%);
      position: absolute;
      top: 0;
      left: 50%;
      clip-path: polygon(7% 0%, 93% 0%, 100% 100%, 0% 100%);
    }
    &::after {
      content: "";
      background: #47b475;
      /* width: 150px; */
      /* height: 10px; */
      transform: translateX(-50%);
      position: absolute;
      /* top: 0; */
      left: 50%;
      /* clip-path: polygon(7% 0%, 93% 0%, 100% 100%, 0% 100%); */
      width: 80%;
      height: 15px;
      border-radius: 0 0 10px 10px;
      top: auto;
      bottom: 0;
      clip-path: none;
    }
  }
  .feature-box-1 .service-content {
    background: #f2f2f2;
    padding: 25px 20px;
    border-radius: 10px;
    min-height: 335px;
    &::before {
      content: "";
      background: #47b475;
      width: 128px;
      height: 100px;
      transform: translateX(-50%);
      position: absolute;
      top: 0;
      left: 50%;
      clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
  }
  .feature-box-1 .service-icon {
    color: #77787a;
    background: linear-gradient(to left, #dedfe1, #f3f3f3);
    font-size: 40px;
    line-height: 100px;
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.03);
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      background: linear-gradient(to right, #dedfe1, #f3f3f3);
      width: 88%;
      height: 88%;
      border-radius: 50%;
      box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);
      transform: translateX(-50%) translateY(-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
    }
  }
  .flip-icon {
    height: 45px;
  }
  .feature-box-1 .title {
    font-family: "Lato", sans-serif;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px !important;
    text-transform: capitalize;
    margin: 0 0 10px;
  }
  .feature-box-1 .description {
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
  .feature-box-1 .description {
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
`;
export const SecSevenTeen = styled.div`
  .equalize {
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .container-center {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    justify-content: center;
  }
  .d_card {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: end;
    /* align-items: flex-end; */
    overflow: hidden;
    /* padding: 1rem; */
    width: 100%;
    text-align: center;
    color: #000;
    background-color: #fff;
    /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1); */
    border-radius: 15px;
    border: 1px solid #eee;
    height: 100%;

    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
        0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
        0 16px 16px rgba(0, 0, 0, 0.1);
      background: #1e7a45 !important;
      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
  }
  .content {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    -webkit-transition: -webkit-transform var(--d) var(--e);
    transition: -webkit-transform var(--d) var(--e);
    transition: transform var(--d) var(--e);
    transition: transform var(--d) var(--e), -webkit-transform var(--d) var(--e);
    z-index: 1;
  }
  .heading {
    font-family: "Lato", sans-serif;
    font-size: 21px;
    font-weight: bold;
    line-height: 1.2;
    color: #000;
  }
  .content > * + * {
    margin-top: 1rem;
  }
`;
