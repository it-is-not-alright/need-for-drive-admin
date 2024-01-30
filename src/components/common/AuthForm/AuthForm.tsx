import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import RouteUtil from '~/src/route/util';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import TextInput from '../TextInput/TextInput';
import { AuthFormProps } from './types';

function AuthForm({
  onSubmit,
  email,
  password,
  passwordConfirm,
  onInputChange,
  pending = false,
}: AuthFormProps) {
  const isSignUp = passwordConfirm !== undefined;

  return (
    <form className="auth-form">
      <div className="auth-form__logo">
        <Icon id="logo" width="45" height="45" />
        <p className="police-blue">Need for drive</p>
      </div>
      <div className="auth-form__body">
        <div className="auth-form__header police-blue">
          {isSignUp ? 'Регистрация' : 'Вход'}
        </div>
        <div className="auth-form__main">
          <TextInput
            id="email"
            title="Почта"
            value={email.value}
            error={email.error}
            onChange={(value) => onInputChange(value, 'email')}
            maxLength={150}
            autoComplete={isSignUp ? 'off' : 'email'}
          />
          <TextInput
            id={isSignUp ? 'new-password' : 'current-password'}
            title="Пароль"
            value={password.value}
            error={password.error}
            onChange={(value) => onInputChange(value, 'password')}
            isSecure
            maxLength={150}
            autoComplete={isSignUp ? 'off' : 'current-password'}
          />
          {isSignUp && (
            <TextInput
              id="password-confirm"
              title="Подтвердите пароль"
              value={passwordConfirm.value}
              error={passwordConfirm.error}
              onChange={(value) => onInputChange(value, 'passwordConfirm')}
              isSecure
              maxLength={150}
            />
          )}
        </div>
        <div className="auth-form__footer">
          <Link to={isSignUp ? RouteUtil.logIn.path : RouteUtil.signUp.path}>
            {isSignUp ? 'Вход' : 'Регистрация'}
          </Link>
          <Button
            text={isSignUp ? 'Отправить' : 'Войти'}
            onClick={onSubmit}
            pending={pending}
          />
        </div>
      </div>
    </form>
  );
}

export default AuthForm;
