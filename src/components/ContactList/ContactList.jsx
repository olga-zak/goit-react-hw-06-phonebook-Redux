//import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilterQueue } from 'redux/selectors';

// const getFilteredContacts = (contacts, filterValue) => {
//   return contacts.filter(({ name }) => name.includes(filterValue));
// };

export const ContactList = () => {
  //const contacts = useSelector(state => state.contacts);
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterQueue);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.query.toLowerCase())
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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func,
// };
