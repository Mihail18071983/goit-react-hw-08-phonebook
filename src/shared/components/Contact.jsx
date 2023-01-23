import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <li>
    <span>{name}:{number}</span>
    <button type="button" onClick={() => onDeleteContact(id)}>
      delete
    </button>
  </li>
);

export default Contact;

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string,
    onDeleteContact:PropTypes.func.isRequired
}