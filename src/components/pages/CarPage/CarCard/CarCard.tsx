import './style.scss';

import React from 'react';

import FileInput from '~/src/components/common/FileInput/FileInput';
import ProgressBar from '~/src/components/common/ProgressBar/ProgressBar';

import { CarCardProps } from './types';

function CarCard({ car }: CarCardProps) {
  return (
    <div className="car-card">
      <div className="car-card__main">
        <img src={car.thumbnail.path} alt={car.name} />
        <h2 className="title">{car.name}</h2>
        <p>{car.categoryId.name}</p>
        <FileInput placeholder="Выберите файл..." />
      </div>
      <div className="car-card__progress">
        <ProgressBar percent={74} />
      </div>
      <div className="car-card__description">
        <h5>Описание</h5>
        <textarea value={car.description} rows={6} onChange={() => {}} />
      </div>
    </div>
  );
}

export default CarCard;
