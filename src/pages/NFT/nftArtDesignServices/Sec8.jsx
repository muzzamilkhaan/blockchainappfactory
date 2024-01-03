import React from "react";
import { SecEight } from "./nftArtDesignServicesComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="common_spacing gray_bg">
        <div className="pricing-table" id="pricing-tabs">
          <div className="container">
            <div className="data">
              <div className="section-title">
                <div className="sec_tit underline text-center">
                  {" "}
                  <H2> NFT Art Design Packages </H2>
                </div>{" "}
              </div>
              <p>
                Our NFT art design services are aimed to be accessible to all
                kinds of businesses. Whether you’re an individual creator,
                startup, enterprise, or brand – everyone can tap into our NFT
                art design services without a second thought.{" "}
              </p>
              <div className="accordion" id="accordion2">
                <table
                  className="table-striped"
                  style={{ width: "100%" }}
                  //  style="width:100%;"
                >
                  {/* <tbody> </tbody> */}
                  <thead>
                    <tr className="pr_pack">
                      <th rowSpan={1}>Packages</th>
                      <th>Basic</th>
                      <th>Premium</th>
                      <th>Elite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Number of NFTs</td>
                      <td>1,000</td>
                      <td>5,000</td>
                      <td>10,000</td>
                    </tr>
                    <tr>
                      <td>Base Character</td>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Attributes</td>
                      <td>100</td>
                      <td>120</td>
                      <td>160</td>
                    </tr>
                    <tr>
                      <td>Legendary Traits</td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/no.webp" />
                      </td>
                      <td>5</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Variations</td>
                      <td>900</td>
                      <td>4,880</td>
                      <td>9,840</td>
                    </tr>
                    <tr>
                      <td>Character Type</td>
                      <td>2D</td>
                      <td>2D/3D</td>
                      <td>2D/3D</td>
                    </tr>
                    <tr>
                      <td>Animations</td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                    </tr>
                    <tr>
                      <td>Storyboard Creation</td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                    </tr>
                    <tr>
                      <td>Minting Services</td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                    </tr>
                    <tr>
                      <td>On-Project Deployment</td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                    </tr>
                    <tr>
                      <td>Listing Assistance</td>
                      <td>1-2 Marketplaces</td>
                      <td>3-5 Marketplaces</td>
                      <td>6-10 Marketplaces</td>
                    </tr>
                    <tr>
                      <td>Source Files</td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                      <td>
                        <img src="https://www.blockchainappfactory.com/images/yes.webp" />
                      </td>
                    </tr>
                    <tr>
                      <td>Revisions</td>
                      <td>Limited</td>
                      <td>Limited</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Updates</td>
                      <td>Weekly/Monthly</td>
                      <td>Weekly/Monthly</td>
                      <td>Daily/Weekly/Monthly</td>
                    </tr>
                    <tr>
                      <td
                        style={{ padding: "30px 0" }}
                        // style="padding:30px 0;"
                      >
                        {" "}
                      </td>
                      <td>
                        <a
                          type="button"
                          className=""
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Purchase Now!
                        </a>
                      </td>
                      <td>
                        <a
                          type="button"
                          className=""
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Purchase Now!
                        </a>
                      </td>
                      <td>
                        <a
                          type="button"
                          className=""
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Purchase Now!
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecEight>
  );
};

export default Sec8;
