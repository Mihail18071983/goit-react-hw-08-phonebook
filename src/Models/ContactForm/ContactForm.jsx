import { Component } from 'react';
import PropTypes from 'prop-types';
import StyledBtn from 'shared/components/Button/Button.styled';
import StyledContactForm from './ContactForm.styled';
import StyledLabel from './label.styled';

class ContactForm extends Component {
  state = {name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledContactForm onSubmit={this.handleSubmit}>
        <StyledLabel >
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </StyledLabel >
        <StyledLabel >
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </StyledLabel >
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledContactForm>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit:PropTypes.func
}