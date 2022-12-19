import { all } from 'redux-saga/effects';
import { todosSaga } from './todosSaga';

export function* rootSaga() {
  yield all([todosSaga()]);
}
