export const getAllContacts = store => store.contacts.items;

export const getFilteredContacts = ({ contacts, filter } ) => {
    if (!filter) {
      return contacts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
}

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;