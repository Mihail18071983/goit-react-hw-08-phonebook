import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

// import filterReducer from './filter/filter-reducer';
// import contactReducer from './contacts/contacts-reducer';

import persistedReducer from './rootReducer';

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)

