import './style.scss';
import '../../assets/fonts/helvetica/style.scss';
import '../../assets/fonts/roboto/style.scss';

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LogInPage from '../pages/LogInPage/LogInPage';
import { AppRoute } from './types';

const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <main>
      <ErrorBoundary>
        <Suspense>
          <Routes>
            <Route path={AppRoute.Main} element={<LogInPage />} />
            <Route path={AppRoute.LogIn} element={<LogInPage />} />
            <Route path={AppRoute.SignUp} element={<SignUpPage />} />
            <Route path={AppRoute.Any} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default App;
