import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import ContactForm from 'modules/ContactForm/ContactForm';
import Filter from 'modules/Filter/Filter';
import ContactList from 'modules/ContactList/ContactList';
import StyledBookTitle from 'modules/Contact/PhoneBookTitle.styled';
import ContactTitle from 'modules/Contact/ContactTitle.styled';
import ContactContainer from 'modules/Contact/СontactsContainer.styled';

import { addContact, deleteContact } from 'redux/actions';

function App() {
  const contacts = useSelector(store => store.contacts);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

    const isNameExist = contName => {
    const normalizedName = contName.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isNameExist(name)) {
      alert(`${name} has already added in contacts`);
      return false;
    }

    const action = addContact({ name, number });
    dispatch(action);
    return true;
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // const getVisibleContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(
  //     ({ name, number }) =>
  //       name.toLowerCase().includes(normalizedFilter) ||
  //       number.includes(normalizedFilter)
  //   );
  // };

  const handleDeleteContact = contactID => {
    const action = deleteContact(contactID);
    dispatch(action);
  };

  const isContact = Boolean(contacts.length);
  const visibleContacts = contacts;
  console.log(visibleContacts)

  return (
    <>
      <StyledBookTitle>Phonebook</StyledBookTitle>
      <ContactForm onSubmit={handleAddContact} />
      <ContactContainer>
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} onChange={changeFilter} />
        {isContact && (
          <ContactList
            visibleContacts={visibleContacts}
            onDeleteContact={handleDeleteContact}
          />
        )}
        {!isContact && <p>No contact in phonebook</p>}
      </ContactContainer>
    </>
  );
}

export default App;
