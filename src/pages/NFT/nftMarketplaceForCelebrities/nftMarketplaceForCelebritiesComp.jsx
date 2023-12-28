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
    background-image: url("https://www.blockchainappfactory.com/images/cele/bnr_img.webp");
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
    background-image: linear-gradient(to right, #12121230, #0808080a);
    opacity: 0.95;
    background-color: rgb(0 0 0 / 75%);
  }
  .cta_mine {
    text-align: center;
    margin-top: 40px !important;
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
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 25px !important;
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
export const SecFour = styled.div``;

export const SecFive = styled.div`
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
export const SecSix = styled.div`
  #Workflow .work-process {
    background-color: #fff;
    padding: 15px;
    position: relative;
    z-index: 1;
    transition: 0.5s;
    box-shadow: 0px 30px 0px -20px #ffffff;
    margin-bottom: 30px;
    border: 1px solid #1fb6c43b;
    text-align: center;

    &:hover::after {
      background: rgb(233 248 255 / 22%);
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 10px;
    }
    &::after {
      content: "";
      position: absolute;
      background: #f1f3f5;
      left: 0px;
      top: 0px;
      width: 0px;
      height: 100%;
      transition: all 0.3s;
      z-index: -1;
    }
  }
  .work-process {
    background: #f2f2f2;
    min-height: 330px;
  }
  .work-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto !important;
    border: 2px solid #47b475;
    border-radius: 50px;
  }
  #Workflow .work-process img {
    margin-top: 15px;
    width: 64px;
    height: 64px;
    font-size: 40px;
    text-align: center;
  }
  #Workflow .work-process h4 {
    font-family: "Lato", sans-serif;
    font-size: 18px;
    padding: 20px 0px;
    color: #000000;
    font-weight: 700;
  }
  #Workflow .work-process p {
    color: #000000;
  }
`;
export const SecSeven = styled.div`
  @media (min-width: 1200px) {
    .service-box {
      padding-top: 40px;
      padding-right: 15px;
      padding-left: 15px;
      margin: 0 0 30px 0;
      border-radius: 6px;
      min-height: 530px !important;
      padding: 60px 30px;
      box-shadow: 0 0 30px -12px #c9c9c9;
      transform: translateY(0);
      transition: 0.3s;
      color: #000000;

      &:hover {
        box-shadow: 0 0 30px -5px #c9c9c9;
        transform: translateY(-5px);
      }
    }
  }
  .service-box .service-icon {
    width: 70px;
    height: 70px;
    margin: auto auto 40px auto;
    background-color: #2453b636;
    padding: 15px;
    border-radius: 6px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .service-box .service-title {
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  .service-box .service-icon img,
  .service-box .service-icon i {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div`
  .primary-list li i {
    color: #47b475;
    padding-right: 10px;
  }
  .port-txt {
    font-weight: 400;
    font-size: 15px !important;
  }
`;
export const SecTen = styled.div`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(164, 174, 198, 0.2);
    border-radius: 0.4rem;
    margin-bottom: 20px;
    box-shadow: 0 0 0 0.05rem rgb(8 60 130 / 6%), 0 0 1.25rem rgb(30 34 40 / 4%);
  }
  .card-body {
    flex: 1 1 auto;
  }
  .btn.btn-circle.disabled {
    opacity: 1;
  }
  .btn.btn-circle.btn-lg {
    width: 3rem;
    height: 3rem;
    font-size: calc(1.255rem + 0.06vw);
  }
  .btn.btn-circle .number {
    display: table-cell;
    text-align: center;
    margin: 0 auto;
    vertical-align: middle;
    font-size: 1.1rem;
    font-weight: 700;
  }
  .btn.btn-circle {
    padding: 0;
    border-radius: 100% !important;
    width: 2.2rem;
    height: 2.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .btn-soft-primary {
    background-color: #47b47526 !important;
    color: #47b475;
    border: none;
  }
  .fle-text h5 {
    font-family: "Lato", sans-serif !important;
    color: #000000;
    font-weight: 700;
    letter-spacing: 1.5px !important;
  }
  .mt-5 {
    margin-top: 5px !important;
  }
`;

export const SecEleven = styled.div`
  .main-timeline1 {
    position: relative;

    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .main-timeline1 .timeline {
    width: 60%;
    margin: 0 30px 50px 0;
    float: left;

    @media screen and (max-width: 767px) {
      padding: 35px 0 0 0;
      margin: 0 0 10px;
      width: 100%;
    }
  }
  .timeline {
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 30px;
      height: 100%;
      width: 2px;
      background: #f2f2f2;
      content: "";
    }
  }
  .main-timeline1 .timeline-content {
    color: #333;
    /* min-height: 150px; */
    padding: 30px;
    border: 3px solid #47b475;
    display: block;
    position: relative;
    z-index: 1;
    cursor: not-allowed;

    &::before {
      content: "";
      background: #fff;
      box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 10px;
      top: 10px;
      bottom: 10px;
      right: 10px;
      z-index: -1;
    }
    &::after {
      background-color: #47b475;
      height: 3px;
      width: 100px;
      box-shadow: none;
      transform: translateY(-50%);
      left: 100%;
      right: auto;
      top: 50%;
      bottom: auto;
      z-index: 1;
      content: "";
      /* background: #fff; */
      position: absolute;
    }
    @media (max-width: 767px) {
      padding-top: 45px;
      &::after {
        display: none; /* Hide ::after for mobile devices */
      }
    }
  }
  .main-timeline1 .timeline-icon {
    color: #fff;
    background: linear-gradient(to bottom, #fdfcf8, #b2b3b4);
    font-size: 45px;
    text-align: center;
    line-height: 108px;
    height: 105px;
    width: 105px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%) rotate(45deg);
    position: absolute;
    top: 50%;
    right: -200px;
    &::before {
      content: "";
      background: linear-gradient(to top, #47b475, #2098d1);
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
      transform: translateX(-50%) translateY(-50%);
      position: absolute;
      width: 75%;
      height: 75%;
      top: 50%;
      left: 50%;
    }
    @media (max-width: 767px) {
      font-size: 25px;
      line-height: 50px;
      height: 50px;
      width: 50px;
      right: 7px;
      top: -27px;
      transform: translateY(0) rotate(45deg);
      &::before {
        height: 83%;
        width: 83%;
      }
    }
  }
  .main-timeline1 .timeline-icon i {
    transform: rotate(-45deg);
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /*  */
  .main-timeline1 .timeline:nth-child(even) {
    float: right;
    margin: 0 0 50px 30px;
    @media screen and (max-width: 767px) {
      padding: 35px 0 0 0;
      margin: 0 0 10px;
      width: 100%;
    }
  }
  .main-timeline1 .timeline:nth-child(even) .timeline-icon {
    right: auto;
    left: -200px;
    @media screen and (max-width: 576px) {
      left: 7px;
    }
  }
  .main-timeline1 .timeline:nth-child(even) .timeline-content {
    &::after {
      left: auto;
      right: 100%;
    }
  }
  .main-timeline1 .description {
    font-size: 14px;
    letter-spacing: 1px;
    text-align: justify;
    margin: 0;
    color: #333333 !important;
    &:hover {
      color: #47b475;
      cursor: not-allowed;
    }
  }
`;
export const SecTwelve = styled.div``;
export const SecThirTeen = styled.div`
  .primary-list li i {
    color: #47b475;
    padding-right: 10px;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .primary-list li h4 {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: #000000;
    letter-spacing: 1.5px !important;
  }
  .port-txt {
    font-weight: 400;
    font-size: 15px !important;
  }
`;
export const SecFourTeen = styled.div`
  @media (min-width: 1200px) {
    .service-box {
      padding-top: 40px;
      padding-right: 15px;
      padding-left: 15px;
      margin: 0 0 30px 0;
      border-radius: 6px;
      min-height: 400px !important;
      padding: 60px 30px;
      box-shadow: 0 0 30px -12px #c9c9c9;
      transform: translateY(0);
      transition: 0.3s;
      color: #000000;

      &:hover {
        box-shadow: 0 0 30px -5px #c9c9c9;
        transform: translateY(-5px);
      }
    }
  }
  .service-box .service-icon {
    width: 70px;
    height: 70px;
    margin: auto auto 40px auto;
    background-color: #2453b636;
    padding: 15px;
    border-radius: 6px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .service-box .service-title {
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  .service-box .service-icon img,
  .service-box .service-icon i {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;
export const SecFiveTeen = styled.div`
  .features-box {
    margin: 15px 0;
    padding: 25px 2px;
    background-color: #fff;
    box-shadow: 5px 6px 20px rgb(0 0 0 / 10%);
    text-align: center;
    border-radius: 40px 7px;
    transition: all 0.5s;
    min-height: 178px;
    &:hover {
      box-shadow: 5px 6px 20px rgb(0 0 0 / 20%);
      transform: scale(1.025);
      transition: all 0.5s;
    }
  }
  .features-box img {
    height: 100%;
    max-height: 50px;
  }
  .features-box h4 {
    font-size: 15px;
    margin-top: 10px;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
    color: #000000;
  }
`;
export const SecSixTeen = styled.div`
  @media (min-width: 1200px) {
    .single-work {
      min-height: 235px;
      padding: 20px;
      /* transition: 0.3s; */
      margin-top: 20px;
      border-radius: 8px;
      /* box-shadow: 0 2px 4px 1px rgb(0 0 0 / 0%); */
      /* min-height: 440px; */
      margin-bottom: 20px;
      color: #000000;
      &:hover {
        box-shadow: 0 5px 10px 0 rgb(74 71 72 / 50%);
        transform: translateY(-5px);
        -webkit-transition: 0.3s;
        transition: 0.3s;
      }
    }
  }
  .single-work img {
    max-width: 80px;
    min-height: 62px;
  }
  .single-work h3 {
    font-size: 20px;
    padding-top: 15px;
    margin-bottom: 10px;
    font-weight: 700;
    color: #000000;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
  }
`;
