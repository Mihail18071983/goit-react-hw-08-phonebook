import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from './contacts-actions';



const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]:(state, { payload })=>state.filter(contact => contact.id !== payload)
})

export default contactReducer;
