import React, { Suspense, lazy, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//IMPORT SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
import P2pExchangeDev from "./pages/exchange/p2pExchangeDevelopment/p2pExchangeDevComp";
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
import Web2GameToWeb3GameDevelopment from "./pages/NFT/web2GameToWeb3GameDevelopment";
import NftLotteryGameDevelopment from "./pages/NFT/nftLotteryGameDevelopment/NftLotteryGameDevelopment";
import NftGamingMarketplaceDevelopment from "./pages/NFT/nftGamingMarketplaceDevelopment/nftGamingMarketplaceDevelopment";
import NftRacingGameDevelopment from "./pages/NFT/nftRacingGameDevelopment/nftRacingGameDevelopment";
import CasinoNftGamesDevelopment from "./pages/NFT/casinoNftGamesDevelopment/casinoNftGamesDevelopment";
import NftRpgGameDevelopment from "./pages/NFT/nftRpgGameDevelopment/nftRpgGameDevelopment";
import MoveToEarnNftPlatform from "./pages/NFT/moveToEarnNftPlatform/moveToEarnNftPlatform";
import NftGameDevelopmentLikeSplinterlands from "./pages/NFT/nftGameDevelopmentLikeSplinterlands/nftGameDevelopmentLikeSplinterlands";
import DungeonswapLikeNftGameDevelopment from "./pages/NFT/dungeonswapLikeNftGameDevelopment/dungeonswapLikeNftGameDevelopment";
import MycryptoheroesLikeNftGameDevelopment from "./pages/NFT/mycryptoheroesLikeNftGameDevelopment/mycryptoheroesLikeNftGameDevelopment";
import NftMarketplaceLikeZedrun from "./pages/NFT/nftMarketplaceLikeZedrun/nftMarketplaceLikeZedrun";
import DecentralandLikeNftDevelopment from "./pages/NFT/decentralandLikeNftDevelopment/decentralandLikeNftDevelopment";
import NftGameDevelopmentLikeRevvRacing from "./pages/NFT/nftGameDevelopmentLikeRevvRacing/nftGameDevelopmentLikeRevvRacing";

// ICO / IDO
const IcoTelegramMarketing = lazy(() =>
  import("./pages/ICOIDO/icoTelegramMarketing/icoTelegramMarketing")
);
const IcoInfluencerMarketing = lazy(() =>
  import("./pages/ICOIDO/icoInfluencerMarketing/icoInfluencerMarketing")
);
const InitialExchangeOfferingServices = lazy(() =>
  import(
    "./pages/ICOIDO/initialExchangeOfferingServices/initialExchangeOfferingServices"
  )
);
const EquityTokenOfferingServices = lazy(() =>
  import(
    "./pages/ICOIDO/equityTokenOfferingServices/equityTokenOfferingServices"
  )
);
const CrowdfundingPlatform = lazy(() =>
  import("./pages/ICOIDO/crowdfundingPlatform/crowdfundingPlatform")
);
const SecurityTokenOfferingServices = lazy(() =>
  import(
    "./pages/ICOIDO/securityTokenOfferingServices/securityTokenOfferingServices"
  )
);
const StoMarketingServices = lazy(() =>
  import("./pages/ICOIDO/stoMarketingServices/stoMarketingServices")
);
const StoSmartContractsDevelopment = lazy(() =>
  import(
    "./pages/ICOIDO/stoSmartContractsDevelopment/stoSmartContractsDevelopment"
  )
);
const InitialDexOfferingService = lazy(() =>
  import("./pages/ICOIDO/initialDexOfferingService/initialDexOfferingService")
);
const IdoMarketingServices = lazy(() =>
  import("./pages/ICOIDO/idoMarketingServices/idoMarketingServices")
);
const WhiteLabelIdoLaunchpad = lazy(() =>
  import("./pages/ICOIDO/whiteLabelIdoLaunchpad/whiteLabelIdoLaunchpad")
);
const IdoTokenLaunchpadServices = lazy(() =>
  import("./pages/ICOIDO/idoTokenLaunchpadServices/idoTokenLaunchpadServices")
);
const IdoLaunchpadOnLayer2Blockchain = lazy(() =>
  import(
    "./pages/ICOIDO/idoLaunchpadOnLayer2Blockchain/idoLaunchpadOnLayer2Blockchain"
  )
);
const IdoLaunchpadDevelopmentOnBsc = lazy(() =>
  import(
    "./pages/ICOIDO/idoLaunchpadDevelopmentOnBsc/idoLaunchpadDevelopmentOnBsc"
  )
);
const IdoLaunchpadDevelopmentOnEthereum = lazy(() =>
  import(
    "./pages/ICOIDO/idoLaunchpadDevelopmentOnEthereum/idoLaunchpadDevelopmentOnEthereum"
  )
);
const IdoLaunchpadDevelopmentInMultichain = lazy(() =>
  import(
    "./pages/ICOIDO/idoLaunchpadDevelopmentInMultichain/idoLaunchpadDevelopmentInMultichain"
  )
);
const IdoLaunchpadOnPolygon = lazy(() =>
  import("./pages/ICOIDO/idoLaunchpadOnPolygon/idoLaunchpadOnPolygon")
);

function App() {
  const [headerBgColor, setHeaderBgColor] = useState("");
  const [linkColor, setLinkColor] = useState("");
  useEffect(() => {
    // Retrieve theme from local storage
    const storedTheme = localStorage.getItem("headerBgColor");
    const link_color = localStorage.getItem("linkColor");

    // Set the theme based on the stored value or default to 'dark'
    const initialTheme = storedTheme || "transparent";
    const initialLink = link_color || "#fff";
    setHeaderBgColor(initialTheme);
    setLinkColor(initialLink);

    if (!storedTheme) {
      localStorage.setItem("headerBgColor", "transparent");
      localStorage.setItem("linkColor", "#fff");
    }
  }, []);

  const toggleHeaderBgColor = (color, link) => {
    const newTheme = color;
    const newLink = link;
    setHeaderBgColor(newTheme);
    setLinkColor(newLink);
    localStorage.setItem("headerBgColor", newTheme);
    localStorage.setItem("linkColor", newLink);
  };
  return (
    <>
      <Router>
        <Header headerBgColor={headerBgColor} linkColor={linkColor} />
        <QuickContact />
        <LoginPopup />
        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <LandingPage
                  headerBgColor={headerBgColor}
                  toggleHeaderBgColor={toggleHeaderBgColor}
                  linkColor={linkColor}
                />
              }
            />
            <Route
              path="*"
              exact
              element={<LandingPage headerBgColor={headerBgColor} />}
            />
            <Route
              path="/contact"
              element={<ContactUs headerBgColor={headerBgColor} />}
            />
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
              element={
                <HowToLaunchCryptoToken
                  headerBgColor={headerBgColor}
                  toggleHeaderBgColor={toggleHeaderBgColor}
                  linkColor={linkColor}
                />
              }
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
              element={
                <CreateYourOwnTokenAndCoin
                  headerBgColor={headerBgColor}
                  toggleHeaderBgColor={toggleHeaderBgColor}
                  linkColor={linkColor}
                />
              }
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
            <Route
              path="/web2-game-to-web3-game-development"
              element={<Web2GameToWeb3GameDevelopment />}
            />
            <Route
              path="/nft-lottery-game-development"
              element={<NftLotteryGameDevelopment />}
            />
            <Route
              path="/nft-gaming-marketplace-development"
              element={<NftGamingMarketplaceDevelopment />}
            />
            <Route
              path="/nft-racing-game-development"
              element={<NftRacingGameDevelopment />}
            />
            <Route
              path="/casino-nft-games-development"
              element={<CasinoNftGamesDevelopment />}
            />
            <Route
              path="/nft-rpg-game-development"
              element={<NftRpgGameDevelopment />}
            />
            <Route
              path="/move-to-earn-nft-platform"
              element={<MoveToEarnNftPlatform />}
            />
            <Route
              path="/nft-game-development-like-splinterlands"
              element={<NftGameDevelopmentLikeSplinterlands />}
            />
            <Route
              path="/dungeonswap-like-nft-game-development"
              element={<DungeonswapLikeNftGameDevelopment />}
            />
            <Route
              path="/mycryptoheroes-like-nft-game-development"
              element={<MycryptoheroesLikeNftGameDevelopment />}
            />
            <Route
              path="/nft-marketplace-like-zedrun"
              element={<NftMarketplaceLikeZedrun />}
            />
            <Route
              path="/decentraland-like-nft-development"
              element={<DecentralandLikeNftDevelopment />}
            />
            <Route
              path="/nft-game-development-like-revv-racing"
              element={<NftGameDevelopmentLikeRevvRacing />}
            />
            <Route
              path="/ico-telegram-marketing"
              element={<IcoTelegramMarketing />}
            />
            <Route
              path="/ico-influencer-marketing"
              element={<IcoInfluencerMarketing />}
            />
            <Route
              path="/initial-exchange-offering-services"
              element={<InitialExchangeOfferingServices />}
            />
            <Route
              path="/equity-token-offering-services"
              element={<EquityTokenOfferingServices />}
            />
            <Route
              path="/crowdfunding-platform"
              element={<CrowdfundingPlatform />}
            />
            <Route
              path="/security-token-offering-services"
              element={<SecurityTokenOfferingServices />}
            />
            <Route
              path="/sto-marketing-services"
              element={<StoMarketingServices />}
            />
            <Route
              path="/sto-smart-contracts-development"
              element={<StoSmartContractsDevelopment />}
            />
            <Route
              path="/initial-dex-offering-service"
              element={<InitialDexOfferingService />}
            />
            <Route
              path="/ido-marketing-services"
              element={
                <IdoMarketingServices
                  headerBgColor={headerBgColor}
                  toggleHeaderBgColor={toggleHeaderBgColor}
                  linkColor={linkColor}
                />
              }
            />
            <Route
              path="/white-label-ido-launchpad"
              element={<WhiteLabelIdoLaunchpad />}
            />
            <Route
              path="/ido-token-launchpad-services"
              element={<IdoTokenLaunchpadServices />}
            />
            <Route
              path="/ido-launchpad-on-layer-2-blockchain"
              element={
                <IdoLaunchpadOnLayer2Blockchain
                  headerBgColor={headerBgColor}
                  toggleHeaderBgColor={toggleHeaderBgColor}
                  linkColor={linkColor}
                />
              }
            />
            <Route
              path="/ido-launchpad-development-on-bsc"
              element={<IdoLaunchpadDevelopmentOnBsc />}
            />
            <Route
              path="/ido-launchpad-development-on-ethereum"
              element={<IdoLaunchpadDevelopmentOnEthereum />}
            />
            <Route
              path="/ido-launchpad-development-in-multichain"
              element={<IdoLaunchpadDevelopmentInMultichain />}
            />
            <Route
              path="/ido-launchpad-on-polygon"
              element={<IdoLaunchpadOnPolygon />}
            />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
