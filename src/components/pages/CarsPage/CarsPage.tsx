import './style.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '~/src/redux/car/actions';
import { carsSelector } from '~/src/redux/car/selectors';

import DataViewer from '../../common/DataViewer/DataViewer';
import Spinner from '../../common/Spinner/Spinner';
import CarBox from './CarBox/CarBox';
import { defaultParams, pageSize } from './constants';

function CarsPage() {
  const cars = useSelector(carsSelector);
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h1 className="title">Автомобили</h1>
      <DataViewer
        limit={pageSize}
        total={cars.content.count}
        onChange={(params) => dispatch(fetchCars(params))}
        defaultParams={defaultParams}
      >
        <div className="car-grid">
          {cars.content.data.map((car) => (
            <CarBox car={car} />
          ))}
        </div>
      </DataViewer>
      <Spinner isDisplayed={cars.pending} />
    </div>
  );
}

export default CarsPage;
