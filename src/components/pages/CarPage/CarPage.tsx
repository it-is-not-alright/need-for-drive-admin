import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createCar, updateCar } from '~/src/api/car/service';
import { fetchCar, resetCar } from '~/src/redux/car/actions';
import { carSelector } from '~/src/redux/car/selectors';
import { fetchCategories } from '~/src/redux/category/actions';
import Validator from '~/src/validation/validator';

import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import Spinner from '../../common/Spinner/Spinner';
import SuccessPopUp from '../../common/SuccessPopUp/SuccessPopUp';
import CarCard from './CarCard/CarCard';
import CarForm from './CarForm/CarForm';
import { initCarFormData, scheme } from './constants';
import { CarPageParams } from './types';

function CarPage() {
  const [backUp, setBackUp] = useState(
    Validator.toValidatable(initCarFormData),
  );
  const [formData, setFormData] = useState(
    Validator.toValidatable(initCarFormData),
  );
  const percentage = Validator.getCompletionPercentage(formData, scheme);
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const [popUpIsDisplayed, setPopUpIsDisplayed] = useState(false);
  const params = useParams<CarPageParams>();
  const car = useSelector(carSelector);
  const dispatch = useDispatch();
  const id = parseInt(params.id, 10) || null;
  const isEdit = id !== null;

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (id !== null) {
      dispatch(fetchCar(id));
    } else {
      dispatch(resetCar());
    }
  }, [id]);

  useEffect(() => {
    setBackUp(Validator.toValidatable(car.content));
    setFormData(Validator.toValidatable(car.content));
  }, [car]);

  const handleInput = (key: string, value: unknown) => {
    setFormData({ ...formData, [key]: { value, error: null } });
  };

  const handleFormSubmit = () => {
    const { data, failure } = Validator.check(formData, scheme);
    if (failure) {
      setFormData(data);
    } else {
      if (isEdit) {
        // в F-9 будет middleware
        updateCar(formData);
      } else {
        // в F-9 будет middleware
        createCar(formData);
      }
      setPopUpIsDisplayed(true);
    }
  };

  const handleCancelButtonClick = () => {
    setModalIsDisplayed(true);
  };

  const handleModalConfirm = (confirmed: boolean) => {
    if (confirmed) {
      setFormData(backUp);
    }
    setModalIsDisplayed(false);
  };

  const handlePopUpHide = () => {
    setPopUpIsDisplayed(false);
  };

  return (
    <>
      <SuccessPopUp
        message="Данные сохранены"
        isDisplayed={popUpIsDisplayed}
        onHide={handlePopUpHide}
      />
      <div className="page" id="car-page">
        <h1 className="title">Карточка автомобиля</h1>
        <div id="car-page__main">
          <CarCard
            percentage={percentage}
            formData={formData}
            onInput={handleInput}
          />
          <CarForm
            formData={formData}
            onInput={handleInput}
            onSubmit={handleFormSubmit}
            onCancel={handleCancelButtonClick}
          />
        </div>
        <Spinner isDisplayed={car.pending} />
        <ConfirmationModal
          title="Отмена изменений"
          message="Вы действительно хотите отменить внесенные изменения?"
          confirmLabel="Отменить"
          cancelLabel="Назад"
          isDisplayed={modalIsDisplayed}
          onResponse={handleModalConfirm}
        />
      </div>
    </>
  );
}

export default CarPage;
