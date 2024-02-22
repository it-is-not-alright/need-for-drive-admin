import './style.scss';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setAuthStatus } from '~/src/redux/auth/actions';
import { AuthStatus } from '~/src/redux/auth/types';
import RouteUtil from '~/src/route/util';
import Validator from '~/src/validation/validator';

import AuthForm from '../../common/AuthForm/AuthForm';
import { initData, scheme } from './constants';

function SignUpPage() {
  const [formData, setFormData] = useState(Validator.toValidatable(initData));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    scheme.passwordConfirm.equals(
      formData.password.value,
      'Пароли не совпадают',
    );
    const { data, failure } = Validator.check(formData, scheme);
    if (failure) {
      setFormData(data);
    } else {
      dispatch(setAuthStatus(AuthStatus.SignUpSuccess));
      navigate(RouteUtil.logIn.path);
    }
  };

  const handleInputChange = (value: string, prop: string) => {
    setFormData({
      ...formData,
      [prop]: { value: value.trim(), error: null },
    });
  };

  return (
    <div id="sign-up-page" className="page">
      <AuthForm
        onSubmit={handleFormSubmit}
        email={formData.email}
        password={formData.password}
        onInputChange={handleInputChange}
        passwordConfirm={formData.passwordConfirm}
      />
    </div>
  );
}

export default SignUpPage;
