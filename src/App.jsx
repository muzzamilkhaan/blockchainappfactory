import React, { Suspense, lazy, useEffect, useState } from "react";

// IMPORT SlICK-CAROUSEL CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORT SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//IMPORT BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT CSS
import "./App.css";
import "./vender-new.css";
import "./mystyle.css";
import "./index.css";
import "./inlineStyle.css";
import "./main.css";
import "./cryptoCurrency.css";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.css";

// IMPORT COMPONENT
import CreateYourOwnTokenAndCoin from "./components/shared/CreateYourOwnTokenAndCoin";
import Header from "./headerFooter/Header";
import Footer from "./headerFooter/Footer";
import BottomFooter from "./components/shared/bottomFooter/bottomFooter.jsx";
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const QuickContact = lazy(() => import("./components/shared/QuickContact"));
const LoginPopup = lazy(() => import("./components/shared/LoginPopup"));

import { useLocation } from "react-router-dom";
// IMPORT SIDEBARSOCIAL
import SideSocialBar from "./sideSocialBar";

//IMPORT ALL ROUTES
import LandingRoutes from "./Routes/LandingRoutes";
import CryptoRoutes from "./Routes/CryptoRoutes";
import NftRoutes from "./Routes/NftRoutes";
import IcoIdoRoutes from "./Routes/IcoIdoRoutes";
import ExchangeRoutes from "./Routes/ExchangeRoutes";
import ScrollToTop from "./components/shared/ScrollToTop";
import NotFound from "./components/shared/notFound/notFound";
import LandingPage from "./pages/landingpage/LandingPage";
import SideBar from "./components/shared/sideBar/SideBar.jsx";

function App() {
  const [headerBgColor, setHeaderBgColor] = useState("");
  const [linkColor, setLinkColor] = useState("");
  const [colorLogo, setColorLogo] = useState("");
  
  useEffect(() => {
    // Retrieve theme from local storage
    const storedTheme = localStorage.getItem("headerBgColor");
    const link_color = localStorage.getItem("linkColor");
    const color_logo = localStorage.getItem("logoColor");

    // Set the theme based on the stored value or default to 'dark'
    const initialTheme = storedTheme || "transparent";
    const initialLink = link_color || "#fff";
    const initialLogo = color_logo || "#fff";
    setHeaderBgColor(initialTheme);
    setLinkColor(initialLink);
    setColorLogo(initialLogo);

    if (!storedTheme) {
      localStorage.setItem("headerBgColor", "transparent");
      localStorage.setItem("linkColor", "#fff");
      localStorage.setItem("logoColor", "#fff");
    }
  }, []);

  const toggleHeaderBgColor = (color, link, logoColor) => {
    const newTheme = color;
    const newLink = link;
    const colorLogo = logoColor;
    setHeaderBgColor(newTheme);
    setLinkColor(newLink);
    localStorage.setItem("headerBgColor", newTheme);
    localStorage.setItem("linkColor", newLink);
    localStorage.setItem("logoColor", colorLogo);
  };
  return (
    <>
      <Router>
        <LocationAwareScrollToTop />
        <Header
          headerBgColor={headerBgColor}
          linkColor={linkColor}
          colorLogo={colorLogo}
        />
        <QuickContact />
        <LoginPopup />
        <Suspense fallback={""}>
          <Routes>
            {LandingRoutes(headerBgColor, toggleHeaderBgColor, linkColor).map(
              (route) => {
                // console.log("Route:", route);
                return <Route key={route.path} {...route} />;
              }
            )}
            {CryptoRoutes(headerBgColor, toggleHeaderBgColor, linkColor).map(
              (route) => (
                <Route key={route.path} {...route} />
              )
            )}
            {NftRoutes(headerBgColor, toggleHeaderBgColor, linkColor).map(
              (route) => (
                <Route key={route.path} {...route} />
              )
            )}
            {ExchangeRoutes(headerBgColor, toggleHeaderBgColor, linkColor).map(
              (route) => (
                <Route key={route.path} {...route} />
              )
            )}
            {IcoIdoRoutes(headerBgColor, toggleHeaderBgColor, linkColor).map(
              (route) => (
                <Route key={route.path} {...route} />
              )
            )}
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
              path="/contact"
              element={<ContactUs headerBgColor={headerBgColor} />}
            />
            {/* PAGE NOT FOUND */}
            <Route
              path="*"
              element={
                <LandingPage
                  headerBgColor={headerBgColor}
                  toggleHeaderBgColor={toggleHeaderBgColor}
                  linkColor={linkColor}
                />
              }
            />
          </Routes>
        </Suspense>
      </Router>
      {/* <SideSocialBar /> */}
      <SideBar />
      <BottomFooter />
      <Footer />
    </>
  );
}

export default App;
function LocationAwareScrollToTop() {
  const location = useLocation();

  // Conditionally render the ScrollToTop component
  if (location.pathname !== "/") {
    return <ScrollToTop />;
  }

  return <ScrollToTop />;
}
