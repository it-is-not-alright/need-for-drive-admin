import React from 'react';

import ErrorPage from '../ErrorPage/ErrorPage';

function NotFoundPage() {
  return (
    <ErrorPage
      code="404"
      title="Страница не найдена"
      message="Возможно, введен некорректный адрес или страница была удалена."
    />
  );
}

export default NotFoundPage;
