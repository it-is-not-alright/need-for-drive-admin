import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import RouteUtil from '~/src/route/util';
import { numberAsCurrencyRange } from '~/src/utils/number';

import { CarBoxProps } from './types';

function CarBox({ car }: CarBoxProps) {
  return (
    <Link to={RouteUtil.setId(RouteUtil.car, car.id)} className="car-box">
      <div className="car-box__img-wrapper">
        <img src={car.thumbnail.path} alt={car.name} />
      </div>
      <h3>{car.name.toUpperCase()}</h3>
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
    </Link>
  );
}

export default CarBox;
