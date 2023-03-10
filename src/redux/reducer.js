const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: {
    query: '',
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'contacts/addContact':
      // Нужно вернуть новый объект состояния
      return {
        // в котором есть все данные существующего состояния
        ...state,
        // и новый массив контактов
        contacts: [
          // в котором есть все существующие задачи
          ...state.contacts,
          // и объект нового контакта
          action.payload,
        ],
      };
    case 'filter/filterContacts':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
