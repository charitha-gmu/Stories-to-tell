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
      </Routes>
    </React.Suspense>
  );
}

export default PublicRoutes;
