import './style.scss';
import '../../assets/fonts/helvetica/style.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LogInPage from '../pages/LogInPage/LogInPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import { AppRoute } from './types';

function App() {
  return (
    <main>
      <ErrorBoundary>
        <Routes>
          <Route path={AppRoute.Main} element={<LogInPage />} />
          <Route path={AppRoute.LogIn} element={<LogInPage />} />
          <Route path={AppRoute.SignIn} element={<SignInPage />} />
          <Route path={AppRoute.Any} element={<p>not found</p>} />
        </Routes>
      </ErrorBoundary>
    </main>
  );
}

export default App;
