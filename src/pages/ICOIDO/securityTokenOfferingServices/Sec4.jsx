import React from "react";

const Sec4 = () => {
  return (
    <section className="common_spacing gray-bg">
      <div className="container">
        <div className="text-center">
          <h4 className="sec_tit underline text-center">
            Types of STO(Security Token Offering) Development
          </h4>{" "}
        </div>
        <div className="types-sto">
          <div>
            {" "}
            <img src="./assets/images/icon-192.svg" alt="Equity Token" />
            <h4>Equity Token</h4>
            <p>
              An STO where each token is backed by the stock in your company so
              that the holders of your token have equal rights to your actual
              stockholders in terms of votings and dividend issuance.
            </p>
          </div>
          <div>
            {" "}
            <img
              src="./assets/images/icon-193.svg"
              alt="Reserve Assets Token"
            />
            <h4>Reserve Assets Token</h4>
            <div className="h_cnnt">
              Companies which trade in real-world commodities like Gold, Real
              Estate etc., can launch an STO through us where the tokens are
              backed by your reserve of the said assets.
            </div>
          </div>
          <div>
            {" "}
            <img  src="./assets/images/icon-194.svg" alt="Debt Token" />
            <h4>Debt Token</h4>
            <p>
              If your company would rather not tokenize your stock or reserve
              assets, you can raise funds by issuing Security Tokens with the
              promise of payback to attract debt investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
