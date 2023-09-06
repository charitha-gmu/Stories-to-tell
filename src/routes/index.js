import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrivateSection from "routes/PrivateSection";
import PublicRoutes from "./PublicRoutes";
import { getLocalStorageItemWithExpiry } from "resources/utils";

function Routes() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const localStorageData = getLocalStorageItemWithExpiry("LOGIN_EXPIRY");
  //   if (!localStorageData) {
  //     localStorage.removeItem("signedIn");
  //     navigate("/login");
  //   }
  // }, [navigate, pathname]);

  const isUserLoggedIn = localStorage.getItem("signedIn") === "true";

  return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
