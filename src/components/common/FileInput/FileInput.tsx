import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { numberAsSize } from '~/src/utils/number';

import { FileInputProps } from './types';

function FileInput({
  id,
  placeholder,
  accept,
  file,
  pending,
  onChange,
  isInvalid,
}: FileInputProps) {
  const classes = classNames('file-input', {
    'file-input-pending': pending,
    'file-input-invalid': isInvalid,
  });

  const getURL = (blob: Blob) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const url = event.target.result as string;
      onChange({ path: url, size: blob.size }, false);
    });
    onChange(file, true);
    reader.readAsDataURL(blob);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files.length === 1) {
      getURL(event.target.files[0]);
    }
  };

  return (
    <div className={classes}>
      <p className="file-input__size">
        {file ? numberAsSize(file.size) : placeholder}
      </p>
      <button type="button">
        <p>Обзор</p>
        <input id={id} type="file" onChange={handleChange} accept={accept} />
      </button>
    </div>
  );
}

export default FileInput;
