import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';
import { getIsLoading } from 'redux/contacts/contacts-selectors';
import { showSuccessMessage } from 'shared/utils/notifications';
import StyledBtn from '../../shared/components/Button/Button.styled';
import { StyledContact } from './Contact.styled';
import { ConctactName } from './Contact.styled';
import { ContactNumber } from './Contact.styled';

import { IconContext } from 'react-icons';

import { FaTrashAlt, FaSpinner } from 'react-icons/fa';

import { BiEditAlt } from 'react-icons/bi';

import { ColorRing } from 'react-loader-spinner';
import EditContactForm from 'modules/EditContactForm/EditContactForm';

const Contact = ({ name, number, id }) => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = () => {
    dispatch(deleteContact(id));
    showSuccessMessage(
      `${name} has been successfully deleted from your phone book!`
    );
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  return (
    
    <StyledContact>
      {isEdit ? (
        <EditContactForm
          id={id}
          initialValues={{ name, number }}
          onSubmit={() => setIsEdit(false)}
        />
      ) : (
        <>
          <ConctactName>{name}</ConctactName>
          <ContactNumber href={`tel:${number}`}>{number}</ContactNumber>
          <StyledBtn type="button" onClick={handleEdit}>
            <IconContext.Provider value={{ size: '2em' }}>
              {isLoading ? <FaSpinner /> : <BiEditAlt />}
            </IconContext.Provider>
          </StyledBtn>
        </>
      )}

      {!isLoading && (
        <>
          <StyledBtn type="button" onClick={handleDelete}>
            <IconContext.Provider value={{ size: '2em' }}>
              {isLoading ? <FaSpinner /> : <FaTrashAlt />}
            </IconContext.Provider>
          </StyledBtn>
        </>
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
