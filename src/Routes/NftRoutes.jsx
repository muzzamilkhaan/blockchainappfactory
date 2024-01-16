import React, { lazy } from "react";
const NftMarketplaceDevelopment = lazy(() =>
  import("../pages/NFT/nftMarketplaceDevelopment/NftMarketplaceDevelopment")
);
const WhiteLabelNftMarketplace = lazy(() =>
  import("../pages/NFT/whiteLabelNftMarketplace/WhiteLabelNftMarketplace")
);
const NftRoutes = (headerBgColor, toggleHeaderBgColor, linkColor) => [
  {
    path: "/nft-marketplace-development",
    element: <NftMarketplaceDevelopment />,
  },
  {
    path: "/white-label-nft-marketplace",
    element: <WhiteLabelNftMarketplace />,
  },
];

export default NftRoutes;
