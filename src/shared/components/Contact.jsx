import React from 'react';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <li key={id}>
    <span>{name}:</span>
    <span>{number}</span>
    <button type="button" onClick={() => onDeleteContact(id)}>
      delete
    </button>
  </li>
);

export default Contact;
