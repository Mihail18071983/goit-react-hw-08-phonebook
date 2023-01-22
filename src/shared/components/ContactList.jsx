import React from 'react';

const ContactList = ({visibleContacts, onDeleteContact}) => (
    <ul>
            {visibleContacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <span>{name}:</span>
                  <span>{number}</span>
                  <button type="button" onClick={() => onDeleteContact(id)}>
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
)

export default ContactList;