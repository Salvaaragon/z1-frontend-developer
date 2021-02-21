import { combineReducers } from 'redux';
import { ImageReducer } from './image';

export const rootReducer = combineReducers({
  imageState: ImageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
