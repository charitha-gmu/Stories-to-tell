import WeddingWebsite from "containers/WeddingWebsite";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignInComponent = lazy(() => import("containers/Auth/SignIn"));
const LandingComponent = lazy(() => import("containers/LandingPage/index"));
const ForgotPasswordComponent = lazy(() =>
  import("containers/Auth/ForgotPassword")
);
const SignUpComponent = lazy(() => import("containers/Auth/SignUp"));
const WeddingFormComponent = lazy(() =>
  import("containers/WeddingInvitation/WeddingForm")
);

function PublicRoutes() {
  return (
    <React.Suspense>
      <Routes>
        <Route path={"/login"} element={<SignInComponent />} />
        <Route path={"/signup"} element={<SignUpComponent />} />
        <Route
          path={"/forgot-password"}
          element={<ForgotPasswordComponent />}
        />
        <Route path={"/"} element={<LandingComponent />} />
        <Route path={"/details-form"} element={<WeddingFormComponent />} />
        <Route path={"/invitation"} element={<WeddingWebsite />} />
      </Routes>
    </React.Suspense>
  );
}

export default PublicRoutes;
