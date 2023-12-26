import React from "react";
import { SecNine } from "./nftAggregatorMarketplaceDevelopmentComp";

const Sec9 = () => {
  return (
    <SecNine>
      <section id="pricing-section1">
        <div className="pricing-table" id="pricing-tabs1">
          <div className="container">
            <div className="data table-responsive">
              <table
                className="table-striped"
                // style="width:100%;"
              >
                <tbody>
                  <tr>
                    <th className="theme-color-bg font_sze_algn text-center">
                      <h3 className="h3">
                        Benefits for Business <br /> running NFT Aggregator
                        Platform
                      </h3>
                    </th>
                    <th className="theme-color-bg font_sze_algn text-center">
                      <h3 className="h3">
                        Advantages for Users of an
                        <br /> NFT Aggregator Platform
                      </h3>
                    </th>
                  </tr>
                  <tr>
                    <td className="bg_color">
                      Businesses can earn revenues quickly without having to
                      bear the hassles of running a full-fledged NFT marketplace
                      business.
                    </td>
                    <td className="bg_color">
                      Users of an aggregator NFT marketplace can purchase NFTs
                      by comparing the costs on different marketplaces without
                      logging into individual marketplaces.
                    </td>
                  </tr>
                  <tr>
                    <td className="bg_color">
                      Ventures can attract the broader NFT community by staying
                      open with network choices when running an NFT marketplace
                      aggregator.
                    </td>
                    <td className="bg_color">
                      One can perform DeFi operations, such as staking on the
                      aggregator, should the platform offer support for
                      extensive decentralized finance elements.
                    </td>
                  </tr>
                  <tr>
                    <td className="bg_color">
                      A company can quickly delve deeper into the NFT or DeFi
                      segment using such a platform that uses both elements
                      based on its roadmap.
                    </td>
                    <td className="bg_color">
                      Purchasing multiple NFT items in a single transaction is
                      made possible through such a platform, as it is not bound
                      to a single marketplace venture.{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </SecNine>
  );
};

export default Sec9;
