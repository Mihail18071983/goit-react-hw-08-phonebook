
import { customAlphabet} from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const nanoid = customAlphabet('1234567890', 2);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => { state.push(payload) },
      prepare: data => {
        return {
          payload: {
            id: 'id' + nanoid(2),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export default contactsSlice.reducer;

export const {addContact,deleteContact}=contactsSlice.actions