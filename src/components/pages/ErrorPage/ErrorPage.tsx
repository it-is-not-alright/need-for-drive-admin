import './style.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../App/types';
import Button from '../../common/Button/Button';
import { ErrorPageProps } from './types';

function ErrorPage({ status, title, message, reset }: ErrorPageProps) {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    reset?.();
    navigate(AppRoute.Main);
  };

  return (
    <div className="page error-page">
      <div>
        <h1>{status}</h1>
        <h2 className="police-blue">{title}</h2>
        <p>{message}</p>
        <Button text="На главную" onClick={handleHomeButtonClick} />
      </div>
    </div>
  );
}

export default ErrorPage;