import './style.scss';

import React from 'react';

import { FileInputProps } from './types';

function FileInput({ placeholder }: FileInputProps) {
  return (
    <div className="file-input">
      <p>{placeholder}</p>
      <button type="button">
        Обзор
        <input type="file" />
      </button>
    </div>
  );
}

export default FileInput;
