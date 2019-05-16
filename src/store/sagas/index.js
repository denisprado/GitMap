import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

import { Types as DeveloperTypes } from '../ducks/developers';
import { addDeveloper } from './developers';

export default function* rootSaga() {
  yield all([
    takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite),
    takeLatest(DeveloperTypes.ADD_REQUEST, addDeveloper),
  ]);
}
