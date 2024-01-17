import React, { lazy } from "react";
const LandingPage = lazy(() => import("../pages/landingpage/LandingPage"));

const LandingRoutes = (headerBgColor, toggleHeaderBgColor, linkColor) => [
  {
    path: "/",
    element: (
      <LandingPage
        headerBgColor={headerBgColor}
        toggleHeaderBgColor={toggleHeaderBgColor}
        linkColor={linkColor}
      />
    ),
  },
];

export default LandingRoutes;
