import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import ContactListStyled from './ContactList.styled';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const visibleContacts = useSelector(getFilteredContacts);
  return (
    <ContactListStyled>
      {visibleContacts.map(({ id, name, email, number }) => {
        return (
          <Contact name={name} key={id} email={email} number={number} id={id} />
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;

ContactList.defaultProps = {
  visibleContacts: [],
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
