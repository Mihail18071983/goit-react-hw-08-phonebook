import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import ContactListStyled from './ContactList.styled';

const ContactList = ({ visibleContacts, onDeleteContact }) => (
  <ContactListStyled>
    {visibleContacts.map(({ id, name, number }) => {
      return (
        <Contact
          name={name}
          key={id}
          number={number}
          onDeleteContact={()=>onDeleteContact(id)}
        />
      );
    })}
  </ContactListStyled>
);

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(PropTypes.object),
};
