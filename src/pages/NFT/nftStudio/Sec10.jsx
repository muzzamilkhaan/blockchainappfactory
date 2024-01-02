import React from "react";
import { SecTen } from "./nftStudioComp";
import { H2 } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <div className="pricing-table gray_bg" id="pricing-tabs">
        <div className="container">
          <div className="data table-responsive">
            <div className="section-title">
              <div className="common_h3">
                <H2 style={{ color: "#fff" }}> NFT Studio Package </H2>
              </div>
              <div className="mb40 hr" />{" "}
            </div>
            <table className="table-striped" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th style={{ width: "10%" }} className="theme-color-bg">
                    S.NO
                  </th>
                  <th
                    style={{
                      width: "30%",
                      background: "transparent",
                      color: "#000",
                    }}
                  >
                    <h3 className="btc">NFT Development</h3>
                  </th>
                  <th
                    style={{
                      width: "30%",
                      background: "transparent",
                      color: "#000",
                    }}
                  >
                    <h3 className="btc">NFT Design &amp; Development</h3>
                  </th>
                  <th
                    style={{
                      width: "30%",
                      background: "transparent",
                      color: "#000",
                    }}
                  >
                    <h3 className="btc">
                      NFT Design, Development, and Marketplace
                    </h3>
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Convert Design into NFT</td>
                  <td>Convert Design into NFT</td>
                  <td>Convert Design into NFT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Convert Design into Generative NFTs</td>
                  <td>Convert Design into Generative NFTs</td>
                  <td>Convert Design into Generative NFTs</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Upto 10,000 NFTs</td>
                  <td>Upto 10,000 NFTs</td>
                  <td>Upto 10,000 NFTs</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Design Excluded</td>
                  <td>Design Included</td>
                  <td>Design Included</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Concept Development Excluded</td>
                  <td>Concept/ Story Development Included</td>
                  <td>Concept/ Story Development Included</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Ethereum/ BSC/ Polygon</td>
                  <td>Ethereum/ BSC/ Polygon</td>
                  <td>Ethereum/ BSC/ Polygon</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Data Storage in IPFS</td>
                  <td>Data Storage in IPFS</td>
                  <td>Data Storage in IPFS</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Attributes in Smart Contract</td>
                  <td>Attributes in Smart Contract</td>
                  <td>Attributes in Smart Contract</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Chain Link VRF</td>
                  <td>Chain Link VRF</td>
                  <td>Chain Link VRF</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Landing Page Excluded</td>
                  <td>Landing Page Included</td>
                  <td>Landing Page Included</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Unique Identity for Assets</td>
                  <td>Unique Identity for Assets </td>
                  <td>Unique Identity for Assets </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Mint </td>
                  <td>Mint + Listing in Opensea </td>
                  <td>Mint + Own NFT Marketplace</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>NIL</td>
                  <td>Opensea API Integration</td>
                  <td>Own Marketplace</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Marketing Services Excluded</td>
                  <td>Marketing Services Excluded</td>
                  <td>NFT Marketing Service Included</td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <div className="text-center">
                      {" "}
                      <a
                        className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                        type="button"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <span>BUY NOW</span>
                      </a>{" "}
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      {" "}
                      <a
                        className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                        type="button"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <span>BUY NOW</span>
                      </a>{" "}
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      {" "}
                      <a
                        className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                        type="button"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <span>BUY NOW</span>
                      </a>{" "}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt20 text-center">
            {" "}
            <a
              href="#newsletter-form-sec"
              className="nectar-button medium regular accent-color regular-button gra1"
            >
              <span>Talk with our Experts</span>
            </a>{" "}
          </div>
        </div>
      </div>
    </SecTen>
  );
};

export default Sec10;
