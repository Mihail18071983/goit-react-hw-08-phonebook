import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';
import { getIsLoading } from 'redux/contacts/contacts-selectors';
import { showSuccessMessage } from 'shared/utils/notifications';
import StyledBtn from '../../shared/components/Button/Button.styled';
import StyledContact from './Contact.styled';

import { ColorRing } from 'react-loader-spinner';

const Contact = ({ name, number, id }) => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    showSuccessMessage(
      `${name} has been successfully deleted from your phone book!`
    );
  };
  return (
    <StyledContact>
      <span>
        {name}: {number}
      </span>
      {!isLoading && (
        <StyledBtn type="button" onClick={handleDelete}>
          Delete
        </StyledBtn>
      )}
      {isLoading && (
        <ColorRing
          visible={true}
          height="40"
          width="40"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
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
