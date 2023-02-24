import { createAction } from '@reduxjs/toolkit';

import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890', 2);

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id:'id-'+nanoid(),
    }
  }
})


export const deleteContact = createAction('contacts/delete');
