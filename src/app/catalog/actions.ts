import { Action, ActionCreator } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { catalog } from '../../api';
import { ICatalogEntryView } from '../../api/interfaces/catalog';
import { IRootState } from '../store';

const PREFIX = 'CATALOG';

// export const FETCH_CATALOG = `${PREFIX}_FETCH_CATALOG`;
export const fetchCatalog = () => {
    return async (dispatch: ThunkDispatch<IRootState, void, Action>) => {
        catalog.retrieve()
            .then(response => dispatch(fetchCatalogSuccess(response.data)));
    }
};

export const FETCH_CATALOG_SUCCESS = `${PREFIX}_FETCH_CATALOG_SUCCESS`;
export const fetchCatalogSuccess: ActionCreator<Action> = (results: ICatalogEntryView[]) => ({
    type: FETCH_CATALOG_SUCCESS,
    payload: {
        results,
    }
});
