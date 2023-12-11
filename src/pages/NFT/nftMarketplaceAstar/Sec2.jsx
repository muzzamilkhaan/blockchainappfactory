import React from "react";
import { SecTwo } from "./nftMarketplaceAstarComp";
const Sec2 = () => {
  return (
    <>
      <SecTwo>
        <div className="common_spacing">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center defiimg">
                {" "}
                <img
                  className="rounded-border"
                  data-src="/images/nft-marketplace-development-on-astar/astar-abt1.webp"
                  src="https://www.blockchainappfactory.com/images/nft-marketplace-development-on-astar/astar-abt1.webp"
                />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="section-title how-tit">
                  <h2 className="section-title underline mb20 text-left font-wei">
                    Astar (Formerly Plasma) – A Parachain that Connects Various
                    Networks
                  </h2>{" "}
                </div>
                <p className="mt-20 text-justify">
                  Astar, formerly Plasma, is a parachain network on the Polkadot
                  main chain after gaining substantial traction on the parachain
                  auction on Polkadot. The Astar blockchain supports various
                  networks, including Ethereum Virtual Machine (EVM),
                  WebAssembly (WASM), Layer2, and different main-net chains such
                  as Ethereum and Cosmos. Astar has been built to overcome the
                  issues regarding supporting smart contracts on the Polkadot’s
                  Relaychain. The platform has been the result of many years of
                  efforts to overcome the inabilities of Polkadot and integrate
                  a wide array of networks to frame an ecosystem. The platform
                  uses $ASTR as its native token. Astar has its own canary
                  network called Shiden, which runs as a parachain on the Kusama
                  blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SecTwo>
    </>
  );
};

export default Sec2;
