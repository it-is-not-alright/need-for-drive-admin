import React from 'react';
import { useDispatch } from 'react-redux';

import { logOutRequest } from '~/src/redux/actions/auth';

import Button from '../../common/Button/Button';

function OrdersPage() {
  const dispatch = useDispatch();

  const handleLogOutButtonClick = () => {
    dispatch(logOutRequest());
  };

  return <Button text="Выйти" onClick={handleLogOutButtonClick} />;
}

export default OrdersPage;
