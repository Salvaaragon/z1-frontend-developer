import { all } from 'redux-saga/effects';
import imageSagas from './image';

export default function* rootSaga() {
  yield all([imageSagas()]);
}
