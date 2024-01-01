import React from "react";
import { SecFive } from "./nftWalletDevelopmentComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section
        id="service"
        className="service-area section-big common_spacing gray_bg"
      >
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2> Wallets Varied in ClassNaclassNameification </H2>
            </div>
          </div>
          <p className="text-center">
            There are various types of NFT wallets in the crypto space. Based on
            the needs of the people majorly there are three main categories. And
            the wallets are categorizations involving various processes such as
            their market demand, the traffic they face, and the utilization rate
            they have in the services. The major categories are
          </p>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-box">
                {" "}
                <img src="https://www.blockchainappfactory.com/images/nft_wallet/icon/wallet.webp" alt="" />
                <h3>Decentralized Wallet</h3>
                <p>
                  The decentralized wallets are more privacy concerned and have
                  more automated processes than manual interference. To say in
                  precise detail that the Decentralized wallets are more into
                  making the crypto world more secure for the users. The
                  transactions made the asset staking quantity, or any other
                  information regarding the user or user asset will be
                  concealed. Only the user and the smart contracts can have
                  access to that information.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-box">
                {" "}
                <img src="https://www.blockchainappfactory.com/images/nft_wallet/icon/wallet-1.webp" alt="" />
                <h3>Centralized Wallet</h3>
                <p>
                  The centralized wallets will have a protocol that constantly
                  monitors the flow of the transactions, and Here the
                  centralized wallets are more preferred by the people who wish
                  to have authority over them. To control and monitor. Most
                  people from the world have more concerned about accessing the
                  data or information. But the centralized wallets will make the
                  human-based interaction model that helps the programs and
                  autonomous body to stay unbiased.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-box">
                {" "}
                <img src="https://www.blockchainappfactory.com/images/nft_wallet/icon/wallet-2.webp" alt="" />
                <h3>Hybrid wallet</h3>
                <p>
                  Hybrid wallets are a combination of both centralized wallets
                  and decentralized wallets. Where the advantages and perks of
                  both the system will be filtered and combined to form one
                  exclusive wallet. The Hybrid wallets have all the most
                  advanced features that include keyless authentication, where
                  the need for a private key becomes void. The authentication is
                  done via various other advanced techs that are evolving now in
                  the crypto space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
