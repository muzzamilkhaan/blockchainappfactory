import React, { lazy } from "react";
const CryptocurrencyDevelopment = lazy(() =>
  import("../pages/crypto/cryptocurrencyDevelopment/CryptocurrencyDevelopment")
);
const TokenDevelopment = lazy(() =>
  import("../pages/crypto/tokenDevelopment/TokenDevelopment")
);
const EthereumTokenDevelopment = lazy(() =>
  import("../pages/crypto/ethereumTokenDevelopment/EthereumTokenDevelopment")
);
const TronTokenDevelopment = lazy(() =>
  import("../pages/crypto/tronTokenDevelopment/TronTokenDevelopment")
);
const BRC20TokenDevelopment = lazy(() =>
  import("../pages/crypto/BRC20TokenDevelopment/BRC20TokenDevelopment")
);
const SRC20TokenDevelopment = lazy(() =>
  import("../pages/crypto/SRC20TokenDevelopment/SRC20TokenDevelopment")
);
const BEP20TokenDevelopment = lazy(() =>
  import("../pages/crypto/BEP20TokenDevelopment/BEP20TokenDevelopment")
);
const StableCoinDevelopment = lazy(() =>
  import("../pages/crypto/stableCoinDevelopment/StableCoinDevelopment")
);
const WhitePaperDevelopment = lazy(() =>
  import("../pages/crypto/whitePaperDevelopment/WhitePaperDevelopment")
);
const CryptocurrencyMLMSoftware = lazy(() =>
  import("../pages/crypto/cryptocurrencyMLMSoftware/CryptocurrencyMLMSoftware")
);
const ArtTokenization = lazy(() =>
  import("../pages/crypto/artTokenization/ArtTokenization")
);
const AssetTokenization = lazy(() =>
  import("../pages/crypto/assetTokenization/AssetTokenization")
);
const RealEstateTokenization = lazy(() =>
  import("../pages/crypto/realEstateTokenization/RealEstateTokenization")
);
const TokenizationPlatformDevelopment = lazy(() =>
  import(
    "../pages/crypto/tokenizationPlatformDevelopment/TokenizationPlatformDevelopment"
  )
);
const RealEstateTokenizationEssentialGuide = lazy(() =>
  import(
    "../pages/crypto/realEstateTokenizationEssentialGuide/RealEstateTokenizationEssentialGuide"
  )
);
const CryptoETFDevelopment = lazy(() =>
  import("../pages/crypto/cryptoETFDevelopment/CryptoETFDevelopment")
);
const HowToLaunchCryptoToken = lazy(() =>
  import("../pages/crypto/howToLaunchCryptoToken/HowToLaunchCryptoToken")
);
const CryptoPredictionMarketPlatform = lazy(() =>
  import(
    "../pages/crypto/cryptoPredictionMarketPlatform/CryptoPredictionMarketPlatform"
  )
);
const DecentralizedSportsBettingPlatform = lazy(() =>
  import(
    "../pages/crypto/decentralizedSportsBettingPlatform/DecentralizedSportsBettingPlatform"
  )
);

const CryptoRoutes = (headerBgColor, toggleHeaderBgColor, linkColor) => [
  {
    path: "/cryptocurrency-development",
    element: <CryptocurrencyDevelopment />,
  },
  {
    path: "/token-development",
    element: <TokenDevelopment />,
  },
  {
    path: "/ethereum-token-development",
    element: <EthereumTokenDevelopment />,
  },
  {
    path: "/tron-token-development",
    element: <TronTokenDevelopment />,
  },
  {
    path: "/brc-20-token-development",
    element: <BRC20TokenDevelopment />,
  },
  {
    path: "/src-20-token-development",
    element: <SRC20TokenDevelopment />,
  },
  {
    path: "/binance-smart-chain-bep20-like-token-development",
    element: <BEP20TokenDevelopment />,
  },
  {
    path: "/stable-coin-development",
    element: <StableCoinDevelopment />,
  },
  {
    path: "/white-paper-development",
    element: <WhitePaperDevelopment />,
  },
  {
    path: "/cryptocurrency-mlm-software-development",
    element: <CryptocurrencyMLMSoftware />,
  },
  {
    path: "/art-tokenization",
    element: <ArtTokenization />,
  },
  {
    path: "/asset-tokenization",
    element: <AssetTokenization />,
  },
  {
    path: "/real-estate-tokenization",
    element: <RealEstateTokenization />,
  },
  {
    path: "/tokenization-platform-development",
    element: <TokenizationPlatformDevelopment />,
  },
  {
    path: "/real-estate-tokenization-essential-guide",
    element: <RealEstateTokenizationEssentialGuide />,
  },
  {
    path: "/crypto-etf-development",
    element: <CryptoETFDevelopment />,
  },
  {
    path: "/how-to-launch-crypto-token",
    element: (
      <HowToLaunchCryptoToken
        headerBgColor={headerBgColor}
        toggleHeaderBgColor={toggleHeaderBgColor}
        linkColor={linkColor}
      />
    ),
  },
  {
    path: "/crypto-prediction-market-platform",
    element: <CryptoPredictionMarketPlatform />,
  },
  {
    path: "/decentralized-sports-betting-platform",
    element: <DecentralizedSportsBettingPlatform />,
  },
];

export default CryptoRoutes;
