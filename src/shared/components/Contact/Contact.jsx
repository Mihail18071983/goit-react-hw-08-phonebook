import React from 'react';
import PropTypes from 'prop-types';
import StyledBtn from '../Button/Button.styled';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <StyledBtn type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </StyledBtn>
  </li>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
