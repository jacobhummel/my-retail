import { ICatalogResults } from '../../api/models/catalog';

import {
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_SUCCESS,
} from "../actions";

export interface ICatalogState {
    items: ICatalogResults[];
    error: boolean;
};

const initialState: ICatalogState = {
    items: [],
    error: false,
}

const catalogReducer = (state: ICatalogState = initialState, action: any) => {
    switch(action.type) {
        case FETCH_CATALOG_SUCCESS:
            return {
                ...state,
                items: action.results,
            }
        case FETCH_CATALOG_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
};

export default catalogReducer;
