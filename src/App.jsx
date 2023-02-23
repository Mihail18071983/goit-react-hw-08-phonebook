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
  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //       return contacts ? contacts : [];
  // });
  const contacts = useSelector(store => store.contacts);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  //   const isNameExist = contName => {
  //   const normalizedName = contName.toLowerCase();
  //   const result = contacts.find(({ name }) => {
  //     return name.toLowerCase() === normalizedName;
  //   });
  //   return Boolean(result);
  // };

  const handleAddContact = ({ name, number }) => {
    // const nanoid = customAlphabet('1234567890', 2);
    // const id = 'id-' + nanoid(2);
    // const contact = { name, number };
    // if (isNameExist(name)) {
    //   alert(`${contact.name} has already added in contacts`);
    //   return false;
    // }

    const action = addContact({ name, number });
    console.log(action);
    dispatch(action);
    // setContacts(prevContacts => {
    //   return [contact, ...prevContacts] ;
    // });
    // return true;
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

  // const deleteContact = contactID => {
  //   setContacts(prevState => (
  //      prevState.filter(contact => contact.id !== contactID)));
  // };

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
            onDeleteContact={deleteContact}
          />
        )}
        {!isContact && <p>No contact in phonebook</p>}
      </ContactContainer>
    </>
  );
}

export default App;
