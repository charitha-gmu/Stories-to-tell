import WeddingWebsite from "containers/WeddingWebsite";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignInComponent = lazy(() => import("containers/Auth/signIn"));
const LandingComponent = lazy(() => import("containers/LandingPage/index"));

function PublicRoutes() {
  return (
    <React.Suspense>
      <Routes>
        <Route path={"/login"} element={<SignInComponent />} />
        <Route path={"/landing-page"} element={<LandingComponent />} />
        <Route path={"/invitation"} element={<WeddingWebsite />} />
      </Routes>
    </React.Suspense>
  );
}

export default PublicRoutes;
