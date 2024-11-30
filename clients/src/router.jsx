import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const SignUp = lazy(() => import('./pages/signup'))
const Home = lazy(() => import('./pages/home'))
const EditUser = lazy(() => import('./pages/edit'))

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense>
                <SignUp/>
            </React.Suspense>
        )
    },
    {
        path: "/home",
        element: (
            <React.Suspense>
                <Home/>
            </React.Suspense>
        )
    },
    {
        path: "/edit/:id",
        element: (
            <React.Suspense>
                <EditUser/>
            </React.Suspense>
        )
    },
])
export default BrowserRouter;