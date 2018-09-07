import { combineReducers } from 'redux';

import catalogReducer from './catalog';
import { IRootState } from './state';

export { IRootState };

export const rootReducer = combineReducers<IRootState>({
    catalog: catalogReducer as any,
});