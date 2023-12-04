import React from 'react'

function Sec5() {
  return (
    <section id="pricing-section1" style={{ paddingTop: 50 }}>
    <div className="pricing-table" id="pricing-tabs1">
      <div className="container">
        <div className="data table-responsive">
          <div className="section-title">
            <h3 className="sec_tit underline text-center mb20">
              Pre-ICO Vs. Post-ICO Marketing – What Do We Bring?
            </h3>{" "}
          </div>
          <table className="table-striped">
            <tbody>
              <tr>
                <th className="theme-color-bg font_sze_algn">
                  {" "}
                  Pre-ICO Marketing{" "}
                </th>
                <th className="theme-color-bg font_sze_algn">
                  {" "}
                  Post-ICO Marketing{" "}
                </th>
              </tr>
              <tr>
                <td className="bg_color">
                  Pre-ICO marketing focuses on generating buzz around a project
                  before launch.{" "}
                </td>
                <td className="bg_color">
                  Post-ICO marketing focuses on having higher engagement around
                  the project after launch.
                </td>
              </tr>
              <tr>
                <td className="bg_color">
                  The target audience here is potential investors.
                </td>
                <td className="bg_color">
                  The target audience here is current ICO token holders.{" "}
                </td>
              </tr>
              <tr>
                <td className="bg_color">
                  The message delivered focuses on the project’s missions and
                  vision.
                </td>
                <td className="bg_color">
                  The message delivered focuses on fulfilling the project’s
                  promises.
                </td>
              </tr>
              <tr>
                <td className="bg_color" style={{ textAlign: "left" }}>
                  <strong> Strategies used include:</strong>
                  <ul>
                    <li>Whitepaper Creation</li>
                    <li>Website Design</li>
                    <li>Social Media Promotions</li>
                    <li>Community Building</li>
                    <li>Influencer Marketing</li>
                    <li>Press Releases</li>
                  </ul>
                </td>
                <td className="bg_color" style={{ textAlign: "left" }}>
                  <strong> Strategies used include:</strong>
                  <ul>
                    <li>Continuous Communication</li>
                    <li>User Education</li>
                    <li>In-platform Innovation</li>
                    <li>Community Participation</li>
                    <li>Focusing Community Growth</li>
                    <li>Strong Representative Networks</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec5