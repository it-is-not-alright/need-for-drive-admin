import './style.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/src/components/common/Button/Button';
import { ButtonStyle } from '~/src/components/common/Button/types';
import FormNumberInput from '~/src/components/common/FormNumberInput/FormNumberInput';
import FormSelect from '~/src/components/common/FormSelect/FormSelect';
import FormTextInput from '~/src/components/common/FormTextInput/FormTextinput';
import StringArrayEditor from '~/src/components/common/StringArrayEditor/StringArrayEditor';
import { fetchCategories } from '~/src/redux/category/actions';
import { categoriesSelector } from '~/src/redux/category/selectors';

import { CarFormProps } from './types';

function CarForm({ formData, onInput, onSubmit, onCancel }: CarFormProps) {
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  const isEdit = formData.id.value !== null;

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="car-form">
      <h3>Настройки автомобиля</h3>
      <div className="car-form__input-block">
        <FormTextInput
          id="model"
          value={formData.name.value}
          onChange={(value) => onInput('name', value)}
          label="Модель"
          error={formData.name.error}
          maxLength={150}
        />
        <FormSelect
          id="category"
          items={categories.content.data}
          placeholder="Не выбрано"
          selectedItem={formData.category.value}
          onChange={(item) => onInput('category', item)}
          label="Категория"
          error={formData.category.error}
        />
        <FormNumberInput
          id="min-price"
          unit="₽"
          value={formData.priceMin.value}
          onChange={(value) => onInput('priceMin', value)}
          label="Минимальная стоимость"
          error={formData.priceMin.error}
        />
        <FormNumberInput
          id="max-price"
          unit="₽"
          value={formData.priceMax.value}
          onChange={(value) => onInput('priceMax', value)}
          label="Максимальная стоимость"
          error={formData.priceMax.error}
        />
        <FormNumberInput
          id="tank"
          unit="%"
          value={formData.tank.value}
          onChange={(value) => onInput('tank', value)}
          max={100}
          label="Уровень топлива"
          error={formData.tank.error}
        />
        <FormTextInput
          id="number"
          value={formData.number.value}
          onChange={(value) => onInput('number', value)}
          maxLength={150}
          label="Номер"
          error={formData.number.error}
        />
        <StringArrayEditor
          id="color"
          array={formData.colors.value}
          onChange={(array) => onInput('colors', array)}
          label="Доступные цвета"
          error={formData.colors.error}
        />
      </div>
      <div className="car-form__btn-block">
        <div>
          <Button text="Сохранить" onClick={onSubmit} />
          <Button
            text="Отменить"
            onClick={onCancel}
            style={ButtonStyle.Secondary}
          />
        </div>
        {isEdit && (
          <div>
            <Button
              text="Удалить"
              onClick={() => {}}
              style={ButtonStyle.Danger}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CarForm;
