import React from "react";
import { SecSix } from "./web2GameToWeb3GameDevelopmentComp";
import { H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section id="pricing-section1">
        <div className="pricing-table" id="pricing-tabs1">
          <div className="container">
            <div className="data table-responsive">
              <div className="section-title">
                <div className="sec_tit underline text-center mb20">
                  <H2> Web2 Vs. Web3 - A Comparision </H2>
                </div>{" "}
              </div>
              <table className="table-striped" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <th className="theme-color-bg font_sze_algn">
                      Web 2.0 Games
                    </th>
                    <th className="theme-color-bg font_sze_algn">
                      Web 3.0 Games
                    </th>
                  </tr>
                  <tr>
                    <td className="bg_color">
                      No Revenue-Generating Opportunities
                    </td>
                    <td className="bg_color">
                      Revenue-Generating Opportunities{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg_color">
                      Developers are the Ultimate Masters
                    </td>
                    <td className="bg_color">
                      Players are the Ultimate Masters{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg_color">Non-Transparent Nature</td>
                    <td className="bg_color">Transparent Nature</td>
                  </tr>
                  <tr>
                    <td className="bg_color">
                      Prone-to-Hack Security Protocols{" "}
                    </td>
                    <td className="bg_color">
                      Uncompromised Security Protocols{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg_color">
                      Older Version of the Gaming Industry
                    </td>
                    <td className="bg_color">Future of the Gaming Industry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
