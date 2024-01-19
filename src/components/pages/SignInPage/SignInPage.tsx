import './style.scss';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ValueWrapper } from '~/src/validation/types';
import Validator from '~/src/validation/validator';

import { AppRoute } from '../../App/types';
import BrandForm from '../../common/BrandForm/BrandForm';
import TextInput from '../../common/TextInput/TextInput';
import {
  emailScheme,
  initEmail,
  initPassword,
  passwordConfirmScheme,
  passwordScheme,
  SIGN_IN_PARAM,
} from '../constants';

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<ValueWrapper>(initEmail);
  const [password, setPassword] = useState<ValueWrapper>(initPassword);
  const [passwordConfirm, setPasswordConfirm] =
    useState<ValueWrapper>(initPassword);

  const formOnSubmit = () => {
    const validator = new Validator();
    setEmail(validator.check(emailScheme, email));
    setPassword(validator.check(passwordScheme, password));
    passwordConfirmScheme.pattern.target = new RegExp(`^${password.value}$`);
    setPasswordConfirm(validator.check(passwordConfirmScheme, passwordConfirm));
    if (validator.ok) {
      const url = `${AppRoute.LogIn}?${SIGN_IN_PARAM}=true`;
      navigate(url);
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

  const handlePasswordConfirmChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPasswordConfirm(prepare(event.target.value));
  };

  return (
    <div id="sign-in-page" className="page">
      <BrandForm
        title="Регистрация"
        linkLabel="Вход"
        linkHref={AppRoute.LogIn}
        buttonLabel="Зарегистрироваться"
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
        <TextInput
          title="Подтвердите пароль"
          isSecure
          value={passwordConfirm.value}
          error={passwordConfirm.error}
          onChange={handlePasswordConfirmChange}
        />
      </BrandForm>
    </div>
  );
}

export default SignInPage;
