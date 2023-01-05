import { FILTER_CONTACTS } from './filter-types';

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return payload;
    default:
      return state;
  }
};
