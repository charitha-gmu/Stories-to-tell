import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SLUGS from 'resources/slugs';

const HomeComponent = lazy(() => import('containers/Home'));
const JobDetailsComponent = lazy(() => import('containers/JobDetails'));
const RecentJobsComponent = lazy(() => import('containers/RecentJobs'));
const CreateScreenComponent = lazy(() => import('containers/CreateScreen'));
const NotFoundComponent = lazy(() => import('components/page-not-found'));

function PrivateRoutes() {
    return (
        <React.Suspense>
            <Routes>
                <Route path={'/'} element={<HomeComponent />} />
                <Route path={SLUGS.home} element={<HomeComponent />} />
                <Route
                    path={SLUGS.jobDetails}
                    element={<JobDetailsComponent />}
                />
                <Route
                    path={SLUGS.recentJobs}
                    element={<RecentJobsComponent />}
                />
                <Route
                    path={SLUGS.createJob}
                    element={<CreateScreenComponent />}
                />
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </React.Suspense>
    );
}

export default PrivateRoutes;
