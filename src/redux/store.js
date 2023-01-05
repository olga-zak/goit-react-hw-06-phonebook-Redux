import { createStore, combineReducers } from 'redux';

import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
import { contactsReducer } from './contacts/contacts-reducers';
import { filterReducer } from './filter/filter-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
