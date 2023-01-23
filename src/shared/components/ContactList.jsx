import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';

const ContactList = ({ visibleContacts, onDeleteContact }) => (
  <ul>
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
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(PropTypes.object),
};
