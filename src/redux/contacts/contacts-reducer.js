import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from './contacts-actions';



const contactReducer = createReducer([], builder => {
  builder
    .addCase(addContact, (state, { payload }) => [...state, payload])
    .addCase(deleteContact, (state, { payload }) =>
      state.filter(contact => contact.id !== payload)
    );
});

export default contactReducer;
