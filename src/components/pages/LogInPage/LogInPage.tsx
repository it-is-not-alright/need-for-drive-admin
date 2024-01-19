import './style.scss';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import BrandForm from '~/comp/common/BrandForm/BrandForm';
import TextInput from '~/comp/common/TextInput/TextInput';
import { logInRequest, logInReset } from '~/src/redux/actions/auth';
import { authSelector } from '~/src/redux/selectors/auth';
import { ValueWrapper } from '~/src/validation/types';
import Validator from '~/src/validation/validator';

import { AppRoute } from '../../App/types';
import {
  emailScheme,
  initEmail,
  initPassword,
  passwordScheme,
  SIGN_IN_PARAM,
} from '../constants';

function LogInPage() {
  const [email, setEmail] = useState<ValueWrapper>(initEmail);
  const [password, setPassword] = useState<ValueWrapper>(initPassword);
  const authState = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const showSignInAlert = params.get(SIGN_IN_PARAM) === 'true';

  useEffect(() => {
    dispatch(logInReset());
  }, []);

  useEffect(() => {
    if (authState.error && authState.error !== '401') {
      dispatch(logInReset());
      throw new Error(authState.error);
    } else if (authState.data) {
      dispatch(logInReset());
      navigate(AppRoute.Orders);
    }
  }, [authState]);

  const formOnSubmit = () => {
    const validator = new Validator();
    setEmail(validator.check(emailScheme, email));
    setPassword(validator.check(passwordScheme, password));
    if (validator.ok) {
      const user = { username: email.value, password: password.value };
      dispatch(logInRequest(user));
    }
  };

  const prepare = (value: string): ValueWrapper => {
    return { value: value.trim(), error: '' };
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(prepare(event.target.value));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(prepare(event.target.value));
  };

  return (
    <div id="log-in-page" className="page">
      <BrandForm
        title="Вход"
        linkLabel="Регистрация"
        linkHref={AppRoute.SignIn}
        buttonLabel="Войти"
        onSubmit={formOnSubmit}
        pending={authState.pending}
      >
        <TextInput
          title="Почта"
          value={email.value}
          error={email.error}
          onChange={handleEmailChange}
        />
        <TextInput
          title="Пароль"
          isSecure
          value={password.value}
          error={password.error}
          onChange={handlePasswordChange}
        />
      </BrandForm>
      {(showSignInAlert || authState.error) && (
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
