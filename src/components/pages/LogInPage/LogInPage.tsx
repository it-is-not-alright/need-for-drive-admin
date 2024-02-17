import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from '~/comp/common/AuthForm/AuthForm';
import { requestLogIn, setAuthStatus } from '~/src/redux/auth/actions';
import { authSelector } from '~/src/redux/auth/selectors';
import { AuthStatus } from '~/src/redux/auth/types';
import RouteUtil from '~/src/route/util';
import Validator from '~/src/validation/validator';

import { initData, scheme } from './constants';

function LogInPage() {
  const [formData, setFormData] = useState(Validator.toValidatable(initData));
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
      navigate(RouteUtil.main.path);
    }
  }, [status]);

  const handleFormSubmit = () => {
    const { data, failure } = Validator.check(formData, scheme);
    if (failure) {
      setFormData(data);
    } else {
      const user = {
        username: formData.email.value,
        password: formData.password.value,
      };
      dispatch(requestLogIn(user));
    }
  };

  const handleInputChange = (value: string, prop: string) => {
    setFormData({
      ...formData,
      [prop]: { value: value.trim(), error: null },
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
