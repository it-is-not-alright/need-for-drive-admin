import './style.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import { fetchPoints } from '~/src/redux/point/actions';
import { pointsSelector } from '~/src/redux/point/selectors';

import DataViewer from '../../common/DataViewer/DataViewer';
import Spinner from '../../common/Spinner/Spinner';
import { defaultParams, pageSize } from './constants';

function PointsPage() {
  const points = useSelector(pointsSelector);

  return (
    <div className="page">
      <h1 className="title">Пункты выдачи</h1>
      <DataViewer
        limit={pageSize}
        total={points.content.count}
        fetchData={fetchPoints}
        defaultParams={defaultParams}
      >
        <div className="point-table-wrapper">
          <table>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Название</th>
                <th scope="col">Адрес</th>
                <th scope="col">Город</th>
              </tr>
            </thead>
            <tbody>
              {points.content.data.map((point) => (
                <tr key={point.id}>
                  <th scope="row">{point.id}</th>
                  <td>{point.name}</td>
                  <td>{point.address}</td>
                  <td>{point.cityId.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DataViewer>
      <Spinner isDisplayed={points.pending} />
    </div>
  );
}

export default PointsPage;
