import { combineReducers } from "redux";

import contactReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const rootReducer = combineReducers({
    contacts: contactReducer,
    filter:filterReducer,
})

export default rootReducer;