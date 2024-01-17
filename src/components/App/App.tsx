import './style.scss';
import '../../assets/fonts/helvetica/style.scss';
import '../../assets/fonts/roboto/style.scss';

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LogInPage from '../pages/LogInPage/LogInPage';
import { AppRoute } from './types';

const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <main>
      <ErrorBoundary>
        <Suspense>
          <Routes>
            <Route path={AppRoute.Main} element={<LogInPage />} />
            <Route path={AppRoute.LogIn} element={<LogInPage />} />
            <Route path={AppRoute.SignIn} element={<SignInPage />} />
            <Route path={AppRoute.Any} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default App;
