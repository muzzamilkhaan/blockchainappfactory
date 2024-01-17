import React, { lazy } from "react";
const CryptocurrencyExchangeSoftware = lazy(() =>
  import(
    "../pages/exchange/cryptocurrencyExchangeSoftware/CryptocurrencyExchangeSoftware"
  )
);
const WhiteLabelCryptocurrencyExchangeSoftwareDevelopment = lazy(() =>
  import(
    "../pages/exchange/whiteLabelCryptocurrencyExchangeSoftwareDevelopment/WhiteLabelCryptocurrencyExchangeSoftwareDevelopment"
  )
);
const DecentralizedExchangeDevelopment = lazy(() =>
  import(
    "../pages/exchange/decentralizedExchangeDevelopment/DecentralizedExchangeDevelopment"
  )
);
const P2pExchangeDevComp = lazy(() =>
  import("../pages/exchange/p2pExchangeDevelopment/p2pExchangeDevComp")
);

const ExchangeRoutes = (headerBgColor, toggleHeaderBgColor, linkColor) => [
  {
    path: "/cryptocurrency-exchange-software",
    element: <CryptocurrencyExchangeSoftware />,
  },
  {
    path: "/white-label-cryptocurrency-exchange-software-development",
    element: <WhiteLabelCryptocurrencyExchangeSoftwareDevelopment />,
  },
  {
    path: "/p2p-exchange-development",
    element: <P2pExchangeDevComp />,
  },
  {
    path: "/decentralized-exchange-development",
    element: <DecentralizedExchangeDevelopment />,
  },
];

export default ExchangeRoutes;
