import React from 'react';
import Contact from './Contact';

const ContactList = ({ visibleContacts, onDeleteContact }) => (
  <ul>
    {visibleContacts.map(({ id, name, number }) => {
      return (
        <Contact
          name={name}
          id={id}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      );
    })}
  </ul>
);

export default ContactList;
