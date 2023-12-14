import React from "react";
import { SecFour } from "./nftLoyaltyProgramComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="align-center">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2>
                We Built an NFT Loyalty Program for Flipkart – A Top E-commerce
                Brand
              </H2>
            </div>
            <p className="text-center">
              We have built an NFT loyalty rewards platform for Flipkart, a
              renowned e-commerce brand to support its efforts to embrace Web3
              technology.{" "}
            </p>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="parent-container">
                <div className="leftImg">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/flipkart.webp"
                    alt=""
                  />
                </div>
                <div className="right">
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Under the program, brands list themselves in the exclusive
                      NFT loyalty platform “Firedrops” and assign tasks to
                      users.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      People wishing to be part of the NFT loyalty program can
                      enter a waitlist that gradually lets them into the
                      platform. users.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Users entering the Web3 loyalty program need to set up
                      their profiles that can yield them rewards in the form of
                      points.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      They need to complete challenges from brands to level up
                      their profiles, which can entitle them to various
                      benefits.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      These rewards include loyalty points recorded on-chain,
                      discount vouchers, and even physical gifts from the brand.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Users can utilize these digital vouchers and coupons to
                      purchase the brand’s products from the Flipkart
                      application.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      They can also wish to list these vouchers/coupons in the
                      in-app marketplace to sell them to interested customers.
                    </li>
                  </ul>
                  <hr />
                  <p>
                    <strong>
                      {" "}
                      To build the Firedrops platform, the following
                      technological stacks were used.{" "}
                    </strong>
                  </p>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb20">
                    <strong>Blockchain</strong>
                    <br />{" "}
                    <div className="icon">
                      <img
                        style={{ padding: "10px" }}
                        className=""
                        data-src="images/nft-loyalty-program/icons/polygon.webp"
                        src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/polygon.webp"
                      />
                    </div>{" "}
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb20">
                    <strong>Front-end</strong>
                    <br />{" "}
                    <div className="icon">
                      <img
                        style={{ padding: "10px" }}
                        className=""
                        data-src="images/nft-loyalty-program/icons/next-js.webp"
                        src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/next-js.webp"
                      />
                    </div>{" "}
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb10">
                    <strong>Back-end</strong>
                    <br />{" "}
                    <div className="icon">
                      <img
                        style={{ padding: "10px" }}
                        className=""
                        data-src="images/nft-loyalty-program/icons/ruby.webp"
                        src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/ruby.webp"
                      />
                    </div>{" "}
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb10">
                    <strong>Database</strong>
                    <br />{" "}
                    <div className="icon">
                      <img
                        style={{ padding: "10px" }}
                        className=""
                        data-src="images/nft-loyalty-program/icons/postgresql.webp"
                        src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/postgresql.webp"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <ul>
                <li>
                  <img
                    className=""
                    data-src="images/nft-loyalty-program/flipkart.webp"
                    alt=" "
                    title=" "
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/flipkart.webp"
                  />
                </li>
                <li>
                  <div>
                    <ul>
                      <li>
                        <p>
                          Under the program, brands list themselves in the
                          exclusive NFT loyalty platform “Firedrops” and assign
                          tasks to users.
                        </p>
                      </li>
                      <li>
                        <p>
                          People wishing to be part of the NFT loyalty program
                          can enter a waitlist that gradually lets them into the
                          platform.
                        </p>
                      </li>
                      <li>
                        <p>
                          Users entering the Web3 loyalty program need to set up
                          their profiles that can yield them rewards in the form
                          of points.
                        </p>
                      </li>
                      <li>
                        <p>
                          They need to complete challenges from brands to level
                          up their profiles, which can entitle them to various
                          benefits.
                        </p>
                      </li>
                      <li>
                        <p>
                          These rewards include loyalty points recorded
                          on-chain, discount vouchers, and even physical gifts
                          from the brand.
                        </p>
                      </li>
                      <li>
                        <p>
                          Users can utilize these digital vouchers and coupons
                          to purchase the brand’s products from the Flipkart
                          application.
                        </p>
                      </li>
                      <li>
                        <p>
                          They can also wish to list these vouchers/coupons in
                          the in-app marketplace to sell them to interested
                          customers.
                        </p>
                      </li>
                    </ul>
                    <hr />
                    <p>
                      <strong>
                        {" "}
                        To build the Firedrops platform, the following
                        technological stacks were used.{" "}
                      </strong>
                    </p>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb20">
                      <strong>Blockchain</strong>
                      <br />{" "}
                      <div className="icon">
                        <img
                          //   style="padding: 10px;"
                          className=""
                          data-src="images/nft-loyalty-program/icons/polygon.webp"
                          src="images/nft-loyalty-program/icons/polygon.webp"
                        />
                      </div>{" "}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb20">
                      <strong>Front-end</strong>
                      <br />{" "}
                      <div className="icon">
                        <img
                          //   style="padding: 10px;"
                          className=""
                          data-src="images/nft-loyalty-program/icons/next-js.webp"
                          src="images/nft-loyalty-program/icons/next-js.webp"
                        />
                      </div>{" "}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb10">
                      <strong>Back-end</strong>
                      <br />{" "}
                      <div className="icon">
                        <img
                          //   style="padding: 10px;"
                          className=""
                          data-src="images/nft-loyalty-program/icons/ruby.webp"
                          src="images/nft-loyalty-program/icons/ruby.webp"
                        />
                      </div>{" "}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center gray_bg mb10">
                      <strong>Database</strong>
                      <br />{" "}
                      <div className="icon">
                        <img
                          //   style="padding: 10px;"
                          className=""
                          data-src="images/nft-loyalty-program/icons/postgresql.webp"
                          src="images/nft-loyalty-program/icons/postgresql.webp"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
