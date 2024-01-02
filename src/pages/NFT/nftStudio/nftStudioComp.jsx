import styled from "styled-components";

export const SecOne = styled.div`
  .bg_1 {
    background-image: linear-gradient(45deg, #0000007d, transparent),
      url("https://www.blockchainappfactory.com/images/nft_studio/banner.webp");
    background-size: cover;
    padding-top: 138px;
    background-attachment: fixed;
    padding-bottom: 130px;
    /* height: 100vh; */
  }
  .common_spacing {
    padding: 60px 0;
  }
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  @media (min-width: 992px) {
    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }
  }

  @media (min-width: 992px) {
    .col-md-6 {
      width: 50%;
    }
  }
  .bg_1 .bg_content {
    padding-top: 90px;
  }
  .bg_1 .bg_content h1 {
    font-size: 80px;
    font-weight: 600;
    color: #fff;
    line-height: 1.3;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
    @media (max-width: 776px) {
      font-size: 40px !important;
      margin-top: 100px;
    }
  }
  .bg_1 h3 {
    font-size: 20px !important;
  }

  .para {
    font-weight: 600;
  }
  .text_w {
    color: #fff;
  }
  .text-left {
    text-align: left;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
  }
  .bg_02 {
    font-family: "Caveat", cursive;
    font-size: 27px;
    color: #ffeb3b;
    line-height: 1.6;
  }

  .text_w {
    /* color: #fff; */
  }
  .bg_02 {
    font-size: 44px !important;
  }
  .gra {
    background: linear-gradient(45deg, #673ab7, #e91e63);
    border-radius: 50px;
  }
  .nectar-button {
    /* background: #47b475; */
    padding: 10px 25px;
    /* border-radius: 0; */
    margin: 0 auto !important;
    text-align: center;
    clear: both;
    color: #fff;
    font-weight: 700;
    transition: 0.2s;
    &:hover {
      background: #00acdc;
    }
  }
  @media (max-width: 500px) {
    a.nectar-button {
      display: inline-block;
      width: 100%;
      /* margin-top: 10px; */
    }
  }
`;

export const SecTwo = styled.div`
  .bg_2 {
    background: #210228;
  }
  .p-40 {
    padding: 40px;
    @media (max-width: 500px) {
      padding: 5px;
    }
  }

  .bg_2 h5 {
    font-family: "Caveat", cursive;
    font-size: 27px;
    color: #70ccd0;
    line-height: 1.6;
  }
  .bg_2 .content h2 {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 19px;
    font-family: "Lato", sans-serif;
    @media (max-width: 500px) {
      font-size: 29px;
    }
  }
  .text_w {
    color: #fff;
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
  }
  .cln {
    padding: 10px 20px !important;
    font-size: 14px;
  }

  .gra {
    background: linear-gradient(45deg, #673ab7, #e91e63);
    border-radius: 50px !important;
  }
  .nectar-button,
  .home-talk-experts {
    transition: 0.2s;
  }
  .nectar-button {
    /* background: #47b475; */
    padding: 10px 25px;
    border-radius: 0;
    margin: 0 auto !important;
    text-align: center;
    clear: both;
    color: #fff;
    font-weight: 700;
    &:hover {
      background: #00acdc;
    }
  }
`;
export const SecThree = styled.div`
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
export const SecFour = styled.div`
  .bg-dark-half-md {
    background: #1b002b;
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
export const SecFive = styled.div`
  .bg_02 {
    font-family: "Caveat", cursive;
    font-size: 44px !important;
    color: #ffeb3b !important;
    line-height: 1.6 !important;
    font-weight: 500;
    letter-spacing: 1.5px !important;
    @media (max-width: 500px) {
      text-align: center !important;
      font-size: 40px !important;
      font-family: "Caveat", cursive;
      margin-bottom: 10px;
    }
  }
  .text_w {
    color: #fff;
  }
`;
export const SecSix = styled.div`
  .section-title .hr {
    background: #aca3a3;
    width: 50px;
    margin: 10px auto 15px;
    height: 2px;
  }
  #industry-uses {
    padding: 60px 0;
  }
  .bg_4 {
    background-image: url("https://www.blockchainappfactory.com/images/nft_studio/bg03.webp");
    background-size: cover;
    background-attachment: fixed;
  }
  .ld-flipbox-inner h4.font-weight-normal {
    font-size: 23px;
    line-height: 1.4;
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
  }
  .ld-flipbox-face {
    background-color: #000 !important;
  }
  .text-fade-white-07 {
    color: #fff !important;
  }
  /*  */
  @media (min-width: 999px) {
    .dis-none {
      display: none !important;
    }
  }
  @media (max-width: 998px) {
    .bg_55 .dis-none {
      display: block;
    }
    .bg_55 {
      background-image: linear-gradient(45deg, transparent, transparent),
        url("https://www.blockchainappfactory.com/images/nft_studio/bg03.webp");
      background-size: cover;
      height: auto;
    }
    h3.common_h3 {
      font-size: 18px !important;
      color: #fff;
      font-family: "Lato", sans-serif;
    }
    .bg_55 .hr {
      background: #aca3a3;
      width: 50px;
      margin: 10px auto 15px;
      height: 2px;
    }
    .bg_55 .box {
      background: #a3b900;
      padding: 25px;
      border-radius: 12px;
      /* box-shadow: 0 0 14px 8px #eee; */
      margin-bottom: 25px;
      color: white;
      font-size: 13px;
    }
    .bg_55 .box h3 {
      font-weight: 600;
      color: white;
      font-family: "Lato", sans-serif;
    }
    .bg_55 p {
      color: #fff;
    }
  }
`;
export const SecSeven = styled.div`
  .nopadding {
    padding: 0 !important;
    margin: 0 !important;
  }
`;
export const SecEight = styled.div`
  section {
    padding-bottom: 0;
  }
  .section-title .hr {
    background: #aca3a3;
    width: 50px;
    margin: 10px auto 15px;
    height: 2px;
  }
  .row.pad {
    padding: 40px 20px;
  }

  .row.bg_color_1 {
    background: #103754;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .bg_6 h2 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
    @media (max-width: 500px) {
      font-size: 25px !important;
    }
  }
  .text_w {
    color: #fff;
  }

  .row.bg_color_2 {
    background: #a3b900;
  }
  .d-flex {
    display: flex;
  }
  .vcenter-item {
    display: flex;
    align-items: center;
  }
  .bg_6 h2 {
    font-size: 40px;
    font-weight: 600;
  }
  .text_w {
    color: #fff;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    letter-spacing: 1.5px !important;
    line-height: 1.33832em;
  }
  .bg_6 p {
    font-size: 21px;
    line-height: 1.6;
  }
  .row.bg_color_3 {
    background: #fea636;
  }
`;
export const SecNine = styled.div`
  section {
    padding-top: 0;
    padding-bottom: 0;
  }
  .nopadding {
    padding: 0 !important;
    margin: -1px !important;
  }
  .bg_white {
    background: #103754;
    color: #fff;
  }
  .w-100 img {
    width: 100%;
    height: 100%;
    border: 0 !important;
    padding: 0px;
  }
  .bg_7 .content h2 {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 19px;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
    @media (max-width: 500px) {
      font-size: 25px !important;
    }
  }
  .text_w {
    color: #fff;
  }
  .p-40 {
    padding: 40px;
  }
  .vcenter-item {
    display: flex;
    align-items: center;
  }
  .list {
    margin-top: 0rem;
    margin-bottom: 0rem !important;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.6 !important;
    text-indent: -17px;
    list-style: none;
  }

  .list li {
    word-break: break-word;
    margin-bottom: 10px;
    color: #fff !important;
    padding: 10px;
  }

  .fa-square-check {
    color: #f77800;
    margin-right: 10px;
    font-size: 22px;
  }
`;
export const SecTen = styled.div`
  .section-title .hr {
    background: #aca3a3;
    width: 50px;
    margin: 10px auto 15px;
    height: 2px;
  }
  div#pricing-tabs {
    background: #090722;
    color: #fff;
  }
  .data table th {
    background: #103754 !important;
    color: #fff !important;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #103754;
  }
  @media (max-width: 767px) {
    .data table tbody tr:first-child th:last-child {
      transform: scale(1);
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
    }
    .data table th:last-child {
      margin: 10px 0 0;
      display: table-cell;
      width: 100%;
    }
  }
  h3 {
    margin: 0;
    padding: 0;
    color: #2b2c2d;
    font-weight: 500;
    letter-spacing: 1.5px;
    color: #fff;
    font-family: "Lato", sans-serif;
    font-size: 23px;
  }
  .gra1 {
    background: linear-gradient(45deg, #673ab7, #e91e63);
    border-radius: 50px;
  }

  .nectar-button,
  .home-talk-experts {
    transition: 0.2s;
  }
  .nectar-button {
    /* background: #47b475; */
    padding: 10px 25px;
    border-radius: 30px;
    margin: 0 auto !important;
    text-align: center;
    clear: both;
    color: #fff;
    font-weight: 700;
    transition: all 0.3s ease;
    &:hover {
      background: #00acdc;
    }
  }
`;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
