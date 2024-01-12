import React from 'react'

const Sec9 = () => {
  return (
    <section
    className="table common_spacing gray_bg"
    style={{ overflowX: "scroll" }}
  >
    <div className="container">
      <div className="section-title text-center">
        <div className="sec_tit">
          <h2 className="font-wei underline text-center sec_tit">
            {" "}
            Comparison chart of IDOs, IEOs, STOs and ICOs
          </h2>
        </div>
      </div>
      <div className="row mt40">
        <div className="col-md-12">
          <table
            className="comp-table"
            width="80%"
            cellPadding={10}
            style={{ margin: "0 auto", boxShadow: "5px 5px 16px 8px #00000024" }}
          >
            <tbody>
              <tr>
                <th>
                  <h3>Initial DEX offering(IDO)</h3>
                </th>
                <th>
                  <h3>Initial Exchange Offering(IEO)</h3>
                </th>
                <th>
                  <h3>Security Token Offering(STO)</h3>
                </th>
                <th>
                  <h3>Initial Coin Offering (ICO)</h3>
                </th>
              </tr>
              <tr>
                <td>decentralized exchange</td>
                <td>Centralised environment</td>
                <td>Decentralized Environment</td>
                <td>decentralized</td>
              </tr>
              <tr>
                <td>Representation of Digital Assets</td>
                <td>Direct Exchange</td>
                <td>Representation of physical Assets</td>
                <td>Globally sold</td>
              </tr>
              <tr>
                <td>No exchange fee</td>
                <td>Includes Exchange Fee</td>
                <td>Profit-sharing</td>
                <td>No intermediaries</td>
              </tr>
              <tr>
                <td>Efficient Listing</td>
                <td>Expensive listing</td>
                <td>Buy-Back Rights</td>
                <td>Liquidity premium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec9
