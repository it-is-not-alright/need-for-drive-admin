import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/comp/App/types';
import AuthForm from '~/comp/common/AuthForm/AuthForm';
import { logIn, setAuthStatus } from '~/src/redux/auth/actions';
import { authSelector } from '~/src/redux/auth/selectors';
import { AuthStatus } from '~/src/redux/auth/types';
import Validator from '~/src/validation/validator';

import { initLogInFormData, logInDataScheme } from './constants';

function LogInPage() {
  const [formData, setFormData] = useState(initLogInFormData);
  const { status } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogInFailure = () => {
    setFormData({
      ...formData,
      password: {
        value: formData.password.value,
        error: 'Неправильное имя пользователя или пароль',
      },
    });
  };

  useEffect(() => {
    if (status === AuthStatus.LogInFailure) {
      handleLogInFailure();
    } else if (status === AuthStatus.LogInSuccess) {
      dispatch(setAuthStatus(AuthStatus.Authorized));
      navigate(AppRoute.Main);
    }
  }, [status]);

  const handleFormSubmit = () => {
    const { data, failure } = Validator.check(formData, logInDataScheme);
    if (failure) {
      setFormData(data);
    } else {
      const user = {
        username: formData.email.value,
        password: formData.password.value,
      };
      dispatch(logIn(user));
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
        pending={status === AuthStatus.Pending}
      />
      {status === AuthStatus.SignUpSuccess && (
        <div id="log-in-page__sign-in-alert">
          <p className="fs-2">Регистрация пройдена успешно</p>
        </div>
      )}
    </div>
  );
}

export default LogInPage;
