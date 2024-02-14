import './style.scss';

import React, { useState } from 'react';

import Button from '../../common/Button/Button';
import { ButtonStyle } from '../../common/Button/types';
import FormSelect from '../../common/FormSelect/FormSelect';
import FormTextInput from '../../common/FormTextInput/FormTextinput';
import StringArrayEditor from '../../common/StringArrayEditor/StringArrayEditor';
import CarCard from './CarCard/CarCard';
import { carRaw } from './constants';

function CarPage() {
  const [car, setCar] = useState(carRaw);

  const handleColorsChange = (colors: string[]) => {
    setCar({ ...car, colors });
  };

  return (
    <div className="page" id="car-page">
      <h1 className="title">Карточка автомобиля</h1>
      <div id="car-page__main">
        <CarCard car={car} />
        <div id="car-details">
          <h3>Настройки автомобиля</h3>
          <div id="car-details__input-block">
            <FormTextInput
              id="model"
              value={car.name}
              onChange={() => {}}
              label="Модель автомобиля"
            />
            <FormSelect
              id="category"
              items={[]}
              placeholder="Не выбрано"
              selectedItem={null}
              onChange={() => {}}
              label="Тип автомобиля"
            />
            <StringArrayEditor
              id="color"
              label="Доступные цвета"
              array={car.colors}
              onChange={handleColorsChange}
            />
          </div>
          <div id="car-details__btn-block">
            <div>
              <Button text="Сохранить" onClick={() => {}} />
              <Button
                text="Отменить"
                onClick={() => {}}
                style={ButtonStyle.Secondary}
              />
            </div>
            <div>
              <Button
                text="Удалить"
                onClick={() => {}}
                style={ButtonStyle.Danger}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPage;
