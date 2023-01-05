import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilterQueue } from 'redux/filter/filter-selector';

export const ContactList = () => {
  //const contacts = useSelector(state => state.contacts);
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterQueue);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </List>
  );
};
