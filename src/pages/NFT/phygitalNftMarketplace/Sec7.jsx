import React from "react";
import { SecSeven } from "./phygitalNftMarketplaceComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="common_spacing ">
        <div className="section-title text-center">
          <div className="title-th sec_tit underline">
            <H2> Benefits Of Our Phygital NFT Marketplace </H2>
          </div>{" "}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox2 pink">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-globe"></i>
                  </span>
                </div>
                <h3 className="title">Transparency in Trusting</h3>
                <p className="description">
                  Due to the nature of phygital NFTs where blockchains are
                  involved, information is transparent, ensuring that customers
                  trust brands more.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox2 pink">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-globe"></i>
                  </span>
                </div>
                <h3 className="title">Brand Protection</h3>
                <p className="description">
                  Duplication has been a well-known problem among brands, and
                  phygital NFTs can aid buyers in identifying real products from
                  brands.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox2 pink">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-globe"></i>
                  </span>
                </div>
                <h3 className="title">Item Tracking</h3>
                <p className="description">
                  As blockchains record every transaction of a phygital NFT,
                  tracking its origins becomes easy for customers wishing to
                  know behind-the-scenes content.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox2 pink">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-globe"></i>
                  </span>
                </div>
                <h3 className="title">Upcycling Management</h3>
                <p className="description">
                  As the world becomes environmentally-conscious, phygital NFTs’
                  history can help businesses devise better plans for upcycling
                  used products from users.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox2 pink">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-globe"></i>
                  </span>
                </div>
                <h3 className="title">Royalty Revenue</h3>
                <p className="description">
                  Phygital NFT marketplaces can allow digital tokens with
                  royalty policies, which provide proportions in secondary sales
                  to the original owner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
