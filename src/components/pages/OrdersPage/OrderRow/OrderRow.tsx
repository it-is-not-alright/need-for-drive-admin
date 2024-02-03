import './style.scss';

import React, { useMemo } from 'react';

import ButtonGroup from '~/src/components/common/ButtonGroup/ButtonGroup';
import CheckboxGroup from '~/src/components/common/CheckboxGroup/CheckboxGroup';
import { CheckboxGroupMap } from '~/src/components/common/CheckboxGroup/types';
import DateUtil from '~/src/util/date';
import NumberUtil from '~/src/util/number';

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
        <span>{raw.carId.name}</span> в <span>{raw.cityId.name}</span>,{' '}
        {raw.pointId.address} <br />
        {DateUtil.toString(new Date(Number(raw.dateFrom)))} -{' '}
        {DateUtil.toString(new Date(Number(raw.dateTo)))} <br />
        Цвет: <span>{raw.color}</span>
      </p>
      <CheckboxGroup name={`${raw.id}-service`} map={checkboxMap} isReadOnly />
      <p className="order-row__price">{NumberUtil.asCurrency(raw.price)}</p>
      <ButtonGroup items={buttonGroupItems} />
    </div>
  );
}

export default OrderRow;
