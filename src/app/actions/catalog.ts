import { Action, ActionCreator } from 'redux';

import { catalog } from '../../api';
import { ICatalogEntryView } from '../../interfaces/item';

const PREFIX = 'CATALOG';

export const FETCH_CATALOG = `${PREFIX}_FETCH_CATALOG`;
export const fetchCatalog = () => {
    return (dispatch: Function) => {
        catalog.retrieve()
            .then(response => dispatch(fetchCatalogSuccess(response.data)))
            .catch(err => dispatch(fetchCatalogFailure(err.message)))
    }
};

export const FETCH_CATALOG_SUCCESS: string = `${PREFIX}_FETCH_CATALOG_SUCCESS`;
const fetchCatalogSuccess: ActionCreator<Action> = (results: ICatalogEntryView[]) => ({
    type: FETCH_CATALOG_SUCCESS,
    payload: {
        results,
    }
});
  

export const FETCH_CATALOG_FAILURE: string = `${PREFIX}_FETCH_CATALOG_FAILURE`;
const fetchCatalogFailure: ActionCreator<Action> = () => ({
    type: FETCH_CATALOG_FAILURE
});
  