import { customAlphabet } from 'nanoid';

import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

const nanoid = customAlphabet('1234567890', 2);


export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id:'id-'+nanoid(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return { type: DELETE_CONTACT, payload };
};