import { ICatalogResults, ICatalogEntryView } from './interfaces/catalog';

// tslint:disable-next-line
const itemData: ICatalogResults = require('./fixtures/item-data.json');

interface ICatalogResultsResponse {
    data: ICatalogEntryView[];
}

export const retrieve = (): Promise<ICatalogResultsResponse> => Promise.resolve({ data: itemData.CatalogEntryView });
