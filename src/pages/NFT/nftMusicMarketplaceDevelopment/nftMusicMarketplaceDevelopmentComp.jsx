import styled from "styled-components";

export const SecOne = styled.div`
  .contentall {
    padding-top: 240px;
  }
  .contentall a {
    border-radius: 30px;
    transition: all 0.3s ease-out 0s !important;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/nft_music/nft_music_banner.webp");
    background-size: cover;
    /* padding-top: 120px; */
    /* padding-top: 165px;
    padding-bottom: 66px; */
    /* height: auto; */
    background-position: center;
    height: 100vh;
  }
  .banner-overlay {
    background-color: rgb(0 0 0 / 0%);
  }

  .text-center img {
    padding-top: 130px;
    /* width: 100%; */
    @media (max-width: 991px) {
      padding-top: 0;
      margin: 0 auto;
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
    @media (max-width: 1001px) {
      text-align: center;
    }
  }
  .ban_tirt h1 {
    font-family: "Lato", sans-serif;
    color: #fff;
    font-size: 32px;
    @media (max-width: 1001px) {
      padding-top: 250px;
      text-align: center !important;
      font-size: 30px;
    }
    @media (max-width: 768px) {
      padding-top: 0;
      font-size: 25px;
    }
  }
  .cta_mine {
    @media (max-width: 1001px) {
      text-align: center !important;
    }
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
  .arrow {
    padding: 4% 6%;
    background: #fdfdfd;
    border-radius: 10px;
    box-shadow: 0 0 16px 6px #00000021;
    margin-top: 68px;
    margin-bottom: auto;
  }
`;
export const SecFive = styled.div`
  .whychoose_sec ul li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  .whychoose_sec .icon_img {
    border: 2px solid #47b475;
    border-radius: 5px;
    padding: 5px;
  }
  .whychoose_sec .icon_img img {
    border-radius: 15%;
    display: inline-block;
    padding: 10px;
    background: #fff;
    box-shadow: 0 20px 50px rgb(0 0 0 / 10%);
  }
  .whychoose_sec .content {
    width: 85%;
    padding-left: 20px;
  }
  .whychoose_sec p strong {
    font-size: 20px;
    color: #444040;
  }
  .br {
    border-radius: 10px;
  }
  @media screen and (min-width: 768px) {
    .hgh {
      height: 535px !important;
    }
  }
`;
export const SecSix = styled.div`
  @media screen and (min-width: 768px) {
    .hght {
      height: 530px !important;
    }
  }
  .br {
    border-radius: 10px;
  }
  .whychoose_sec ul li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      margin-top: 25px;
    }
  }
  .whychoose_sec .icon_img {
    border: 2px solid #47b475;
    border-radius: 5px;
    padding: 5px;
  }
  .whychoose_sec .icon_img img {
    border-radius: 15%;
    display: inline-block;
    padding: 10px;
    background: #fff;
    box-shadow: 0 20px 50px rgb(0 0 0 / 10%);
  }
  .whychoose_sec .content {
    width: 85%;
    padding-left: 20px;
  }
  .whychoose_sec p strong {
    font-size: 20px;
    color: #444040;
  }
`;
export const SecSeven = styled.div`
  .box4 {
    background: #fff;
    /* text-align: center; */
    background-size: 200%;
    background-position: top right;
    background-repeat: no-repeat;
    text-align: center;
    padding: 33px 20px 10px;
    margin: 0;
    min-height: 376px;
    margin-bottom: 10px;
    position: relative;
    border: 1px solid #91d2ac;
    /* -webkit-border-radius: 8px; */
    border-radius: 8px;
    transition: all 100ms ease-in-out !important;

    &:hover {
      /* box-shadow: 0 15px 10px #777; */
      min-height: 392px;
      transition: all 100ms ease-in-out !important;
      background: linear-gradient(to right, #285e918c 35%, #22729a29 100%);
      box-shadow: 1px 2px 1px -1px #777;
      .ico-anim {
        border-bottom: 2px dotted #304a8d;
        padding-bottom: 10px;
        transition: all 100ms ease-in-out !important;
      }
      @media (max-width: 520px) {
        min-height: 300px;
      }
    }
    @media (max-width: 520px) {
      min-height: 0;
    }
  }
  .s-card-icon {
    width: 60px;
    margin: 0 auto 30px;
  }
  .box4 h3 {
    font-size: 20px;
    font-weight: 600;
    color: #444040;
  }
`;
export const SecEight = styled.div``;
