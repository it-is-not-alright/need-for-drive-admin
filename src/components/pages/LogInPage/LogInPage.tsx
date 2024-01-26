import './style.scss';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/comp/App/types';
import AuthForm from '~/comp/common/AuthForm/AuthForm';
import { authClear, logInRequest } from '~/src/redux/actions/auth';
import { authSelector } from '~/src/redux/selectors/auth';
import Validator from '~/src/validation/validator';

import { initLogInFormData, logInDataScheme } from './constants';

function LogInPage() {
  const [formData, setFormData] = useState(initLogInFormData);
  const authState = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.logInSuccess) {
      dispatch(authClear());
      navigate(AppRoute.Main);
    }
  }, [authState]);

  const handleFormSubmit = () => {
    const { data, failure } = Validator.check(formData, logInDataScheme);
    if (failure) {
      setFormData(data);
    } else {
      const user = {
        username: formData.email.value,
        password: formData.password.value,
      };
      dispatch(logInRequest(user));
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
        pending={authState.pending}
      />
      {(authState.signUpSuccess || authState.error) && (
        <div
          id="log-in-page__alert"
          className={classNames({ error: authState.error })}
        >
          <p className="fs-2">
            {authState.error
              ? 'Неправильное имя пользователя или пароль. Попробуйте еще раз.'
              : 'Регистрация пройдена успешно.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default LogInPage;
