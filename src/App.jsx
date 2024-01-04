import React, { Suspense, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./vender-new.css";
import "./mystyle.css";
import "./index.css";
import "./inlineStyle.css";
import "./main.css";
import "./cryptoCurrency.css";
// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.css";
import CreateYourOwnTokenAndCoin from "./components/shared/CreateYourOwnTokenAndCoin";
import Header from "./headerFooter/Header";
import P2pExchangeDev from "./pages/exchange/p2pExchangeDevelopment";
import Footer from "./headerFooter/Footer";

const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const QuickContact = lazy(() => import("./components/shared/QuickContact"));
const LoginPopup = lazy(() => import("./components/shared/LoginPopup"));
const CryptocurrencyDevelopment = lazy(() =>
  import("./pages/crypto/cryptocurrencyDevelopment/CryptocurrencyDevelopment")
);
const TokenDevelopment = lazy(() =>
  import("./pages/crypto/tokenDevelopment/TokenDevelopment")
);
const EthereumTokenDevelopment = lazy(() =>
  import("./pages/crypto/ethereumTokenDevelopment/EthereumTokenDevelopment")
);
const TronTokenDevelopment = lazy(() =>
  import("./pages/crypto/tronTokenDevelopment/TronTokenDevelopment")
);
const BRC20TokenDevelopment = lazy(() =>
  import("./pages/crypto/BRC20TokenDevelopment/BRC20TokenDevelopment")
);
const SRC20TokenDevelopment = lazy(() =>
  import("./pages/crypto/SRC20TokenDevelopment/SRC20TokenDevelopment")
);
const BEP20TokenDevelopment = lazy(() =>
  import("./pages/crypto/BEP20TokenDevelopment/BEP20TokenDevelopment")
);
const StableCoinDevelopment = lazy(() =>
  import("./pages/crypto/stableCoinDevelopment/StableCoinDevelopment")
);
const WhitePaperDevelopment = lazy(() =>
  import("./pages/crypto/whitePaperDevelopment/WhitePaperDevelopment")
);
const CryptocurrencyMLMSoftware = lazy(() =>
  import("./pages/crypto/cryptocurrencyMLMSoftware/CryptocurrencyMLMSoftware")
);
const ArtTokenization = lazy(() =>
  import("./pages/crypto/artTokenization/ArtTokenization")
);
const AssetTokenization = lazy(() =>
  import("./pages/crypto/assetTokenization/AssetTokenization")
);
const RealEstateTokenization = lazy(() =>
  import("./pages/crypto/realEstateTokenization/RealEstateTokenization")
);
const TokenizationPlatformDevelopment = lazy(() =>
  import(
    "./pages/crypto/tokenizationPlatformDevelopment/TokenizationPlatformDevelopment"
  )
);
const RealEstateTokenizationEssentialGuide = lazy(() =>
  import(
    "./pages/crypto/realEstateTokenizationEssentialGuide/RealEstateTokenizationEssentialGuide"
  )
);
const CryptoETFDevelopment = lazy(() =>
  import("./pages/crypto/cryptoETFDevelopment/CryptoETFDevelopment")
);
const BitcoinOrdinalsTokenDevelopment = lazy(() =>
  import(
    "./pages/crypto/bitcoinOrdinalsTokenDevelopment/BitcoinOrdinalsTokenDevelopment"
  )
);
const BitcoinOrdinalsTokenMarketing = lazy(() =>
  import(
    "./pages/crypto/bitcoinOrdinalsTokenMarketing/BitcoinOrdinalsTokenMarketing"
  )
);
const HowToLaunchCryptoToken = lazy(() =>
  import("./pages/crypto/howToLaunchCryptoToken/HowToLaunchCryptoToken")
);
const CryptoPredictionMarketPlatform = lazy(() =>
  import(
    "./pages/crypto/cryptoPredictionMarketPlatform/CryptoPredictionMarketPlatform"
  )
);
const DecentralizedSportsBettingPlatform = lazy(() =>
  import(
    "./pages/crypto/decentralizedSportsBettingPlatform/DecentralizedSportsBettingPlatform"
  )
);
const CryptocurrencyExchangeSoftware = lazy(() =>
  import(
    "./pages/exchange/cryptocurrencyExchangeSoftware/CryptocurrencyExchangeSoftware"
  )
);
const WhiteLabelCryptocurrencyExchangeSoftwareDevelopment = lazy(() =>
  import(
    "./pages/exchange/whiteLabelCryptocurrencyExchangeSoftwareDevelopment/WhiteLabelCryptocurrencyExchangeSoftwareDevelopment"
  )
);
const DecentralizedExchangeDevelopment = lazy(() =>
  import(
    "./pages/exchange/decentralizedExchangeDevelopment/DecentralizedExchangeDevelopment"
  )
);
const IcoMarketingServices = lazy(() =>
  import("./pages/ICOIDO/icoMarketingServices/IcoMarketingServices")
);
const IcoDevelopment = lazy(() =>
  import("./pages/ICOIDO/icoDevelopment/IcoDevelopment")
);
const IcoCommunityMarketing = lazy(() =>
  import("./pages/ICOIDO/icoCommunityMarketing/IcoCommunityMarketing")
);
const WhiteLabelNftMarketplace = lazy(() =>
  import("./pages/NFT/whiteLabelNftMarketplace/WhiteLabelNftMarketplace")
);
const NftMarketplaceDevelopment = lazy(() =>
  import("./pages/NFT/nftMarketplaceDevelopment/NftMarketplaceDevelopment")
);
const BitcoinOrdinalsMarketplaceDevelopment = lazy(() =>
  import(
    "./pages/NFT/bitcoinOrdinalsMarketplaceDevelopment/BitcoinOrdinalsMarketplaceDevelopment"
  )
);
const p2pExchangeDevelopment = lazy(() =>
  import("./pages/exchange/p2pExchangeDevelopment")
);

// NFT PAGE
import NftMarketPlaceEthereum from "./pages/NFT/nftMarketPlaceEthereum/index";
import NftMarketPlaceMatic from "./pages/NFT/nftMarketPlaceMatic";
import NftMarketPlaceBSC from "./pages/NFT/nftMarketPlaceBSC";
import NftMarketPaceAstar from "./pages/NFT/nftMarketplaceAstar";
import NftMarketplaceAvalanche from "./pages/NFT/nftMarketplaceAvalanche";
import NftMarketplaceSidechain from "./pages/NFT/nftMarketplaceSidechain";
import NftMarketplaceSolana from "./pages/NFT/nftMarketplaceSolona";
import ZksyncIntegrationService from "./pages/NFT/zksyncIntegrationService";
import NtMarketplaceHarmony from "./pages/NFT/nftMarketplaceHarmony";
import NftLoyaltyProgram from "./pages/NFT/nftLoyaltyProgram";
import TokenGatingPlatform from "./pages/NFT/tokenGatingPlatform";
import NftMusicMarketplaceDevelopment from "./pages/NFT/nftMusicMarketplaceDevelopment";
import NftArtMarketplaceDevelopment from "./pages/NFT/nftArtMarketplaceDevelopment";
import NftMarketPlaceSport from "./pages/NFT/nftMarketPlaceSport";
import NftForRealeState from "./pages/NFT/nftForRealeState";
import NftForPhysicalAssets from "./pages/NFT/nftForPhysicalAssets";
import NftInEcommerce from "./pages/NFT/nftInEcommerce";
import NftTicketingMarketplace from "./pages/NFT/nftTicketingMarketplace";
import NftAggregatorMarketplaceDevelopment from "./pages/NFT/nftAggregatorMarketplaceDevelopment";
import CrossChainNftMarketplace from "./pages/NFT/crossChainNftMarketplace";
import DaoEnabledNftPlatform from "./pages/NFT/daoEnabledNftPlatform";
import NftMarketplaceWithGovernanceToken from "./pages/NFT/nftMarketplaceWithGovernanceToken";
import NftMarketplaceForCelebrities from "./pages/NFT/nftMarketplaceForCelebrities";
import CarbonCreditsDevelopment from "./pages/NFT/carbonCreditsDevelopment";
import PhygitalNftMarketplace from "./pages/NFT/phygitalNftMarketplace";
import FractionalNftMarketplaceDevelopment from "./pages/NFT/fractionalNftMarketplaceDevelopment";
import NftDevelopmentServices from "./pages/NFT/nftDevelopmentServices";
import NftLaunchpadDevelopmentService from "./pages/NFT/nftLaunchpadDevelopmentService";
import NftExchangeDevelopment from "./pages/NFT/nftExchangeDevelopment";
import NftWalletDevelopment from "./pages/NFT/nftWalletDevelopment";
import NftMintingPlatformDevelopment from "./pages/NFT/nftMintingPlatformDevelopment";
import NftLayerTwoDevelopment from "./pages/NFT/nftLayerTwoDevelopment";
import CreateNftEcosystem from "./pages/NFT/createNftEcosystem";
import SemiFungibleTokenDevelopment from "./pages/NFT/semiFungibleTokenDevelopment";
import SocialTokenDevelopmentPlatform from "./pages/NFT/socialTokenDevelopmentPlatform";
import NftStakingPlatformDevelopment from "./pages/NFT/nftStakingPlatformDevelopment";
import NftStreamingPlatformDevelopmentSolutions from "./pages/NFT/nftStreamingPlatformDevelopmentSolutions";
import NftConsulting from "./pages/NFT/nftConsulting";
import NftStudio from "./pages/NFT/nftStudio";
import NftArtDesignServices from "./pages/NFT/nftArtDesignServices";
import NftAdoptionMarketAnalysisReport from "./pages/NFT/nftAdoptionMarketAnalysisReport";
import NftGamingPlatformDevelopment from "./pages/NFT/nftGamingPlatformDevelopment";
import P2eNftGameDevelopment from "./pages/NFT/p2eNftGameDevelopment";

function App() {
  return (
    <>
      <Router>
        <Header />
        <QuickContact />
        <LoginPopup />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="*" exact element={<LandingPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/cryptocurrency-development"
              element={<CryptocurrencyDevelopment />}
            />
            <Route path="/token-development" element={<TokenDevelopment />} />
            <Route
              path="/ethereum-token-development"
              element={<EthereumTokenDevelopment />}
            />
            <Route
              path="/tron-token-development"
              element={<TronTokenDevelopment />}
            />
            <Route
              path="/brc-20-token-development"
              element={<BRC20TokenDevelopment />}
            />
            <Route
              path="/src-20-token-development"
              element={<SRC20TokenDevelopment />}
            />
            <Route
              path="/binance-smart-chain-bep20-like-token-development"
              element={<BEP20TokenDevelopment />}
            />
            <Route
              path="/stable-coin-development"
              element={<StableCoinDevelopment />}
            />
            <Route
              path="/white-paper-development"
              element={<WhitePaperDevelopment />}
            />
            <Route
              path="/cryptocurrency-mlm-software-development"
              element={<CryptocurrencyMLMSoftware />}
            />
            <Route path="/art-tokenization" element={<ArtTokenization />} />
            <Route path="/asset-tokenization" element={<AssetTokenization />} />
            <Route
              path="/real-estate-tokenization"
              element={<RealEstateTokenization />}
            />
            <Route
              path="/tokenization-platform-development"
              element={<TokenizationPlatformDevelopment />}
            />
            <Route
              path="/real-estate-tokenization-essential-guide"
              element={<RealEstateTokenizationEssentialGuide />}
            />
            <Route
              path="/crypto-etf-development"
              element={<CryptoETFDevelopment />}
            />
            <Route
              path="/bitcoin-ordinals-token-development"
              element={<BitcoinOrdinalsTokenDevelopment />}
            />
            <Route
              path="/bitcoin-ordinals-token-marketing"
              element={<BitcoinOrdinalsTokenMarketing />}
            />
            <Route
              path="/how-to-launch-crypto-token"
              element={<HowToLaunchCryptoToken />}
            />
            <Route
              path="/crypto-prediction-market-platform"
              element={<CryptoPredictionMarketPlatform />}
            />
            <Route
              path="/decentralized-sports-betting-platform"
              element={<DecentralizedSportsBettingPlatform />}
            />
            <Route
              path="/cryptocurrency-exchange-software"
              element={<CryptocurrencyExchangeSoftware />}
            />
            <Route
              path="/white-label-cryptocurrency-exchange-software-development"
              element={<WhiteLabelCryptocurrencyExchangeSoftwareDevelopment />}
            />
            <Route
              path="/decentralized-exchange-development"
              element={<DecentralizedExchangeDevelopment />}
            />
            <Route
              path="/ico-marketing-services"
              element={<IcoMarketingServices />}
            />
            <Route path="/ico-development" element={<IcoDevelopment />} />
            <Route
              path="/ico-community-marketing"
              element={<IcoCommunityMarketing />}
            />
            <Route
              path="/white-label-nft-marketplace"
              element={<WhiteLabelNftMarketplace />}
            />
            <Route
              path="/bitcoin-ordinals-marketplace-development"
              element={<BitcoinOrdinalsMarketplaceDevelopment />}
            />
            <Route
              path="/nft-marketplace-development"
              element={<NftMarketplaceDevelopment />}
            />
            <Route
              path="/create-your-own-token-and-coin"
              element={<CreateYourOwnTokenAndCoin />}
            />
            <Route
              path="/p2p-exchange-development"
              element={<P2pExchangeDev />}
            />
            <Route
              path="/nft-marketplace-on-ethereum"
              element={<NftMarketPlaceEthereum />}
            />
            <Route
              path="/nft-marketplace-in-matic"
              element={<NftMarketPlaceMatic />}
            />
            <Route
              path="/nft-marketplace-on-binance-smart-chain"
              element={<NftMarketPlaceBSC />}
            />
            <Route
              path="/nft-marketplace-development-on-astar"
              element={<NftMarketPaceAstar />}
            />
            <Route
              path="/nft-marketplace-on-avalanche"
              element={<NftMarketplaceAvalanche />}
            />
            <Route
              path="/nft-development-in-sidechain"
              element={<NftMarketplaceSidechain />}
            />
            <Route
              path="/solana-based-nft-marketplace-development"
              element={<NftMarketplaceSolana />}
            />
            <Route
              path="/zksync2-integration-in-nft-platform"
              element={<ZksyncIntegrationService />}
            />
            <Route
              path="/nft-marketplace-on-harmony"
              element={<NtMarketplaceHarmony />}
            />
            <Route
              path="/nft-loyalty-program"
              element={<NftLoyaltyProgram />}
            />
            <Route
              path="/token-gating-platform"
              element={<TokenGatingPlatform />}
            />
            <Route
              path="/nft-music-marketplace-development"
              element={<NftMusicMarketplaceDevelopment />}
            />
            <Route
              path="/nft-art-marketplace-development"
              element={<NftArtMarketplaceDevelopment />}
            />
            <Route path="/nft-for-sports" element={<NftMarketPlaceSport />} />
            <Route path="/nft-for-realestate" element={<NftForRealeState />} />
            <Route
              path="/nft-for-physical-assets"
              element={<NftForPhysicalAssets />}
            />
            <Route path="/nft-in-ecommerce" element={<NftInEcommerce />} />
            <Route
              path="/nft-ticketing-marketplace"
              element={<NftTicketingMarketplace />}
            />
            <Route
              path="/nft-aggregator-marketplace-development"
              element={<NftAggregatorMarketplaceDevelopment />}
            />
            <Route
              path="/cross-chain-nft-marketplace"
              element={<CrossChainNftMarketplace />}
            />
            <Route
              path="/dao-enabled-nft-platform"
              element={<DaoEnabledNftPlatform />}
            />
            <Route
              path="/nft-marketplace-with-governance-token"
              element={<NftMarketplaceWithGovernanceToken />}
            />
            <Route
              path="/nft-marketplace-for-celebrities"
              element={<NftMarketplaceForCelebrities />}
            />
            <Route
              path="/carbon-credits-development"
              element={<CarbonCreditsDevelopment />}
            />
            <Route
              path="/phygital-nft-marketplace"
              element={<PhygitalNftMarketplace />}
            />
            <Route
              path="/fractional-nft-marketplace-development"
              element={<FractionalNftMarketplaceDevelopment />}
            />
            <Route
              path="/nft-development-services"
              element={<NftDevelopmentServices />}
            />
            <Route
              path="/nft-launchpad-development-service"
              element={<NftLaunchpadDevelopmentService />}
            />
            <Route
              path="/nft-exchange-development"
              element={<NftExchangeDevelopment />}
            />
            <Route
              path="/nft-wallet-development"
              element={<NftWalletDevelopment />}
            />
            <Route
              path="/nft-minting-platform-development"
              element={<NftMintingPlatformDevelopment />}
            />
            <Route
              path="/nft-layer-2-development"
              element={<NftLayerTwoDevelopment />}
            />
            <Route
              path="/create-nft-ecosystem"
              element={<CreateNftEcosystem />}
            />
            <Route
              path="/semi-fungible-token-development"
              element={<SemiFungibleTokenDevelopment />}
            />
            <Route
              path="/social-token-development-platform"
              element={<SocialTokenDevelopmentPlatform />}
            />
            <Route
              path="/nft-staking-platform-development"
              element={<NftStakingPlatformDevelopment />}
            />
            <Route
              path="/nft-streaming-platform-development-solutions"
              element={<NftStreamingPlatformDevelopmentSolutions />}
            />
            <Route path="/nft-consulting" element={<NftConsulting />} />
            <Route path="/nft-studio" element={<NftStudio />} />
            <Route
              path="/nft-art-design-services"
              element={<NftArtDesignServices />}
            />
            <Route
              path="/nft-adoption-market-analysis-report"
              element={<NftAdoptionMarketAnalysisReport />}
            />
            <Route
              path="/nft-gaming-platform-development"
              element={<NftGamingPlatformDevelopment />}
            />
            <Route
              path="/p2e-nft-game-development"
              element={<P2eNftGameDevelopment />}
            />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
