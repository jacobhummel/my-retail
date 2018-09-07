import { ICatalogResults } from "./models/catalog";

// tslint:disable-next-line
const itemData: ICatalogResults = require('./fixtures/item-data.json');

interface ICatalogResultsResponse {
    data: ICatalogResults;
}

export const retrieve = (): Promise<ICatalogResultsResponse> => Promise.resolve({ data: itemData });
