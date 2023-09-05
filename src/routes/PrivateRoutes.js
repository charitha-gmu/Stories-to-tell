import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomeComponent = lazy(() => import('containers/Home'));
const NotFoundComponent = lazy(() => import('components/page-not-found'));

function PrivateRoutes() {
    return (
        <React.Suspense>
            <Routes>
                <Route path={'/home'} element={<HomeComponent />} />
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </React.Suspense>
    );
}

export default PrivateRoutes;
