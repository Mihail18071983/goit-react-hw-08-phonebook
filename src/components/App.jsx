import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = { contacts: [], name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts } = this.state;
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.number.value);
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    contacts.push({ [name]: number });
    console.dir(contacts);
    this.setState({ contacts });
    console.dir(this.state);
  };

  render() {
    const {contacts}=this.state
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
          <div>
          <p>Contacts</p>
          <ul>
            {contacts.map((contact, idx) => {
              const propName=Object.keys(contact)
              return <li key={idx}><span>{propName}:</span><span>{contact[propName]}</span></li>;
            })}
          </ul>
        </div>
        </form>
       
    );
  }
}
