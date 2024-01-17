import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Button from '~/comp/common/Button/Button';

import Icon from '../Icon/Icon';
import { BrandFormProps } from './types';

function BrandForm({
  title,
  children,
  linkLabel,
  linkHref,
  buttonLabel,
  onSubmit,
}: BrandFormProps) {
  return (
    <form className="brand-form">
      <div className="brand-form__logo">
        <Icon id="logo" width="45" height="45" />
        <p className="blue-gray fs-4">Need for drive</p>
      </div>
      <div className="brand-form__body">
        <div className="brand-form__body__header blue-gray fs-3">{title}</div>
        <div className="brand-form__body__main">{children}</div>
        <div className="brand-form__body__footer">
          <Link to={linkHref}>{linkLabel}</Link>
          <Button text={buttonLabel} onClick={onSubmit} />
        </div>
      </div>
    </form>
  );
}

export default BrandForm;
