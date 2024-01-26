import './style.scss';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/comp/App/types';
import Validator from '~/src/validation/validator';

import AuthForm from '../../common/AuthForm/AuthForm';
import { SIGN_UP_PARAM } from '../constants';
import { initSignUpFormData, signUpDataScheme } from './constants';

function SignUpPage() {
  const [formData, setFormData] = useState(initSignUpFormData);
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    signUpDataScheme.passwordConfirm.equals(
      formData.password.value,
      'Пароли не совпадают',
    );
    const { data, failure } = Validator.check(formData, signUpDataScheme);
    if (failure) {
      setFormData(data);
    } else {
      navigate(`${AppRoute.LogIn}?${SIGN_UP_PARAM}=true`);
    }
  };

  const handleInputChange = (value: string, prop: string) => {
    setFormData({
      ...formData,
      [prop]: { value: value.trim(), error: '' },
    });
  };

  return (
    <div id="sign-up-page" className="page">
      <AuthForm
        onSubmit={handleFormSubmit}
        email={formData.email}
        password={formData.password}
        passwordConfirm={formData.passwordConfirm}
        onInputChange={handleInputChange}
      />
    </div>
  );
}

export default SignUpPage;
