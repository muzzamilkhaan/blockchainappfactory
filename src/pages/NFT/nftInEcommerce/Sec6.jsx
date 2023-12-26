import React from "react";
import { SecSix } from "./nftInEcommerceComp";
import { H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section className="common_spacing">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit">
              <H2> NFT in E-commerce: Tech Beyond trade </H2>
            </div>
          </div>
          <p
            className="text-center"
            style={{ padding: "0px 20px" }}
          >
            The NFT in E-commerce is more futuristic. With NFT onboard, the
            Ecommerce platform can make several changes in its workflow, and
            more than that, they even have the efficiency to increase the
            productivity and fortune of the E-commerce platform at a large rate.
            Here are some possible changes that can be done when NFT is brought
            into the E-commerce platform,
          </p>
          <div className="row no-padding">
            <div className="col-md-6 p-0 ">
              <div className="pad red">
                <div className="section-title text-left pt20 mb10">
                  <h3
                    className="common_h3"
                    style={{ color: "#fff", padding: "0px 40px" }}
                  >
                    Redeem with NFT
                  </h3>{" "}
                </div>
                <p
                  className="text-left"
                  style={{ padding: "10px 40px", color: "#fff" }}
                >
                  The Non-fungible token in E-commerce can be used as a
                  redeemable token. To make it clear, WIth NFT, the user can
                  just directly own the product that is yet to be launched in
                  the market by redeeming their NFT. For example, the User owns
                  the NFT of an upcoming mobile phone, which is worth about $
                  1000$. With the NFT, the user can redeem this token for the
                  phone that is to be launched soon,which acts like a
                  pre-booking and the respective NFT will possess its unique
                  value too. And this will increase the sale of the NFT as well
                  as the sale of the products on the E-commerce platform.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-0 mobile">
              <div className="pad">
                <div className="section-title text-left pt20 mb10">
                  <h3
                    className="common_h3"
                    style={{ color: "#fff", padding: "0px 40px" }}
                  >
                    Supply Chained with NFT
                  </h3>{" "}
                </div>
                <p
                  className="text-left"
                  style={{ padding: "10px 40px", color: "#fff" }}
                >
                  Another major revolution that can happen in the E-commerce
                  platform when NFT fusion is the drastic change in the supply
                  chain. Every day the internet is spitting out many online
                  delivery-related issues, and every day a customer is getting a
                  product which they never ordered. So when NFT is onboard, the
                  Supply chain can be chained with NFT, where the NFT uniqueness
                  will aid in delivering the right product to the right
                  customer. WIth NFT, 100% traceability and accuracy can be
                  ensured very easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
