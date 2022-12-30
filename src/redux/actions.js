import { nanoid } from 'nanoid';

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const getFilterValue = text => {
  return {
    type: 'filter/filterContacts',
    payload: {
      query: text,
    },
  };
};
