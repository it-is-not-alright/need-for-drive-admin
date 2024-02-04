import './style.scss';

import React, { useMemo } from 'react';

import ButtonGroup from '~/src/components/common/ButtonGroup/ButtonGroup';
import CheckboxGroup from '~/src/components/common/CheckboxGroup/CheckboxGroup';
import { CheckboxGroupMap } from '~/src/components/common/CheckboxGroup/types';
import { dateToString } from '~/src/utils/date';
import { numberAsCurrency } from '~/src/utils/number';

import { buttonGroupItems } from './constants';
import { OrderRowProps } from './types';

function OrderRow({ raw }: OrderRowProps) {
  const checkboxMap: CheckboxGroupMap = useMemo(() => {
    return {
      tank: {
        checked: raw.isFullTank,
        label: 'Полный бак',
      },
      chair: {
        checked: raw.isNeedChildChair,
        label: 'Детское кресло',
      },
      wheel: {
        checked: raw.isRightWheel,
        label: 'Правый руль',
      },
    };
  }, [raw]);

  return (
    <div className="order-row">
      <img src={raw.carId.thumbnail.path} alt={raw.carId.name} />
      <p className="order-row__text-block">
        <span>{raw.carId.name.toUpperCase()}</span> в{' '}
        <span>{raw.cityId.name}</span>, {raw.pointId.address} <br />
        {dateToString(new Date(Number(raw.dateFrom)))} -{' '}
        {dateToString(new Date(Number(raw.dateTo)))} <br />
        Цвет: <span>{raw.color}</span>
      </p>
      <div className="checkbox-wrapper">
        <CheckboxGroup
          name={`${raw.id}-service`}
          map={checkboxMap}
          isDisabled
        />
      </div>
      <p className="order-row__price">{numberAsCurrency(raw.price)}</p>
      <ButtonGroup items={buttonGroupItems} />
    </div>
  );
}

export default OrderRow;
