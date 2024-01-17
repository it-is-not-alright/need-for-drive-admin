import './style.scss';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import BrandForm from '~/comp/common/BrandForm/BrandForm';
import TextInput from '~/comp/common/TextInput/TextInput';
import { ValueWrapper } from '~/src/validation/types';
import Validator from '~/src/validation/validator';

import { AppRoute } from '../../App/types';
import {
  emailScheme,
  initEmail,
  initPassword,
  passwordScheme,
  signInParam,
} from '../constants';

function LogInPage() {
  const [params] = useSearchParams();
  const [email, setEmail] = useState<ValueWrapper>(initEmail);
  const [password, setPassword] = useState<ValueWrapper>(initPassword);
  const [afterSignIn, setAfterSignIn] = useState<boolean>(false);

  useEffect(() => {
    setAfterSignIn(params.has(signInParam));
  }, [params]);

  const formOnSubmit = () => {
    const validator = new Validator();
    setEmail(validator.check(emailScheme, email));
    setPassword(validator.check(passwordScheme, password));
    if (validator.ok) {
      // Post request
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
      {afterSignIn && (
        <div id="sign-in-message">
          <p className="fs-2">Регистрация успешно пройдена</p>
        </div>
      )}
    </div>
  );
}

export default LogInPage;
