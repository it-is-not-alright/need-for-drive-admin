import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '~/comp/common/Button/Button';
import { logOut } from '~/src/redux/auth/actions';

function OrdersPage() {
  const dispatch = useDispatch();

  const handleLogOutButtonClick = () => {
    dispatch(logOut());
  };

  return <Button text="Выйти" onClick={handleLogOutButtonClick} />;
}

export default OrdersPage;
