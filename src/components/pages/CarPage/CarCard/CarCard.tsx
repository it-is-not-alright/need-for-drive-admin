import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';

import { FileDetails } from '~/src/components/common/FileInput/types';
import FormFileInput from '~/src/components/common/FormFileInput/FormFileInput';
import ProgressBar from '~/src/components/common/ProgressBar/ProgressBar';

import { CarCardProps } from './types';

function CarCard({ percentage, formData, onInput }: CarCardProps) {
  const [filePending, setFilePending] = useState(false);
  const imageWrapperClass = classNames('car-card__img-wrapper', {
    'car-card__img-wrapper-empty': formData.thumbnail.value === null,
  });

  const handleFileInputChange = (file: FileDetails, pending: boolean) => {
    setFilePending(pending);
    onInput('thumbnail', file);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    onInput('description', event.target.value);
  };

  return (
    <div className="car-card">
      <div className="car-card__main">
        <div className={imageWrapperClass}>
          {formData.thumbnail.value ? (
            <img
              src={formData.thumbnail.value.path}
              alt={formData.name.value}
            />
          ) : (
            <p>Изображение не выбрано</p>
          )}
        </div>
        <h2 className="title">{formData.name.value || 'Модель не указана'}</h2>
        <p>{formData.category.value?.name ?? 'Категория не выбрана'}</p>
        <FormFileInput
          id="image"
          placeholder="Выберите файл..."
          accept="image/gif, image/jpeg, image/png, image/bmp"
          pending={filePending}
          file={formData.thumbnail.value}
          onChange={handleFileInputChange}
          error={formData.thumbnail.error}
        />
      </div>
      <div className="car-card__progress">
        <ProgressBar percent={percentage} />
      </div>
      <div className="car-card__description">
        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          value={formData.description.value}
          rows={6}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}

export default CarCard;
