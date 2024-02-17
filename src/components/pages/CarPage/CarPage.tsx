import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCategories } from '~/src/redux/category/actions';
import { categoriesSelector } from '~/src/redux/category/selectors';
import Validator from '~/src/validation/validator';

import Button from '../../common/Button/Button';
import { ButtonStyle } from '../../common/Button/types';
import FormNumberInput from '../../common/FormNumberInput/FormNumberInput';
import FormSelect from '../../common/FormSelect/FormSelect';
import FormTextInput from '../../common/FormTextInput/FormTextinput';
import StringArrayEditor from '../../common/StringArrayEditor/StringArrayEditor';
import CarCard from './CarCard/CarCard';
import { initData, scheme } from './constants';
import { CarPageParams } from './types';

function CarPage() {
  const [formData, setFormData] = useState(Validator.toValidatable(initData));
  const percentage = Validator.getCompletionPercentage(formData, scheme);
  const params = useParams<CarPageParams>();
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  const id = parseInt(params.id, 10) || null;
  const isEdit = id !== null;

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleInput = (key: string, value: unknown) => {
    setFormData({ ...formData, [key]: { value, error: null } });
  };

  const handleFormSubmit = () => {
    const { data, failure } = Validator.check(formData, scheme);
    if (failure) {
      setFormData(data);
    }
  };

  return (
    <div className="page" id="car-page">
      <h1 className="title">Карточка автомобиля</h1>
      <div id="car-page__main">
        <CarCard
          percentage={percentage}
          name={formData.name.value}
          description={formData.description.value}
          thumbnail={formData.thumbnail.value}
          category={formData.categoryId.value}
          handleInput={handleInput}
        />
        <div id="car-details">
          <h3>Настройки автомобиля</h3>
          <div id="car-details__input-block">
            <FormTextInput
              id="model"
              value={formData.name.value}
              onChange={(value) => handleInput('name', value)}
              label="Модель"
              error={formData.name.error}
              maxLength={150}
            />
            <FormSelect
              id="category"
              items={categories.content.data}
              placeholder="Не выбрано"
              selectedItem={formData.categoryId.value}
              onChange={(item) => handleInput('categoryId', item)}
              label="Категория"
              error={formData.categoryId.error}
            />
            <FormNumberInput
              id="min-price"
              unit="₽"
              value={formData.priceMin.value}
              onChange={(value) => handleInput('priceMin', value)}
              label="Минимальная стоимость"
              error={formData.priceMin.error}
            />
            <FormNumberInput
              id="max-price"
              unit="₽"
              value={formData.priceMax.value}
              onChange={(value) => handleInput('priceMax', value)}
              label="Максимальная стоимость"
              error={formData.priceMax.error}
            />
            <FormNumberInput
              id="tank"
              unit="%"
              value={formData.tank.value}
              onChange={(value) => handleInput('tank', value)}
              max={100}
              label="Уровень топлива"
              error={formData.tank.error}
            />
            <FormTextInput
              id="number"
              value={formData.number.value}
              onChange={(value) => handleInput('number', value)}
              maxLength={150}
              label="Номер"
              error={formData.number.error}
            />
            <StringArrayEditor
              id="color"
              label="Доступные цвета"
              array={formData.colors.value}
              onChange={(array) => handleInput('colors', array)}
            />
          </div>
          <div id="car-details__btn-block">
            <div>
              <Button
                text="Сохранить"
                onClick={handleFormSubmit}
                isDisabled={percentage !== 100}
              />
              <Button
                text="Отменить"
                onClick={() => {}}
                style={ButtonStyle.Secondary}
              />
            </div>
            {isEdit && (
              <div>
                <Button
                  text="Удалить"
                  onClick={() => {}}
                  style={ButtonStyle.Danger}
                  isDisabled={percentage !== 100}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPage;
