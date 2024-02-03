import React from 'react';

import ErrorPage from '../ErrorPage/ErrorPage';

function NotFoundPage() {
  return (
    <ErrorPage
      status={404}
      message="Страница не найдена"
      tip="Возможно, введен некорректный адрес или страница была удалена."
    />
  );
}

export default NotFoundPage;
