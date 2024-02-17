import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';

import FileInput from '~/src/components/common/FileInput/FileInput';
import { FileDetails } from '~/src/components/common/FileInput/types';
import ProgressBar from '~/src/components/common/ProgressBar/ProgressBar';

import { CarCardProps } from './types';

function CarCard({
  percentage,
  name,
  description,
  thumbnail,
  category,
  handleInput,
}: CarCardProps) {
  const [filePending, setFilePending] = useState(false);
  const imageWrapperClass = classNames('car-card__img-wrapper', {
    'car-card__img-wrapper-empty': thumbnail === null,
  });

  const handleFileInputChange = (file: FileDetails, pending: boolean) => {
    setFilePending(pending);
    handleInput('thumbnail', file);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    handleInput('description', event.target.value);
  };

  return (
    <div className="car-card">
      <div className="car-card__main">
        <div className={imageWrapperClass}>
          {thumbnail ? (
            <img src={thumbnail.path} alt={name} />
          ) : (
            <p>Изображение не выбрано</p>
          )}
        </div>
        <h2 className="title">{name || 'Модель не указана'}</h2>
        <p>{category?.name ?? 'Категория не выбрана'}</p>
        <FileInput
          id="image"
          placeholder="Выберите файл..."
          accept="image/gif, image/jpeg, image/png, image/bmp"
          pending={filePending}
          file={thumbnail}
          onChange={handleFileInputChange}
        />
      </div>
      <div className="car-card__progress">
        <ProgressBar percent={percentage} />
      </div>
      <div className="car-card__description">
        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          value={description}
          rows={6}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}

export default CarCard;
