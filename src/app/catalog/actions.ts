import { Action, ActionCreator, Dispatch } from 'redux';

import { catalog } from '../../api';
import { ICatalogEntryView } from '../../api/interfaces/catalog';

const PREFIX = 'CATALOG';

export const FETCH_CATALOG = `${PREFIX}_FETCH_CATALOG`;
export const fetchCatalog = () => {
    return (dispatch: Dispatch) => {
        catalog.retrieve()
            .then(response => dispatch(fetchCatalogSuccess(response.data)));
    }
};

export const FETCH_CATALOG_SUCCESS = `${PREFIX}_FETCH_CATALOG_SUCCESS`;
const fetchCatalogSuccess: ActionCreator<Action> = (results: ICatalogEntryView[]) => ({
    type: typeof FETCH_CATALOG_SUCCESS,
    payload: {
        results,
    }
});
