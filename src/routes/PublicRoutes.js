import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignInComponent = lazy(() => import('containers/Auth/signIn'));

function PublicRoutes() {
    return (
        <React.Suspense>
            <Routes>
                <Route path={"/login"} element={<SignInComponent />} />
            </Routes>
        </React.Suspense>
    );
}

export default PublicRoutes;
