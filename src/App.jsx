import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from 'modules/ContactForm/ContactForm';
import Filter from 'modules/Filter/Filter';
import ContactList from 'modules/ContactList/ContactList';
import StyledBookTitle from 'modules/Contact/PhoneBookTitle.styled';
import ContactTitle from 'modules/Contact/ContactTitle.styled';
import ContactContainer from 'modules/Contact/СontactsContainer.styled';

import { addContact, fetchContacts } from 'redux/operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getError } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

function App() {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isNameExist = contName => {
    const normalizedName = contName.toLowerCase();
    const result = filteredContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isNameExist(name)) {
      Notify.failure(`${name} has already added in contacts`);
      return false;
    } else {
      Notify.success('Сontact has been added successfully');
    }
    const action = addContact({ name, number });
    dispatch(action);
    return true;
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const isContact = Boolean(filteredContacts.length);

  return (
    <>
      <StyledBookTitle>Phonebook</StyledBookTitle>
      <ContactForm onSubmit={handleAddContact} />
      {!isError && (
        <ContactContainer>
          <ContactTitle>Contacts</ContactTitle>
          <Filter value={filter} onChange={changeFilter} />
          {isContact && <ContactList />}
          {!isContact && <p>No contact in phonebook</p>}
        </ContactContainer>
      )}
      {isError && (
        <p style={{ fontSize: 24, fontWeight: 800 }}>
          Ops, Something goes wrong{' '}
        </p>
      )}
    </>
  );
}

export default App;
