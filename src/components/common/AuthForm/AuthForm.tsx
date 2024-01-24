import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../App/types';
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
}: AuthFormProps) {
  const isSignUp = passwordConfirm !== undefined;

  return (
    <form className="auth-form">
      <div className="auth-form__logo">
        <Icon id="logo" width="45" height="45" />
        <p className="police-blue fs-4">Need for drive</p>
      </div>
      <div className="auth-form__body">
        <div className="auth-form__header police-blue fs-3">
          {isSignUp ? 'Регистрация' : 'Вход'}
        </div>
        <div className="auth-form__main">
          <TextInput
            title="Почта"
            value={email.value}
            error={email.error}
            onChange={(value) => onInputChange(value, 'email')}
            maxLength={150}
          />
          <TextInput
            title="Пароль"
            value={password.value}
            error={password.error}
            onChange={(value) => onInputChange(value, 'password')}
            isSecure
            maxLength={150}
          />
          {isSignUp && (
            <TextInput
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
          <Link to={isSignUp ? AppRoute.LogIn : AppRoute.SignUp}>
            {isSignUp ? 'Вход' : 'Регистрация'}
          </Link>
          <Button text={isSignUp ? 'Отправить' : 'Войти'} onClick={onSubmit} />
        </div>
      </div>
    </form>
  );
}

export default AuthForm;
