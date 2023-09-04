import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SLUGS from 'resources/slugs';

const SignInComponent = lazy(() => import('containers/Auth/signIn'));

function PublicRoutes() {
    return (
        <React.Suspense>
            <Routes>
                <Route path={SLUGS.login} element={<SignInComponent />} />
            </Routes>
        </React.Suspense>
    );
}

export default PublicRoutes;
