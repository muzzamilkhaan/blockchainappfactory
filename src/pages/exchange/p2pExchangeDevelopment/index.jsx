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
  Button,
  Sec2,
  Content2,
  UnderLine,
  Sec3,
  Sec3CardContainer,
} from "./p2pExchangeDevComp";
import { Section } from "../../../components/sections/section";
import icons from "../../../assets/icons/index";
import Card from "../../../components/cards/Card";

const P2pExchangeDev = () => {
  return (
    <React.Fragment>
      <Container>
        {/* BANNER START HERE */}
        <Banner>
          <Sec paddingBlock="3vw">
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
                  <Button>CONNECT WITH WHATSAPP</Button>
                  <Button>TALK WITH OUR EXPERTS</Button>
                  <Button>VIEW DEMO</Button>
                </ButtonContainer>
              </Content>
              <Image>
                <img src={icons.p2p_banner} alt="" />
              </Image>
            </Layout>
          </Sec>
        </Banner>
        {/* BANNER END HERE */}
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
          <Image>
            <img src={icons.p2p_intro} alt="" />
          </Image>
        </Sec2>
        <Sec3 backgroundColor="#f2f2f2">
          <h3 class="sec_tit underline text-center sec3-h3">
            Our P2P Crypto Exchange Development Features
          </h3>
          {/* <Sec3CardContainer> */}
            <Card />
            <Card />
            <Card />
          {/* </Sec3CardContainer> */}
        </Sec3>
      </Container>
    </React.Fragment>
  );
};

export default P2pExchangeDev;
