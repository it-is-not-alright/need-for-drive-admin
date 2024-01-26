import './style.scss';

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Validator from '~/src/validation/validator';

import AuthForm from '../../common/AuthForm/AuthForm';
import { SIGN_UP_PARAM } from '../constants';
import { initLogInFormData, logInDataScheme } from './constants';

function LogInPage() {
  const [formData, setFormData] = useState(initLogInFormData);
  const [params] = useSearchParams();
  const signUpIsSuccess = params.get(SIGN_UP_PARAM) === 'true';

  const handleFormSubmit = () => {
    const { data, failure } = Validator.check(formData, logInDataScheme);
    if (failure) {
      setFormData(data);
    } else {
      // post request
    }
  };

  const handleInputChange = (value: string, prop: string) => {
    setFormData({
      ...formData,
      [prop]: { value: value.trim(), error: '' },
    });
  };

  return (
    <div id="log-in-page" className="page">
      <AuthForm
        onSubmit={handleFormSubmit}
        email={formData.email}
        password={formData.password}
        onInputChange={handleInputChange}
      />
      {signUpIsSuccess && (
        <div id="log-in-page__sign-up-alert">
          <p className="fs-2">Регистрация пройдена успешно</p>
        </div>
      )}
    </div>
  );
}

export default LogInPage;
