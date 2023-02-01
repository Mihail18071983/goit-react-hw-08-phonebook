import { useState, useEffect } from 'react';
import { customAlphabet } from 'nanoid';
import ContactForm from 'modules/ContactForm/ContactForm';
import Filter from 'modules/Filter/Filter';
import ContactList from 'modules/ContactList/ContactList';
import StyledBookTitle from 'modules/Contact/PhoneBookTitle.styled';
import ContactTitle from 'modules/Contact/ContactTitle.styled';
import ContactContainer from 'modules/Contact/СontactsContainer.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
        return contacts ? contacts : [];
  });;
  const [filter, setFilter] = useState('');

  useEffect(()=> {
          localStorage.setItem("contacts", JSON.stringify(contacts));
      }, [contacts]);

  
  
  const formSubmitHandler = ({ name, number }) => {
    const nanoid = customAlphabet('1234567890', 2);
    const id = 'id-' + nanoid(2);
    const contact = { id, name, number };
    if (isNameExist(name)) {
      alert(`${contact.name} has already added in contacts`);
      return false;
    }

    setContacts(prevContacts => {
      return [contact, ...prevContacts] ;
    });
    return true;
  };

  const isNameExist = contName => {
    const normalizedName = contName.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    return Boolean(result);
  };

     const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

   const getVisibleContacts=() =>{
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
  }

  const deleteContact = contactID => {
    setContacts(prevState => (
       prevState.filter(contact => contact.id !== contactID)));
  };

const isContact = Boolean(contacts.length);
    const visibleContacts = getVisibleContacts();

    return (
      <>
        <StyledBookTitle>Phonebook</StyledBookTitle>
        <ContactForm onSubmit={formSubmitHandler} />
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
};

export default App;


