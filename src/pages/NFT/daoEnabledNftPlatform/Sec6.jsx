import React from "react";
import { SecSix } from "./daoEnabledNftPlatformComp";
import { H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section id="pricing-section">
        <div className="pricing-table" id="pricing-tabs">
          <div className="container">
            <div className="data table-responsive">
              <div className="section-title">
                <div className="sec_tit underline text-center mb20">
                 <H2> How Does an NFT Marketplace Look Before and After DAO’s
                  Arrival? </H2>
                </div>{" "}
              </div>
              <table className="table-striped"
            //    style="width:100%;"
            >
                <tbody>
                  <tr>
                    <th className="theme-color-bg">Before DAOs</th>
                    <th className="theme-color-bg" id="base">
                      After DAOs
                    </th>
                  </tr>
                  <tr>
                    <td>Decisions are taken by NFT marketplace owners.</td>
                    <td>
                      Decisions are taken in collaboration with the user
                      community.
                    </td>
                  </tr>
                  <tr>
                    <td>Users cannot view the code behind the platform.</td>
                    <td>
                      Users can view the code behind the platform and add
                      changes, which will be visible.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Any individual or governmental agency can order and shut
                      down operations.
                    </td>
                    <td>
                      Shutting down the platform needs community acceptance
                      through voting.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Decisions may take time to implement due to human
                      intervention.
                    </td>
                    <td>
                      Voted decisions will be automatically executed by the
                      smart contract programs.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      The possibility of misusing power by human authority is
                      huge.
                    </td>
                    <td>
                      Here, it is impossible to misuse power by a small set of
                      individuals.
                    </td>
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
