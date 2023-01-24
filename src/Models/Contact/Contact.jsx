import React from 'react';
import { customAlphabet } from 'nanoid';
import PropTypes from 'prop-types';

import StyledBtn from '../../shared/components/Button/Button.styled';
import StyledContact from './Contact.styled';

const nanoid = customAlphabet('1234567890', 2);
const id = 'id-' + nanoid(2);

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

Contact.defaultProps = {
  id,
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

