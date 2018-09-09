import { ICatalogEntryView } from "../../api/interfaces/catalog";
import { FETCH_CATALOG_SUCCESS } from "./actions";

export interface ICatalogEntryMap {
  [key: string]: ICatalogEntryView;
}

export interface ICatalogState {
  itemIds: string[];
  itemsById: ICatalogEntryMap;
}

const initialState: ICatalogState = {
  itemIds: [],
  itemsById: {}
};

const catalogReducer = (state: ICatalogState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CATALOG_SUCCESS:
      const itemIds: string[] = action.payload.results.map(
        (item: ICatalogEntryView) => item.itemId
      );
      const itemsById: ICatalogEntryMap = action.payload.results.reduce(
        (map: ICatalogEntryMap, item: ICatalogEntryView) => {
          map[item.itemId] = item;
          return map;
        },
        {}
      );

      return {
        ...state,
        itemIds,
        itemsById
      };
    default:
      return state;
  }
};

export default catalogReducer;
