import React, { lazy } from "react";
const LandingPage = lazy(() => import("../pages/landingpage/LandingPage"));

const IcoIdoRoutes = (headerBgColor, toggleHeaderBgColor, linkColor) => [
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
  {
    path: "*",
    element: (
      <LandingPage
        headerBgColor={headerBgColor}
        toggleHeaderBgColor={toggleHeaderBgColor}
        linkColor={linkColor}
      />
    ),
  },
];

export default IcoIdoRoutes;
