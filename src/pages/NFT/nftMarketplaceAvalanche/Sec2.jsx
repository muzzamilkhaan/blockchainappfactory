import React from "react";
import { SecTwo } from "./nftMarketplaceAvalancheComp";

const Sec2 = () => {
  return (
    <SecTwo>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  pull-left text-center defiimg">
              <img
                className=""
                src="https://www.blockchainappfactory.com/images/avalanche/ava-abt.webp"
              />{" "}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="section-title">
                <h2 className="section-title underline mb20 text-left font-wei">
                  Why Start an NFT Marketplace in Avalanche?
                </h2>
              </div>
              <p className="mt-30 text-justify">
                Avalanche is a blockchain network based on high-performance,
                scalability, customizability, and security. The network also has
                its own native cryptocurrency, and its complete functionality is
                based on smart contracts that enable efficient operations. The
                platform targets three broader use cases, namely – Building
                blockchains based on applications that are privately
                (Permissioned) and publicly (Permissionless) deployed, enabling
                creation and launch of decentralized applications (Dapps), and
                facilitating the development of smart assets that are
                customizable in different means. These features ensure that an
                NFT marketplace built on the Avalanche can operate without
                compromising any important element of blockchains, which is not
                the case in most existing blockchain networks. As NFTs are
                making waves in today’s world, building an NFT marketplace on a
                highly efficient blockchain like Avalanche would boost your
                sales as the network is projected to grow in the coming years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
