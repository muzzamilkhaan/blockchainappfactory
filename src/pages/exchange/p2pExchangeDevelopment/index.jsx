import React from "react";
import {
  BannerContainer,
  Container,
  Sec,
  Banner,
  Layout,
  Image,
  Content,
  ButtonContainer,
  // Button,
  Sec2,
  Content2,
  UnderLine,
  Sec3,
  ImageSec2,
  Sec4,
  Sec5,
  Sec5Layout,
  Sec5Card,
  Sec5CardContainer,
  Sec6,
  CardSec4,
  InnerContainer,
  Sec7,
  LayoutSec7,
  LeftSec7,
  RightSec7,
  Sec8,
  LayoutSec8,
  LeftSec8,
  RightSec8,
  Sec9,
  ButtonSec4,
} from "./p2pExchangeDevComp";
import { Section } from "../../../components/sections/section";
import icons from "../../../assets/icons/index";
import {
  Card,
  ExchangeCardSec4,
  YourComponent,
} from "../../../components/cards/Card";
import "./p2pExchangeDev.css";
import Faq from "../../../components/shared/Faq";
import Sec10 from "../decentralizedExchangeDevelopment/Sec6";
import Button from "../../../components/Button";
const Data = [
  {
    img: "https://www.blockchainappfactory.com/images/p2p/cryptocurrencies.webp",
    title: "Multiple Cryptocurrencies",
    desc: "Our platform is integrated with multiple cryptocurrency support like BTC, LTC, ETH, USDT, etc.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/translate.webp",
    title: "Multi-Language Support",
    desc: "The platform offers multi-language support, thereby providing global access to your P2P platform. We intend to provide the best user experience for every customer, from every nook and corner of the world. ",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/track.webp",
    title: "Dominant Trading engine",
    desc: "Our team of expert developers will offer you a powerful, highly-secure trading engine, with the capability of auto-matching buyers and sellers without any time-lapse. ",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/portfolio.webp",
    title: "Automated KYC & AML verification",
    desc: "The automated KYC/AML enables admins to verify the user profiles quickly and efficiently, which helps avoid scams and ensures authentic users for the exchange. ",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/wrench.webp",
    title: "Crypto Swaps",
    desc: "The crypto swapping option allows the users to carry out a reliable trading process, eliminating involvement from any third parties. The transactions can be executed or eliminated entirely, avoiding breaches of agreements.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/gateway.webp",
    title: "Payment Gateway integration",
    desc: "Customers can send and receive currencies through various payment mediums within the platform for quick and efficient transactions. ",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/authentication.webp",
    title: "Multi-Factor Authentication",
    desc: "Multi-Factor Authentication features such as email authentication or Google 2FA, are enabled for both the admin and the users to conduct secured transactions.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/wallet.webp",
    title: "Multi-Currency wallet",
    desc: "Users can store multiple-currencies within the wallet, integrated with enhanced security features.  ",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/admin.webp",
    title: "Admin Panel",
    desc: "A secure admin panel is inbuilt for efficient management of crucial components such as escrow and dispute management.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/meeting.webp",
    title: "Preferred trading",
    desc: "This feature allows customers to choose their preferred sellers and vice-versa. This ensures a more secure, smooth trading process. ",
  },
];
const ExchangeSec4 = [
  {
    img: "https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp",
    title: "User Registration",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/kyc.webp",
    title: "KYC/AML verification",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp",
    title: "User Registration",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/kyc.webp",
    title: "KYC/AML verification",
  },
];
const ExchangeSec5 = [
  {
    img: "https://www.blockchainappfactory.com/images/p2p/interview.webp",
    title: "Order matching between buyers and sellers",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/check.webp",
    title: "Confirmation of order from the buyers and sellers",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/loan.webp",
    title:
      "The smart contracts-based escrow holds the assets, that is to be sold",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/ecommerce.webp",
    title: "The Buyer makes the payment for the purchase",
  },
];
const ExchangeSec6 = [
  {
    img: "https://www.blockchainappfactory.com/images/p2p/bill.webp",
    title: "Confirmation from the seller regarding payment",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/wallet.webp",
    title: "Escrow releases the asset and transfers to the buyer’s wallet",
  },
  {
    img: "https://www.blockchainappfactory.com/images/p2p/digital-wallet.webp",
    title: "Buyer stores the asset in the cold wallet. ",
  },
];
const FAQ = [
  {
    title: "How does a P2P Exchange work?",
    desc: " A peer-to-peer exchange platform is completely decentralized. Thus, it eliminates the involvement of third parties managing the customer funds and an order book to manage the buy/sell requests. Instead, it allows customers to exchange directly peer-to-peer between themselves and manage their funds. ",
  },
  {
    title: "What are the advantages of P2P exchange? ",
    desc: " A p2p exchange is highly advantageous in the aspect of helping customers with highly-secure, quick, efficient, seamless transactions. And as it does not involve a third party, it is risk-free, hassle-free, time-saving, and cost-effective. ",
  },
  {
    title: "How much does it cost to build a Peer to Peer exchange? ",
    desc: " The cost of building a p2p exchange varies from customer to customer according to their required features and customization preferences. However, acquiring ready-made white label solutions will cost way less than gathering equipment and building the exchange from scratch. ",
  },
  {
    title: " What are the benefits of having a p2p exchange?",
    desc: " There are numerous benefits involved with having a p2p cryptocurrency exchange. Some of the significant ones include direct globalised transactions, improved user privacy, prevention of fraudulent, cost-effective business, enhanced security, etc. ",
  },
  {
    title: "How to develop a P2P crypto exchange platform?",
    desc: " Developing a p2p crypto exchange platform from scratch will consume ample time and money, also involves technical factors. The better choice is to obtain white label p2p exchange solutions from a sort after company, which is reliable, quick to deploy, integrated with quality technical elements, and cost-effective. ",
  },
];
const P2pExchangeDev = () => {
  return (
    <React.Fragment>
      <Container>
        {/* BANNER START HERE */}
        <Banner>
          <Sec>
            <Layout>
              <Content>
                <div className="content">
                  <h1 className="h1">
                    P2P Crypto Exchange Development Company
                  </h1>
                  <p className="p1">
                    Best White Label P2P Crypto Exchange Software
                  </p>
                </div>
                <ButtonContainer>
                  <Button
                    btnContent="CONNECT WITH WHATSAPP"
                    to="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
                    target="_blank"
                  />{" "}
                  <Button
                    btnContent=" Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                  <Button btnContent="View demo" to="#demo" />
                </ButtonContainer>
              </Content>
              <Image>
                <img src={icons.p2p_banner} alt="" className="sec1-img" />
              </Image>
            </Layout>
          </Sec>
        </Banner>
        {/* BANNER END HERE */}
        {/* SEC2 START HERE */}
        <Sec2 backgroundColor="white">
          <Content2>
            <h2 className="h2">P2P Exchange Development Services</h2>
            <UnderLine />
            <p>
              Cryptocurrency is a trending talking point in the current business
              sphere. We come from a digital era, where many industries are
              evolving towards assimilating cryptocurrency for their business
              because of the high efficiency, quicker, cheaper transactions.
              Especially a peer-peer exchange platform comes along with a
              decentralized, highly-secure, transparent transaction process.
            </p>
            <p>
              We at Blockchain App Factory, have a team of blockchain experts,
              who have worked with several business entities, and helped them
              achieve their goals successfully. We offer reliable white-label
              solutions and strive towards building you a robust, scalable P2P
              exchange platform with cutting-edge blockchain technology.{" "}
            </p>
          </Content2>
          <ImageSec2>
            <img src={icons.p2p_intro} alt="" />
          </ImageSec2>
        </Sec2>
        {/* SEC2 END HERE */}
        {/* SECTION3 START HERE */}
        <Sec3 backgroundColor="#f2f2f2">
          <h3 className="sec_tit underline text-center sec3-h3">
            Our P2P Crypto Exchange Development Features
          </h3>
          <Card data={Data} />
        </Sec3>
        {/* SECTION3 END HERE */}
        {/* SECTION 4 START HERE */}
        <Sec4 backgroundColor="white">
          <h3 className="sec_tit underline text-center sec4-h3">
            A Guide to the Working Process of P2P Crypto Exchanges
          </h3>
          <ExchangeCardSec4 data={ExchangeSec4} />
          <ExchangeCardSec4 data={ExchangeSec5} />
          <ExchangeCardSec4 data={ExchangeSec6} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              btnContent=" Talk with our Experts"
              to="#newsletter-form-sec"
            />
          </div>
        </Sec4>
        {/* SECTION 4 END HERE */}
        {/* SECTION5 START HERE */}
        <Sec5 backgroundColor="white">
          <Sec5Layout>
            <div>
              <h2 className="sec_tit underline text-center  sec5-h2">
                Discover Our White Label Crypto Exchange Demo
              </h2>
              <img
                src="https://www.blockchainappfactory.com/images/demo-img/crypto-demo-img.webp"
                alt=""
                className="img-sec5"
              />
            </div>
            {/* <div> */}
            <Sec5CardContainer>
              <InnerContainer>
                <b>Controlled Exchange </b>
                <Sec5Card>
                  {/* <Button>CONNECT WITH WHATSAPP</Button> */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      btnContent="View Demo"
                      to="https://blink.deliveryventure.com/"
                      target="_blank"
                    />
                  </div>
                  <h4 className="sec5-h4">User Demo</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                    }}
                  >
                    <b>user :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                        marginBottom: "0px",
                      }}
                    >
                      demo@demo.com
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                      borderBottom: "1px solid #fff",
                      marginBottom: "10px",
                    }}
                  >
                    <b>Password :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                      }}
                    >
                      Demo@123
                    </p>
                  </div>

                  <h4 className="sec5-h4">Admin Demo</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                    }}
                  >
                    <b>user :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                        marginBottom: "0px",
                      }}
                    >
                      admin@demo.com
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                    }}
                  >
                    <b>Password :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                      }}
                    >
                      123456
                    </p>
                  </div>
                </Sec5Card>
                {/* <div style={{color:"#fff",height:"2px" , border:"1px solid red"}}/> */}
              </InnerContainer>
              <InnerContainer>
                <b>Centrillized Exchange </b>
                <Sec5Card>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      btnContent="View Demo"
                      to="https://exchange.bafdemo.com/"
                      target="_blank"
                    />
                  </div>
                  <h4 className="sec5-h4">User Demo</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                      width: "100%",
                    }}
                  >
                    <b>Login ID :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                        marginBottom: "0px",
                      }}
                    >
                      admin@coinage.cloud
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                    }}
                    className
                  >
                    <b>Password :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                      }}
                    >
                      9f274281
                    </p>
                  </div>
                </Sec5Card>
              </InnerContainer>
              <InnerContainer>
                <b>P2P</b>
                <Sec5Card>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      btnContent="View Demo"
                      to="https://localbitcoin.deliveryventure.com/"
                      target="_blank"
                    />
                  </div>
                  <h4 className="sec5-h4">User Demo</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                    }}
                  >
                    <b>user :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                        marginBottom: "0px",
                      }}
                    >
                      demo@mailinator.com
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                      borderBottom: "1px solid #fff",
                      marginBottom: "20px",
                    }}
                  >
                    <b>Password :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                      }}
                    >
                      Demo@123
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      btnContent="View Demo"
                      to="https://localbitcoin.deliveryventure.com/admin/login"
                      target="_blank"
                    />
                  </div>
                  <h4 className="sec5-h4">Admin Demo</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                    }}
                  >
                    <b>user :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                        marginBottom: "0px",
                      }}
                    >
                      admin@demo.com
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#fff",
                      gap: "5px",
                      letterSpacing: ".5px",
                    }}
                  >
                    <b>Password :</b>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                      }}
                    >
                      123456
                    </p>
                  </div>
                </Sec5Card>
              </InnerContainer>
            </Sec5CardContainer>
            {/* </div> */}
          </Sec5Layout>
        </Sec5>

        {/* TODO */}
        {/* <YourComponent /> */}
        <Sec6 backgroundColor="#f6f6f6">
          <div className="common_spacing gray_bg">
            <div className="container">
              <div className="row">
                <h2 className="sec_tit underline text-center">
                  Our P2P exchange platform development process
                </h2>
              </div>
              <div className="col-md-12 mt30">
                <div className="timeline-center">
                  <div className="timeline-row row m-0">
                    <div className="tm-detail tm-det tm-det-left">
                      <h4 className="common_h4 mb10 tm-det-tit">Step 1</h4>
                      <ul className="process-list">
                        <li>
                          <p>
                            Research, requirements gathering, and exchange
                            preparation that suits your business model.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="tm-icon roadmap-icon-outer">
                      {" "}
                      <i
                        className="fa fa-search-plus"
                        aria-hidden="true"
                      ></i>{" "}
                    </div>
                  </div>
                  <div className="timeline-row row m-0">
                    <div className="tm-detail tm-det tm-det-right">
                      <h4 className="mb10 common_h4 tm-det-tit">Step 2</h4>
                      <ul className="process-list">
                        <li>
                          <p>
                            {" "}
                            Essential technology integrations such as UX/UI
                            enhanced security with legal compliance based on the
                            geography of exchange corporation.{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="tm-icon roadmap-icon-outer">
                      {" "}
                      <i className="fa fa-desktop" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="timeline-row row m-0">
                    <div className="tm-detail tm-det tm-det-left">
                      <h4 className="common_h4 mb10 tm-det-tit">Step 3</h4>
                      <ul className="process-list">
                        <li>
                          <p>Trading engine installation.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tm-icon roadmap-icon-outer">
                      {" "}
                      <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="timeline-row row m-0">
                    <div className="tm-detail tm-det tm-det-right">
                      <h4 className="mb10 common_h4 tm-det-tit">Step 4</h4>
                      <ul className="process-list">
                        <li>
                          <p>
                            Integration of various blockchains into the
                            platform.{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="tm-icon roadmap-icon-outer">
                      {" "}
                      <i className="fa fa-btc" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="timeline-row row m-0">
                    <div className="tm-detail tm-det tm-det-left">
                      <h4 className="common_h4 mb10 tm-det-tit">Step 5</h4>
                      <ul className="process-list">
                        <li>
                          <p>Listing of tokens/ coins. </p>
                        </li>
                      </ul>
                    </div>
                    <div className="tm-icon roadmap-icon-outer">
                      {" "}
                      <i className="fa fa-list" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="timeline-row row m-0">
                    <div className="tm-detail tm-det tm-det-right">
                      <h4 className="mb10 common_h4 tm-det-tit">Step 6</h4>
                      <ul className="process-list">
                        <li>
                          <p>Delivery of exchange platform.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tm-icon roadmap-icon-outer">
                      {" "}
                      <i className="fa fa-exchange" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-center">
              <div className="cta_mine">
                <a
                  className="nectar-button medium regular accent-color regular-button nec-btn"
                  target="_blank"
                  href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  data-color-override="false"
                  data-hover-color-override="false"
                  data-hover-text-color-override="#fff"
                >
                  <span>Connect with Whatsapp</span>
                </a>
              </div>{" "}
            </div> */}
            <div
              className="text-center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                btnContent="Connect with Whatsapp"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                target="_blank"
              />
            </div>
          </div>
        </Sec6>

        {/* SECTION5 END HERE */}
        {/* SECTION6 START HERE */}
        {/* SECTION6 END HERE */}
        {/* SECTION7 START HERE */}
        <Sec7 backgroundColor="white" paddingBlock="5vw">
          <LayoutSec7>
            <LeftSec7>
              <h2 className="sec7-h2">
                5 Key Benefits of Our P2P Exchange Development Services
              </h2>
              <UnderLine />
              <ul style={{ paddingLeft: "0" }}>
                <li className="li">
                  <i className="fa fa-credit-card font" aria-hidden="true"></i>
                  Quicker, risk-free transactions
                </li>
                <li className="li">
                  <i className="fa fa-shield font" aria-hidden="true"></i>Secure
                  payments
                </li>
                <li className="li">
                  <i className="fa fa-usd font" aria-hidden="true"></i>Low
                  trading costs
                </li>
                <li className="li">
                  <i className="fa fa-phone font" aria-hidden="true"></i>24x7
                  customer support
                </li>
                <li className="li">
                  <i className="fa fa-phone font" aria-hidden="true"></i>
                  Cutting-edge blockchain solutions.{" "}
                </li>
              </ul>
            </LeftSec7>
            <RightSec7>
              <img
                src="https://www.blockchainappfactory.com/images/p2p/p2p_admin.webp"
                alt=""
                className="img-sec7"
              />
            </RightSec7>
          </LayoutSec7>
        </Sec7>
        {/* SECTION7 END HERE */}
        {/* SECTION8 START HERE */}
        <Sec8 backgroundColor="#f2f2f2">
          <h2 className="sec_tit underline text-center  sec8-h2">
            Our Exclusive White Label P2P Crypto Exchange Software
          </h2>
          <LayoutSec8>
            <LeftSec8>
              <img
                src="https://www.blockchainappfactory.com/images/p2p/exclusive-software.webp"
                alt=""
              />
            </LeftSec8>
            <RightSec8>
              <p className="text-justify" style={{ textAlign: "justify" }}>
                <a
                  href="https://www.blockchainappfactory.com/white-label-cryptocurrency-exchange-software-development"
                  target="_blank"
                >
                  White label P2P crypto exchange software
                </a>{" "}
                is an optimal solution for launching your P2P exchange platform
                in the market instantly. Even with plenty of options available
                in the market, our white label solution shows up as an effective
                solution with its reliable, secured, and instant deployment
                services. The solution we offer supports multiple platforms with
                multichain capability ensuring uninterrupted connectivity across
                different blockchain networks for seamless trade and exchange of
                crypto assets. Also, the white label solution can be completely
                customized to meet your business requirements. Our market
                experience and expertise in crypto business development allow us
                to meticulously design and develop your product in a
                user-centric approach to offer a simplistic and immersive
                experience for hassle-free trade and exchange the crypto assets.
                Our business development strategists and product development
                experts will support you to launch the most advanced and
                futuristic P2P crypto exchange platform instantly with our
                market-ready white label solutions
              </p>
            </RightSec8>
          </LayoutSec8>
        </Sec8>
        {/* SECTION8 END HERE */}
        {/* SECTION9 START HERE */}
        <Sec9 backgroundColor="#f2f2f2" paddingBlock="6vw">
          {/* <h2 className="sec_tit underline text-center  sec8-h2">FAQ</h2> */}
          <Faq data={FAQ} />
        </Sec9>
        {/* SECTION9 END HERE */}
        {/* IMPORT SECTION FROM DECENTRALIZE EXCHANGE */}
        <Sec10 />
        {/* SECTION END HERE */}
      </Container>
    </React.Fragment>
  );
};

export default P2pExchangeDev;
