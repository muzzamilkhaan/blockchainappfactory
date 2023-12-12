import styled from "styled-components";

export const SecOne = styled.div`
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/avalanche/ban.webp");
    background-size: cover;
    padding-top: 110px;
    padding-bottom: 100px;
    background-repeat: no-repeat;
    /* height: auto; */
    background-position: center;
    overflow: hidden;
    min-height: 700px;
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
  .ban_tirt h1 {
    text-align: center;
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
  }
  .contentall {
    padding-top: 40px;
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
`;

export const SecTwo = styled.div`
  .section-title {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
  }
  /* @media (max-width: 768px) {
    .section-title {
      text-align: center;
    }
  } */
`;
export const SecThree = styled.div`
  .sec_tit h2 {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
  }
`;
export const SecFour = styled.div`
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
      box-shadow: 0px 30px 0px -20px #47b4756b;
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
    min-height: 420px;
  }
  .work-icon {
    width: 95px;
    height: 95px;
    margin: 0 auto !important;
    border: 2px solid #47b475;
    border-start-start-radius: 20px;
    border-end-end-radius: 20px;
  }
  #Workflow .work-process img {
    margin-top: 15px;
    width: 64px;
    height: 64px;
    font-size: 40px;
    text-align: center;
  }

  .work-process h4 {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
    padding: 20px 0;
  }
  .section-title1 {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
  }

  @media (max-width: 991px) {
    .work-process {
      min-height: auto;
    }
  }
`;
export const SecFive = styled.div`
  .section-title h2 {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
    padding: 40px 0;
  }
  .single-work {
    padding: 20px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 1px rgb(0 0 0 / 0%);
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
`;

export const SecSix = styled.div`
  .cta_1 h3 {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
  }
  .waveTop {
    background-size: 50% 44px;
    background-image: url("https://www.blockchainappfactory.com/images/avalanche/wave.webp");
  }
  .footer_dark {
    /* background: -moz-linear-gradient(-45deg, #8400fc 0%, #11def4 100%);
    background: -webkit-linear-gradient(-45deg, #8400fc 0%, #11def4 100%); */
    background: linear-gradient(135deg, #8400fc 0%, #11def4 100%);
    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8400fc', endColorstr='#11def4', GradientType=1 ); */
    position: relative;
  }
  .waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 610px;
    margin: auto;
    height: 43px;
  }
  .footer-wave {
    position: absolute;
    top: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat-x;
    background-position: 0 bottom;
    transform-origin: center bottom;
  }
  .waveTop {
    background-size: 50% 44px;
    background-image: url("https://www.blockchainappfactory.com/images/avalanche/wave.webp");
    /* -webkit-animation: move_wave_reverse 10s linear infinite;
    -moz-animation: move_wave_reverse 10s linear infinite;
    -o-animation: move_wave_reverse 10s linear infinite; */
    animation: move_wave_reverse 10s linear infinite;
    right: 0;
    left: auto;
  }
`;
export const SecSeven = styled.div`
  .primary-list li i {
    color: #47b475;
    padding-right: 10px;
  }
  .section-title h3 {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
  }
  .primary-list h4 {
    font-family: "Lato", sans-serif;
    letter-spacing: 1.5px !important;
    color: #000;
  }
`;
