import React from "react";
import { SecFour } from "./nftMarketplaceSolanaComp";
import { Button, H2 } from "../../../components/index";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="sec_tit text-center underline">
            <H2> What Is Solana Based NFT Marketplace Development Platform?</H2 >
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <p className="mt30 text-justify">
                Solana based NFT marketplace development platform is built on a
                unique blockchain called Solana. This blockchain amplifies
                functionalities like speed, scalability, and security of the
                marketplaces and decentralized applications. The Solana
                blockchain has the ability to process 50,000 TPS ( Transactions
                Per Second) at a speed of 400ms block times. This blockchain’s
                main purpose is to reduce network congestion and increase
                transaction speed in the NFT marketplace and it has its own
                native token called SOL.{" "}
              </p>
              <p className="mt10 text-justify">
                Network congestion has been a major hindrance for NFT
                marketplaces, as it slows down transaction speed and increases
                the gas fee. Due to these major problems, business models are
                drifting towards blockchains like Solana. We at Blockchain App
                Factory integrate this blockchain with the NFT marketplace to
                eradicate these issues. A Solana based NFT marketplace
                development platform is a very easy-to-use platform. The users
                need not be required to have high-level knowledge about smart
                contracts. The interface is designed in such a way that it
                provides the requirements of the customers with ease. The
                minting of NFTs in this marketplace takes place at a very high
                speed with minimum minting and trading costs. In this
                marketplace platform, the user can access the trading,
                performance, and transaction chart without any restrictions
                since they are automated. Solana NFT marketplace is a suitable
                solution for solving the traditional marketplace problems that
                occurred in the past. This platform provides a structure that
                can verify transactions at high speed and form an innovative
                consensus algorithm.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <img
                className="lazy  rounded-corner mt30"
                data-src="/images/solana/solana-based-nft-marketplace.webp"
                alt="Best Solana NFT Marketplace Development"
                title="Solana based NFT Marketplace Development"
                src="https://www.blockchainappfactory.com/images/solana/solana-based-nft-marketplace.webp"
              />
            </div>
          </div>
          <div className="text-center mt20">
            <div className="d-flex  justify-content-center gap-3 flex-wrap">
              <Button btnContent="Connect with Whatsapp" />
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
