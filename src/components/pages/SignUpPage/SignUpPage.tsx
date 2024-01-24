import './style.scss';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/comp/App/types';
import validate from '~/src/validation/validate';

import AuthForm from '../../common/AuthForm/AuthForm';
import { SIGN_UP_PARAM } from '../constants';
import { initSignUpFormData, signUpDataScheme } from './constants';

function SignUpPage() {
  const [formData, setFormData] = useState(initSignUpFormData);
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    const confirmPattern = new RegExp(`^${formData.password.value}$`);
    signUpDataScheme.passwordConfirm.pattern.target = confirmPattern;
    const { data, failure } = validate(formData, signUpDataScheme);
    if (failure) {
      setFormData(data);
    } else {
      const url = `${AppRoute.LogIn}?${SIGN_UP_PARAM}=true`;
      navigate(url);
    }
  };

  const handleInputChange = (value: string, prop: string) => {
    setFormData({
      ...formData,
      [prop]: { value, error: '' },
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
