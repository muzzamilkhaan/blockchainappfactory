import styled from "styled-components";

export const SecOne = styled.div`
  .banner {
    background-image: url(https://www.blockchainappfactory.com/images/sidechain/banner.webp);
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 66px;
    background-repeat: no-repeat;
    height: auto;
    background-position: center;
    min-height: 700px;
  }
  .contentall {
    padding-top: 40px;
  }
  .ban_tirt h1 {
    font-family: "Lato", sans-serif;
    font-size: 38px;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #12121230, #0808080a);
    opacity: 0.9;
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
    margin-right: 26px !important;
  }
  .contentall a,
  a.home-talk-experts {
    padding: 10px 20px !important;
  }
  @media (max-width: 768px) {
    .ban_tirt h1 {
      text-align: center;
    }
    .contentall p {
      text-align: center;
    }
  }
`;
export const SecTwo = styled.div`
  .sec_tit h2 {
    font-family: "Lato", sans-serif;
    color: #000 !important;
  }
`;
export const SecThree = styled.div`
  .sec_tit h2 {
    font-family: "Lato", sans-serif;
    color: #000 !important;
  }
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0px;
  }
`;
export const SecFour = styled.div`
  .sec_tit h2 {
    font-family: "Lato", sans-serif;
    color: #000 !important;
  }
`;
export const SecFive = styled.div`
  .sec_tit h2 {
    font-family: "Lato", sans-serif;
    color: #000 !important;
  }
  .single_service_style_ten {
    box-shadow: 0 10px 30px 3px rgb(71 180 117 / 18%);
    background: #fff;
    padding: 20px;
    position: relative;
    transition: 0.5s;
    margin-bottom: 30px;
    min-height: 430px;
    &:hover {
      transform: translateY(-10px);

      .service_style_ten_icon .icon {
        background-color: rgb(71 180 117);
        color: #fff !important;
      }
    }
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      height: 3px;
      width: 20%;
      background: #47b475;
      transition: 0.5s;
    }
    &:hover::before {
      width: 100%;
    }
  }
  .service_style_ten_icon .icon {
    background: rgb(230 226 226);
    display: inline-block;
    height: 70px;
    width: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 35px;
    color: #0c5adb;
    border-radius: 5px;
    transition: 0.5s;
    text-align: center;
  }
  .service_style_ten_content h3 {
    font-family: "Lato", sans-serif;
    font-size: 18px;
    color: #000;
    text-align: center;
    margin-bottom: 10px;
  }
  .service_style_ten_content p {
    text-align: center;
    /* margin-bottom: 1.75em; */
  }
  .service_style_ten_icon {
    text-align: center;
  }
  @media (max-width: 768px) {
    .single_service_style_ten {
      min-height: 0;
    }
  }
`;
export const SecSix = styled.div`
  .features1 {
    background: #e7e7ef;
    margin-bottom: 20px;
    padding: 10px 20px;
    position: relative;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: top right;
    background-image: url(assets/images/hero-box-bg.webp);
    box-shadow: 0px 20px 50px 0px rgb(153 153 153 / 10%);
    transition: 0.5s all ease-in-out;

    &:hover {
      transform: translateY(-10px);
      transition: 0.5s all ease-in-out;
    }
  }
  .features1 .content {
    padding-left: 100px;
  }
  .features1 .icon1 {
    position: absolute;
    display: inline-block;
    top: 40px;
  }
  .features1 .icon1 img {
    width: 70px;
    height: auto;
  }
`;
export const SecSeven = styled.div`
  .list {
    margin-top: 0rem;
    margin-bottom: 0rem !important;
    font-size: 17px;
    line-height: 35px;
    text-indent: -17px;
    list-style: none;
  }
  .fa-caret-right {
    color: #2e9107;
    font-size: 18px;
    padding-right: 10px;
  }
  .sec_tit h2 {
    font-family: "Lato", sans-serif;
    color: #000 !important;
  }
  @media (max-width: 768px) {
    /* margin: 10px; */
  }
`;
export const SecEight = styled.div`
  .sec_tit h2 {
    font-family: "Lato", sans-serif;
    color: #000 !important;
  }
`;
