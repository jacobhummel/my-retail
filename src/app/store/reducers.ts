import { combineReducers } from 'redux';

import catalogReducer from '../catalog/reducers';
import { IRootState } from './state';

export const rootReducer = combineReducers<IRootState>({
    catalog: catalogReducer as any,
});