import { Component } from 'react';
import { customAlphabet } from 'nanoid';
import ContactForm from 'Models/ContactForm/ContactForm';
import Filter from 'shared/components/Filter/Filter';
import ContactList from 'shared/components/ContactList/ContactList';
import StyledBookTitle from 'shared/components/PhoneBookTitle.styled';
import ContactTitle from 'shared/components/ContactTitle.styled';
import ContactContainer from 'shared/components/Contact/СontactsContainer.styled';

export class App extends Component {
  state = { contacts: [], filter: '' };

  formSubmitHandler = ({ name, number }) => {
    const nanoid = customAlphabet('1234567890', 2);
    const id = 'id-' + nanoid(2);
    const contact = { id, name, number };
    const contactNames = this.getContactNames();
    const isNameExist = contactNames.includes(contact.name);
    if (isNameExist) alert(`${contact.name} has already added in contacts`);
    else
      this.setState(prevState => {
        return { contacts: [contact, ...prevState.contacts] };
      });
  };

  getContactNames = () => {
    const { contacts } = this.state;
    return contacts.map(contact => contact.name);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <StyledBookTitle>Phonebook</StyledBookTitle>
        <ContactForm onSubmitForm={this.formSubmitHandler} />
        <ContactContainer>
          <ContactTitle>Contacts</ContactTitle>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            visibleContacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </ContactContainer>
      </>
    );
  }
}
