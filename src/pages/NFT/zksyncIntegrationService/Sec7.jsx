import React from "react";
import { SecSeven } from "./ZksyncIntegrationServiceComp";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className=" ">
            <h2 className="sec_tit underline text-center">
              Ingenious Elements of the zkSync 2.0 Network
            </h2>
          </div>
          <div className="row mt20">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/zksync/icons/transaction.webp"
                    src="https://www.blockchainappfactory.com/images/zksync/icons/transaction.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong
                    // style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      Transactions{" "}
                    </strong>{" "}
                    Transactions in zkSync 2.0 are grouped into batches and
                    verified on-chain in a single transaction using the
                    decentralized zero-knowledge roll-up mechanism.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/zksync/icons/cubes.webp"
                    src="https://www.blockchainappfactory.com/images/zksync/icons/cubes.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong
                    //  style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      Blocks{" "}
                    </strong>
                    Blocks in the zkSync 2.0 network are essentially transaction
                    entries that are grouped in their order of creation into
                    Ethereum L1 blocks called batches.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/zksync/icons/contract.webp"
                    src="https://www.blockchainappfactory.com/images/zksync/icons/contract.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong
                    // style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      System Contracts
                    </strong>
                    The L2 solution uses system contracts that offer exclusive
                    access and purposes to users, ensuring that only a single
                    payment is made when these are called.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/zksync/icons/account.webp"
                    src="https://www.blockchainappfactory.com/images/zksync/icons/account.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong
                    //  style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      Account Abstraction
                    </strong>
                    Accounts in the zkSync 2.0 network can initiate transactions
                    and execute pre-defined logic within a single protocol
                    without depending on external units.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/zksync/icons/network.webp"
                    src="https://www.blockchainappfactory.com/images/zksync/icons/network.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong
                    // style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      Ergs{" "}
                    </strong>
                    Ergs is the “gas” of the zkSync 2.0 solution that varies
                    according to the changes undergone by L1 networks, though
                    minimal due to the usage of zkEVM.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/zksync/icons/interoperability.webp"
                    src="https://www.blockchainappfactory.com/images/zksync/icons/interoperability.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong
                    // style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      Interoperability
                    </strong>
                    Execution of code can be performed seamlessly between L1 and
                    L2 solutions using censorship-resistant priority queues even
                    if the operator is unavailable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
