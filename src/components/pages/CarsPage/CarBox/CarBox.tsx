import './style.scss';

import React from 'react';

import { numberAsCurrencyRange } from '~/src/utils/number';

import { CarBoxProps } from './types';

function CarBox({ car }: CarBoxProps) {
  return (
    <div className="car-box">
      <div className="car-box__img-wrapper">
        <img src={car.thumbnail.path} alt={car.name} />
      </div>
      <p className="car-row__name">{car.name.toUpperCase()}</p>
      <div className="car-box__info-block">
        <div>
          <p>{car.categoryId.name}</p>
          <p>{numberAsCurrencyRange(car.priceMin, car.priceMax)}</p>
        </div>
        <div>
          <p>Бак: {car.tank}%</p>
          <p>{car.number}</p>
        </div>
      </div>
    </div>
  );
}

export default CarBox;
