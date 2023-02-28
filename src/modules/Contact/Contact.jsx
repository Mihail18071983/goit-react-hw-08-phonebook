import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import StyledBtn from '../../shared/components/Button/Button.styled';
import StyledContact from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete =()=> dispatch(deleteContact(id));
  return (
    <StyledContact>
      <span>
        {name}: {number}
      </span>
      <StyledBtn type="button" onClick={handleDelete}>
        Delete
      </StyledBtn>
    </StyledContact>
  );
};

export default Contact;

Contact.defaultProps = {
  id: '01',
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
