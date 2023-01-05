import { FILTER_CONTACTS } from './filter-types';

export const getFilterValue = filterQuery => {
  return {
    type: FILTER_CONTACTS,
    payload: filterQuery,
  };
};
