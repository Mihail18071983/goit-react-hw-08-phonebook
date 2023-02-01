import { useState } from 'react';
import PropTypes from 'prop-types';
import inititalState from './initialState';
import StyledBtn from 'shared/components/Button/Button.styled';
import StyledContactForm from './ContactForm.styled';
import StyledLabel from './label.styled';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...inititalState });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = onSubmit({ name, number });
    if (result) {
      setState({ ...inititalState });
    }
  };

  const { name, number } = state;

  return (
      <StyledContactForm onSubmit={handleSubmit}>
        <StyledLabel>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledContactForm>
    );

};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
