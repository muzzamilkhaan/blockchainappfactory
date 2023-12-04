import React from 'react'
import WeSpotlightedIn from '../../../components/shared/WeSpotlightedIn'

function Sec2() {
  return (
    <section id="pricing-section1" className="">
  <div className="pricing-table" id="pricing-tabs1">
    <div className="container">
      <div className="data table-responsive">
        <div className="section-title">
          <h2 className="sec_tit underline text-center mb20">
            Building an NFT Marketplace from Scratch Vs from a Whitelabel
            Solution
          </h2>{" "}
        </div>
        <table
          className="table-striped"
          style={{ width: "100%", background: "#fff" }}
        >
          <tbody>
            <tr>
              <th className="theme-color-bg font_sze_algn">Factors</th>
              <th className="theme-color-bg font_sze_algn">
                Building NFT Marketplace from Scratch
              </th>
              <th className="theme-color-bg font_sze_algn">
                Whitelabel NFT Marketplace Solution
              </th>
            </tr>
            <tr>
              <td className=" ">Process</td>
              <td className=" ">
                All the steps involved in developing the platform are executed.{" "}
              </td>
              <td className=" ">
                The development process here involves a few simple steps.{" "}
              </td>
            </tr>
            <tr>
              <td className=" ">Time Taken</td>
              <td className=" ">
                The time taken for the final product is comparatively high.
              </td>
              <td className=" ">
                The time taken for the final product is comparatively low.{" "}
              </td>
            </tr>
            <tr>
              <td className=" ">Cost</td>
              <td className=" ">
                The cost of developing from scratch is comparatively high.
              </td>
              <td className=" ">
                The cost of using a Whitelabel solution is comparatively low.
              </td>
            </tr>
            <tr>
              <td className=" ">Presence of Errors</td>
              <td className=" ">
                The platform might contain unprecedented bugs even after launch.
              </td>
              <td className=" ">
                The platform would not have errors as it was extensively tested
                beforehand.{" "}
              </td>
            </tr>
            <tr>
              <td className=" ">Customizability</td>
              <td className=" ">
                You have the independence to decide on the end-to-end features.
              </td>
              <td className=" ">
                You can only customize the user-end features of the Whitelabel
                solution.
              </td>
            </tr>
            <tr>
              <td className=" ">Resultant Application</td>
              <td className=" ">
                The resulting NFT marketplace platform will be one-of-a-kind.{" "}
              </td>
              <td className=" ">
                The platform will be similar to any of the popular marketplace
                platforms.{" "}
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

export default Sec2