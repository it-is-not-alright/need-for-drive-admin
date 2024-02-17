import './style.scss';

import React, { useMemo, useState } from 'react';

import { isNotEmpty } from '~/src/utils/general';

import { CheckboxStyle } from '../CheckboxGroup/Checkbox/types';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import { CheckboxGroupMap } from '../CheckboxGroup/types';
import FormControlWrapper from '../FormControlWrapper/FormControlWrapper';
import Icon from '../Icon/Icon';
import TextInput from '../TextInput/TextInput';
import { StringArrayEditorProps } from './types';

function StringArrayEditor({
  id,
  array,
  onChange,
  label,
  error,
}: StringArrayEditorProps) {
  const [value, setValue] = useState('');
  const inputId = `${id}__input`;

  const checkboxMap: CheckboxGroupMap = useMemo(() => {
    const map: CheckboxGroupMap = {};
    array.forEach((item) => {
      map[item] = { checked: true, label: item };
    });
    return map;
  }, [array]);

  const handleInputChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleAddButtonClick = () => {
    onChange([...array, value]);
  };

  const handleDelete = (key: string) => {
    onChange(array.filter((item) => item !== key));
  };

  return (
    <div id={id} className="string-array-editor">
      <FormControlWrapper id={inputId} label={label} error={error}>
        <div className="string-array-editor__input-wrapper">
          <TextInput
            id={inputId}
            value={value}
            onChange={handleInputChange}
            isInvalid={isNotEmpty(error)}
          />
          <button
            type="button"
            aria-label="add"
            disabled={value === '' || checkboxMap[value] !== undefined}
            onClick={handleAddButtonClick}
          >
            <Icon id="plus" />
          </button>
        </div>
      </FormControlWrapper>
      <div className="string-array-editor__checkbox-group-wrapper">
        <CheckboxGroup
          name={`${id}__group`}
          map={checkboxMap}
          onChange={handleDelete}
          style={CheckboxStyle.Blue}
        />
      </div>
    </div>
  );
}

export default StringArrayEditor;
