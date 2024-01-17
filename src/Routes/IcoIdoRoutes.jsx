import React, { lazy } from "react";
const IcoDevelopment = lazy(() =>
  import("../pages/ICOIDO/icoDevelopment/IcoDevelopment")
);
const IcoMarketingServices = lazy(() =>
  import("../pages/ICOIDO/icoMarketingServices/IcoMarketingServices")
);
const IcoCommunityMarketing = lazy(() =>
  import("../pages/ICOIDO/icoCommunityMarketing/IcoCommunityMarketing")
);
const IcoTelegramMarketing = lazy(() =>
  import("../pages/ICOIDO/icoTelegramMarketing/icoTelegramMarketing")
);
const IcoInfluencerMarketing = lazy(() =>
  import("../pages/ICOIDO/icoInfluencerMarketing/icoInfluencerMarketing")
);
const InitialExchangeOfferingServices = lazy(() =>
  import(
    "../pages/ICOIDO/initialExchangeOfferingServices/initialExchangeOfferingServices"
  )
);
const EquityTokenOfferingServices = lazy(() =>
  import(
    "../pages/ICOIDO/equityTokenOfferingServices/equityTokenOfferingServices"
  )
);
const CrowdfundingPlatform = lazy(() =>
  import("../pages/ICOIDO/crowdfundingPlatform/crowdfundingPlatform")
);
const SecurityTokenOfferingServices = lazy(() =>
  import(
    "../pages/ICOIDO/securityTokenOfferingServices/securityTokenOfferingServices"
  )
);
const StoMarketingServices = lazy(() =>
  import("../pages/ICOIDO/stoMarketingServices/stoMarketingServices")
);
const StoSmartContractsDevelopment = lazy(() =>
  import(
    "../pages/ICOIDO/stoSmartContractsDevelopment/stoSmartContractsDevelopment"
  )
);
const InitialDexOfferingService = lazy(() =>
  import("../pages/ICOIDO/initialDexOfferingService/initialDexOfferingService")
);
const IdoMarketingServices = lazy(() =>
  import("../pages/ICOIDO/idoMarketingServices/idoMarketingServices")
);
const WhiteLabelIdoLaunchpad = lazy(() =>
  import("../pages/ICOIDO/whiteLabelIdoLaunchpad/whiteLabelIdoLaunchpad")
);
const IdoTokenLaunchpadServices = lazy(() =>
  import("../pages/ICOIDO/idoTokenLaunchpadServices/idoTokenLaunchpadServices")
);
const IdoLaunchpadOnLayer2Blockchain = lazy(() =>
  import(
    "../pages/ICOIDO/idoLaunchpadOnLayer2Blockchain/idoLaunchpadOnLayer2Blockchain"
  )
);
const IdoLaunchpadDevelopmentOnBsc = lazy(() =>
  import(
    "../pages/ICOIDO/idoLaunchpadDevelopmentOnBsc/idoLaunchpadDevelopmentOnBsc"
  )
);
const IdoLaunchpadDevelopmentOnEthereum = lazy(() =>
  import(
    "../pages/ICOIDO/idoLaunchpadDevelopmentOnEthereum/idoLaunchpadDevelopmentOnEthereum"
  )
);
const IdoLaunchpadDevelopmentInMultichain = lazy(() =>
  import(
    "../pages/ICOIDO/idoLaunchpadDevelopmentInMultichain/idoLaunchpadDevelopmentInMultichain"
  )
);
const IdoLaunchpadOnPolygon = lazy(() =>
  import("../pages/ICOIDO/idoLaunchpadOnPolygon/idoLaunchpadOnPolygon")
);
const IgoLaunchpadDevelopment = lazy(() =>
  import("../pages/ICOIDO/igoLaunchpadDevelopment/igoLaunchpadDevelopment")
);

const IcoIdoRoutes = (headerBgColor, toggleHeaderBgColor, linkColor) => [
  {
    path: "/ico-development",
    element: <IcoDevelopment />,
  },
  {
    path: "/ico-marketing-services",
    element: <IcoMarketingServices />,
  },
  {
    path: "/ico-telegram-marketing",
    element: <IcoTelegramMarketing />,
  },
  {
    path: "/ico-community-marketing",
    element: <IcoCommunityMarketing />,
  },
  {
    path: "/ico-influencer-marketing",
    element: <IcoInfluencerMarketing />,
  },
  {
    path: "/initial-exchange-offering-services",
    element: <InitialExchangeOfferingServices />,
  },
  {
    path: "/equity-token-offering-services",
    element: <EquityTokenOfferingServices />,
  },
  {
    path: "/crowdfunding-platform",
    element: <CrowdfundingPlatform />,
  },
  {
    path: "/security-token-offering-services",
    element: <SecurityTokenOfferingServices />,
  },
  {
    path: "/sto-marketing-services",
    element: <StoMarketingServices />,
  },
  {
    path: "/sto-smart-contracts-development",
    element: <StoSmartContractsDevelopment />,
  },
  {
    path: "/initial-dex-offering-service",
    element: <InitialDexOfferingService />,
  },
  {
    path: "/ido-marketing-services",
    element: (
      <IdoMarketingServices
        headerBgColor={headerBgColor}
        toggleHeaderBgColor={toggleHeaderBgColor}
        linkColor={linkColor}
      />
    ),
  },
  {
    path: "/white-label-ido-launchpad",
    element: <WhiteLabelIdoLaunchpad />,
  },
  {
    path: "/ido-token-launchpad-services",
    element: <IdoTokenLaunchpadServices />,
  },
  {
    path: "/ido-launchpad-on-layer-2-blockchain",
    element: (
      <IdoLaunchpadOnLayer2Blockchain
        headerBgColor={headerBgColor}
        toggleHeaderBgColor={toggleHeaderBgColor}
        linkColor={linkColor}
      />
    ),
  },
  {
    path: "/ido-launchpad-development-on-bsc",
    element: <IdoLaunchpadDevelopmentOnBsc />,
  },
  {
    path: "/ido-launchpad-development-on-ethereum",
    element: <IdoLaunchpadDevelopmentOnEthereum />,
  },
  {
    path: "/ido-launchpad-development-in-multichain",
    element: <IdoLaunchpadDevelopmentInMultichain />,
  },
  {
    path: "/ido-launchpad-on-polygon",
    element: <IdoLaunchpadOnPolygon />,
  },
  {
    path: "/igo-launchpad-development",
    element: <IgoLaunchpadDevelopment />,
  },
];

export default IcoIdoRoutes;
