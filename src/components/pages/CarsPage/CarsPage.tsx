import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '~/src/redux/car/actions';
import { carsSelector } from '~/src/redux/car/selectors';

function CarsPage() {
  const cars = useSelector(carsSelector);
  const dispatch = useDispatch();
  console.log(cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <div className="page">
      <h1 className="title">Автомобили</h1>
      {cars.content.data.map((car) => (
        <p key={car.id}>{car.name}</p>
      ))}
    </div>
  );
}

export default CarsPage;
