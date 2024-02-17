import { call, put, takeLatest } from 'redux-saga/effects';

import { getCategories } from '~/src/api/category/service';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setCategories } from './actions';
import { CATEGORIES_REQUESTED } from './constants';

function* categoriesWorker(): Generator {
  try {
    const result: Awaited<ReturnType<typeof getCategories>> =
      yield call(getCategories);
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setCategories(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* categoriesWatcher(): Generator {
  yield takeLatest(CATEGORIES_REQUESTED, categoriesWorker);
}

export { categoriesWatcher };
