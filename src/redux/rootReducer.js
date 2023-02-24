import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    contacts: contactReducer,
    filter:filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;