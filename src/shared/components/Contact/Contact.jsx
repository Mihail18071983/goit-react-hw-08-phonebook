import React from 'react';
import PropTypes from 'prop-types';
import StyledBtn from '../Button/Button.styled';
import StyledContact from './Contact.styled';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <StyledContact>
    <span>
      {name}: {number}
    </span>
    <StyledBtn type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </StyledBtn>
  </StyledContact>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
