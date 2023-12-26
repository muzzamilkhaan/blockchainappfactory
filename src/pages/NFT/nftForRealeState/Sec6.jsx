import React from "react";
import { SecSix } from "./nftForRealeStateComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <img
                className="img-responsive rounded-border"
                data-src="images/nft_real/real-estate-03.webp"
                src="https://www.blockchainappfactory.com/images/nft_real/real-estate-03.webp"
              />{" "}
            </div>
            <div className="col-lg-6">
              <div className="sec_tit underline text-left">
                <H2> Decentralized NFT Real Estate Marketplace</H2>
              </div>
              <p className="mt10 mb10 text-justify">
                Decentralization is at the core of the blockchain world, and it
                also includes NFT real estate. A decentralized NFT real estate
                marketplace would allow peer-to-peer (P2P) trading of real
                estate without the involvement of third parties. Lengthy and
                slow paperwork would also be eliminated since the process
                already involves smart contracts. Such an NFT real estate
                marketplace saves time and money for both buyers and sellers and
                makes real estate an easier option for investment.{" "}
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3 mt-30">
                <Button
                  btnContent="Connect with Whatsapp"
                  target="_blank"
                  to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                />
                <Button btnContent="Talk with our Experts" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
