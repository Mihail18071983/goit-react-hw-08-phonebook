
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { showInfoMessage, showSuccessMessage } from 'shared/utils/notifications';

import ContactForm from 'modules/ContactForm/ContactForm';
import Filter from 'modules/Filter/Filter';
import ContactList from 'modules/ContactList/ContactList'
import ContactContainer from 'modules/Contact/СontactsContainer.styled';

import { StyledBox } from 'shared/components/Page.styled';
import { FormHead } from 'shared/components/Page.styled';

import { addContact, fetchContacts } from 'redux/contacts/contact-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getError } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';



function ContactPage() {
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

  const handleAddContact = ({ name, email, number }) => {
    if (isNameExist(name)) {
      showInfoMessage(`${name} has already added in contacts`);
      return false;
    } else {
      showSuccessMessage('Сontact has been added successfully');
    }
    const action = addContact({ name, email, number });
    dispatch(action);
    return true;
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const isContact = Boolean(filteredContacts.length);

  return (
    <StyledBox>
      <FormHead>ADDCONTACT FORM</FormHead>
      <ContactForm onSubmit={handleAddContact} />
      {!isError && (
        <ContactContainer>
          <FormHead>Contacts</FormHead>
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
    </StyledBox>
  );
}

export default ContactPage;
