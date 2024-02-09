import React from 'react';

import { cars } from './constants';

function CarsPage() {
  return (
    <div className="page">
      {cars.map((car) => (
        <p key={car}>{car}</p>
      ))}
    </div>
  );
}

export default CarsPage;
