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
    padding-top: 100px;
  }
  .banner_content .contentall {
    /* margin-top: 30px; */
  }

  .contentall h1 {
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 700;
    font-size: 32px;
    font-family: "Lato", sans-serif;
    color: #fff !important;
    text-transform: uppercase;
    padding-top: 80px;

    @media (max-width: 767px) {
      font-size: 25px !important;
      text-align: center;
      padding-top: 0;
      /* margin-top: 100px; */
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
    background: linear-gradient(180deg, #7723bb, #180134);
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 50px;
    background-position: center;
    @media (max-width: 991px) {
      height: 100vh;
      margin-top: 40px;
    }
    @media (max-width: 767px) {
      height: 70vh;
      margin-top: 0px;
    }
  }

  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 0%);
    background-image: linear-gradient(to right, #00000000, #00000000);
    opacity: 0.95;
  }
  .img-container img {
    margin-top: 70px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
export const SecTwo = styled.div``;

export const SecThree = styled.div`
  .complimentary-features {
    background-color: #fff;
  }
  .complimentary-features ul li .icons img {
    width: 80px;
    height: 80px;
    padding: 10px;
  }
  .complimentary-features ul li h3 {
    display: block;
    font-size: 18px;
    color: #200b52;
    font-weight: bold;
    text-align: left;
    line-height: 1.3em;
    margin-bottom: 10px;
    font-family: "Lato", sans-serif;
  }
  .content p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 0px !important;
    color: #000000 !important;
    /* margin-top: 10px; */
  }
  .complimentary-features ul li{
    width: 100%;
    display: block;
  }
`;
export const SecFour = styled.div`
  .technologies ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .technologies ul li {
    width: 21%;
    text-align: center;
    font-size: 16px;
    padding: 15px;
    background-image: linear-gradient(180deg, #7723bb, #180134);
    margin: -1px;
    border: 1px solid #fff;
    @media only screen and (min-width: 320px) and (max-width: 767px){
      width: 49%;
    }
  }
  .technologies ul li img {
    height: 50px;
  }
  .technologies ul li p {
    margin-bottom: 0 !important;
  }
  .white {
    color: #fff;
  }
`;
export const SecFive = styled.div`
  .section-title .hr {
    background: #aca3a3;
    width: 50px;
    margin: 10px auto 15px;
    height: 2px;
  }
`;
export const SecSix = styled.div`
  .container-center {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    justify-content: center;
  }
  .featured-icon-box1.style3 {
    position: relative;
    margin: 15px 0;
    padding: 25px;
    background-color: #fff;
    &::before {
      content: "";
      position: absolute;
      height: 2px;
      left: 0px;
      width: 100px;
      right: auto;
      top: 0;
      transition: 0.7s all ease;
      background-color: #350068;
    }
    &::after {
      content: "" !important;
      position: absolute;
      height: 2px;
      left: 0px;
      width: 100px;
      right: auto;
      top: 0;
      transition: 0.7s all ease;
    }
    &:hover {
      border-left: 2px solid #350068;
      transition: 0.1s all ease;
    }
  }
  img {
    width: 65px !important;
    height: 65px !important;
  }
  .featured-icon-box1.style3 .featured-title h3 {
    font-size: 20px;
    line-height: normal;
    margin: 15px 0 10px;
    font-family: "Lato", sans-serif;
  }
  .featured-icon-box1.style3 .featured-desc {
    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-bottom: 34px solid #350068;
      border-left: 30px solid transparent;
      right: 0px;
      bottom: 0px;
      transition: 0.7s all ease;
    }
  }
`;
export const SecSeven = styled.div`
  .main-timeline7 .timeline7 {
    &:hover {
      .title {
        color: #350068;
      }
    }
  }
  .main-timeline7 .title {
    color: #350068;

    font-family: "Lato", sans-serif;
  }
  .main-timeline7 .border {
    background: #350068;
  }
  .main-timeline7 .timeline7-icon {
    padding: 20px 0 55px 0;
    &::before {
      background: #350068;
    }
  }
  .main-timeline7 .timeline7-icon i {
    background: #350068;
  }
  .main-timeline7 .timeline7-content {
    padding: 12px;
    /* background-color: red; */
  }
  .main-timeline7 .timeline7-icon {
    display: block;
    text-align: center;
    padding: 20px 0 55px 0;
    z-index: 1;
    position: relative;
  }
`;
export const SecEight = styled.div`
  .common_spacing {
    padding: 60px 0;
  }
  .data table .pr_pack th {
    font-size: 20px;
    line-height: 1.4;
    text-transform: uppercase;
    background: linear-gradient(#09abe9, #00c5a7);
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }

  .data tr td:nth-child(1) {
    width: 30% !important;
  }
  .data table td {
    padding: 5px 10px;
  }
  .data table td,
  .data table th {
    text-align: center;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    /* padding: 10px 15px; */
  }
  .data table td img {
    width: 25px;
  }
  @media (max-width: 500px) {
    td:nth-child(4) {
      width: 20% !important;
    }
  }
  @media (max-width: 768px) {
    .data table th:last-child {
      margin: 10px 0 0;
      display: table-cell !important;
      width: 100%;
    }
    .data table th {
      padding: 10px 5px;
    }
    .data table td {
      padding: 5px 6px;
    }
    .table-striped {
      overflow-x: scroll;
      width: 100%;
    }
  }
  @media screen and (max-width: 900px) {
    .pricing-table {
      display: block;
      overflow: scroll;
    }
  }
  .data tr td:nth-child(1) {
    width: 30% !important;
  }
`;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
